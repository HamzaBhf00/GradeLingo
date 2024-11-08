"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import { PhraseInput } from "@/components/phrase-input";
import { PhraseResults } from "@/components/phrase-results";
import { FeatureShowcase } from "@/components/feature-showcase";
import { FAQSection } from "@/components/faq-section";
import type { PhraseLevel, Language } from "@/types/phrases";
import { translations } from "@/types/phrases";
import { debounce } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [inputPhrase, setInputPhrase] = useState("");
  const [generatedPhrases, setGeneratedPhrases] = useState<PhraseLevel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const { toast } = useToast();
  const t = translations[language];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setInputPhrase("");
    setGeneratedPhrases([]);
  };

  const generatePhrases = debounce(async () => {
    if (!inputPhrase.trim()) {
      toast({
        title: "Error",
        description: t.errorMessages.required,
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      setGeneratedPhrases([]);
      
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phrase: inputPhrase, targetLang: language }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || t.errorMessages.failed);
      }

      const data = await response.json();
      
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error(t.errorMessages.failed);
      }

      setGeneratedPhrases(data);
    } catch (error) {
      console.error("Error:", error);
      setGeneratedPhrases([]);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : t.errorMessages.failed,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, 300);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted pointer-events-none" />
      
      <Header 
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
        translations={translations[language]}
      />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-30" />
                <Languages className="h-12 w-12 text-primary relative" />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {t.title}
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <PhraseInput
            value={inputPhrase}
            onChange={setInputPhrase}
            onGenerate={generatePhrases}
            isLoading={isLoading}
            translations={translations[language]}
          />
          
          <PhraseResults 
            phrases={generatedPhrases}
            language={language}
          />
          
          <FeatureShowcase translations={t.features} />

          <FAQSection 
            title={t.faq.title}
            items={t.faq.items}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}