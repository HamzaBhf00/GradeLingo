import type { Language } from "@/types/phrases";

export const descriptions: Record<Language, Record<string, string>> = {
  en: {
    A1: "Beginner",
    A2: "Elementary",
    B1: "Intermediate",
    B2: "Upper Intermediate",
    C1: "Advanced",
    C2: "Mastery"
  },
  es: {
    A1: "Principiante",
    A2: "Básico",
    B1: "Intermedio",
    B2: "Intermedio Alto",
    C1: "Avanzado",
    C2: "Maestría"
  },
  fr: {
    A1: "Débutant",
    A2: "Élémentaire",
    B1: "Intermédiaire",
    B2: "Intermédiaire Supérieur",
    C1: "Avancé",
    C2: "Maîtrise"
  }
};

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Spanish",
  fr: "French"
};

export const levelColors: Record<string, { bg: string, border: string, icon: string }> = {
  A1: {
    bg: "bg-green-500/10 dark:bg-green-950/50",
    border: "border-green-500/20 dark:border-green-500/30",
    icon: "text-green-500 dark:text-green-400"
  },
  A2: {
    bg: "bg-blue-500/10 dark:bg-blue-950/50",
    border: "border-blue-500/20 dark:border-blue-500/30",
    icon: "text-blue-500 dark:text-blue-400"
  },
  B1: {
    bg: "bg-yellow-500/10 dark:bg-yellow-950/50",
    border: "border-yellow-500/20 dark:border-yellow-500/30",
    icon: "text-yellow-500 dark:text-yellow-400"
  },
  B2: {
    bg: "bg-orange-500/10 dark:bg-orange-950/50",
    border: "border-orange-500/20 dark:border-orange-500/30",
    icon: "text-orange-500 dark:text-orange-400"
  },
  C1: {
    bg: "bg-rose-500/10 dark:bg-rose-950/50",
    border: "border-rose-500/20 dark:border-rose-500/30",
    icon: "text-rose-500 dark:text-rose-400"
  },
  C2: {
    bg: "bg-purple-500/10 dark:bg-purple-950/50",
    border: "border-purple-500/20 dark:border-purple-500/30",
    icon: "text-purple-500 dark:text-purple-400"
  }
};