"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/types/phrases";
import { motion } from "framer-motion";

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: (lang: Language) => void;
}

export function LanguageToggle({ currentLanguage, onToggle }: LanguageToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 right-4 z-50"
    >
      <Button
        variant="outline"
        size="lg"
        onClick={() => onToggle(currentLanguage === 'en' ? 'es' : 'en')}
        className="bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90 transition-all"
      >
        <Languages className="mr-2 h-4 w-4" />
        {currentLanguage === 'en' ? 'Español' : 'English'}
      </Button>
    </motion.div>
  );
}