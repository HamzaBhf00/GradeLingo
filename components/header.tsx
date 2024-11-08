"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { Language } from "@/types/phrases";

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  translations: {
    selectLanguage: string;
  };
}

export function Header({ currentLanguage, onLanguageChange, translations }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">  {/* Removed flex-1 */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            GradeLingo
          </span>
        </Link>
        <div className="flex items-center space-x-2">  {/* Changed gap-2 to space-x-2 for better browser support */}
          <ThemeToggle />
          <LanguageSelector 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange}
            translations={translations}
          />
        </div>
      </div>
    </motion.header>
  );
} 