"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Copy, Check } from "lucide-react";
import { PhraseLevel, Language } from "@/types/phrases";
import { motion, AnimatePresence } from "framer-motion";
import { levelColors } from "@/config/languages";
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface PhraseResultsProps {
  phrases: PhraseLevel[];
  language: Language;
}

const levelLabels: Record<Language, string> = {
  en: 'Level',
  es: 'Nivel',
  fr: 'Niveau'
};

export function PhraseResults({ phrases, language }: PhraseResultsProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  if (phrases.length === 0) return null;

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast({
        title: "Copied!",
        description: "Phrase copied to clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy phrase",
        variant: "destructive",
      });
    }
  };

  return (
    <ScrollArea className="h-[600px] rounded-lg pr-4">
      <AnimatePresence mode="popLayout">
        <div className="space-y-4 p-1">
          {phrases.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout
            >
              <Card 
                className={`p-6 transition-all hover:shadow-lg border-2 ${levelColors[level.level]?.border} ${levelColors[level.level]?.bg} relative group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div 
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-inner ${levelColors[level.level]?.icon} relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent opacity-20 rounded-full" />
                    <BookOpen className="h-6 w-6 relative" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">
                        {levelLabels[language]} {level.level}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                        {level.description}
                      </span>
                    </div>
                    <p className="text-lg leading-relaxed">{level.phrase}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(level.phrase, index)}
                      className="mt-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 mr-2" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copiedIndex === index ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </ScrollArea>
  );
}