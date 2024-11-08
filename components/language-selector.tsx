"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Language, languageConfig } from "@/types/phrases";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  translations: {
    selectLanguage: string;
  };
}

export function LanguageSelector({ 
  currentLanguage, 
  onLanguageChange,
  translations
}: LanguageSelectorProps) {
  const handleLanguageChange = (lang: Language) => {
    if (lang !== currentLanguage) {
      onLanguageChange(lang);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-colors border-2 gap-2 min-w-[160px]"
          >
            <span className="text-xl" aria-hidden="true">
              {languageConfig[currentLanguage].flag}
            </span>
            <span className="font-medium">
              {languageConfig[currentLanguage].nativeName}
            </span>
            <Globe2 className="h-4 w-4 ml-auto opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuLabel className="text-xs uppercase text-muted-foreground font-medium">
            {translations.selectLanguage}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.entries(languageConfig).map(([key, value]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => handleLanguageChange(key as Language)}
              className={`cursor-pointer gap-2 ${
                currentLanguage === key ? 'bg-accent' : ''
              }`}
            >
              <span className="text-xl" aria-hidden="true">
                {value.flag}
              </span>
              <span className="flex-1">{value.nativeName}</span>
              {currentLanguage === key && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}