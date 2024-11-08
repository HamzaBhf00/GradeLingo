"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PhraseInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  translations: {
    inputPlaceholder: string;
    maxChars: string;
    characters: string;
    generateButton: string;
    generating: string;
  };
}

export function PhraseInput({ value, onChange, onGenerate, isLoading, translations }: PhraseInputProps) {
  const remainingChars = 500 - value.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 mb-8 relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="space-y-4 relative">
          <Textarea
            placeholder={translations.inputPlaceholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[120px] text-lg resize-none bg-background/50 backdrop-blur-sm focus:bg-background transition-colors"
            maxLength={500}
            disabled={isLoading}
          />
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{translations.maxChars}</span>
            <span className={remainingChars < 50 ? "text-destructive" : ""}>
              {remainingChars} {translations.characters}
            </span>
          </div>
          <Button
            onClick={onGenerate}
            className="w-full py-6 text-lg relative overflow-hidden group transition-all duration-300"
            disabled={!value.trim() || isLoading}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 group-hover:opacity-80 transition-opacity" />
            <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
            <span className="relative z-10">
              {isLoading ? translations.generating : translations.generateButton}
            </span>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}