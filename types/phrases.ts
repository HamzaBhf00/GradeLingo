export interface PhraseLevel {
  level: string;
  description: string;
  phrase: string;
}

export type Language = 'es' | 'en' | 'fr';

export interface LanguageInfo {
  name: string;
  flag: string;
  nativeName: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const languageConfig: Record<Language, LanguageInfo> = {
  en: {
    name: 'English',
    flag: '🇬🇧',
    nativeName: 'English'
  },
  es: {
    name: 'Spanish',
    flag: '🇪🇸',
    nativeName: 'Español'
  },
  fr: {
    name: 'French',
    flag: '🇫🇷',
    nativeName: 'Français'
  }
};

export interface Translations {
  [key: string]: {
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    maxChars: string;
    characters: string;
    generateButton: string;
    generating: string;
    selectLanguage: string;
    features: {
      aiPowered: { title: string; description: string; };
      proficiencyLevels: { title: string; description: string; };
      multiLanguage: { title: string; description: string; };
      instantResults: { title: string; description: string; };
    };
    faq: {
      title: string;
      items: FAQ[];
    };
    errorMessages: {
      required: string;
      failed: string;
    }
  }
}

export const translations: Translations = {
  en: {
    title: "GradeLingo",
    subtitle: "Transform your language. Master every level.",
    inputPlaceholder: "Enter your phrase and watch it evolve across proficiency levels...",
    maxChars: "Maximum length",
    characters: "characters remaining",
    generateButton: "Transform Your Phrase",
    generating: "Crafting variations...",
    selectLanguage: "Choose your language",
    features: {
      aiPowered: {
        title: "AI-Powered",
        description: "Advanced language processing for accurate transformations"
      },
      proficiencyLevels: {
        title: "6 Proficiency Levels",
        description: "From beginner (A1) to mastery (C2)"
      },
      multiLanguage: {
        title: "Multiple Languages",
        description: "Support for English, Spanish, and French"
      },
      instantResults: {
        title: "Instant Results",
        description: "Get variations in seconds with context-aware adaptations"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does GradeLingo work?",
          answer: "GradeLingo uses advanced language models to analyze your input and generate variations appropriate for different proficiency levels while maintaining the original meaning."
        },
        {
          question: "What are the different proficiency levels?",
          answer: "We follow the Common European Framework of Reference (CEFR) with six levels: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper Intermediate), C1 (Advanced), and C2 (Mastery)."
        },
        {
          question: "Can I use this for learning a new language?",
          answer: "Yes! GradeLingo is perfect for language learners. It helps you understand how the same idea can be expressed at different skill levels, making it easier to progress in your learning journey."
        },
        {
          question: "Are the translations always accurate?",
          answer: "While our AI strives for accuracy, we recommend using the generated phrases as learning tools and guidelines rather than definitive translations."
        },
        {
          question: "Can I use this for academic or professional content?",
          answer: "Yes, GradeLingo is suitable for academic and professional use. However, we recommend reviewing the generated content to ensure it matches your specific context and requirements."
        }
      ]
    },
    errorMessages: {
      required: "Please share a phrase to transform",
      failed: "We couldn't generate variations. Please try again."
    }
  },
  es: {
    title: "GradeLingo",
    subtitle: "Transforma tu lenguaje. Domina cada nivel.",
    inputPlaceholder: "Ingresa tu frase y observa cómo evoluciona en diferentes niveles...",
    maxChars: "Longitud máxima",
    characters: "caracteres restantes",
    generateButton: "Transformar Frase",
    generating: "Creando variaciones...",
    selectLanguage: "Elige tu idioma",
    features: {
      aiPowered: {
        title: "Potenciado por IA",
        description: "Procesamiento avanzado del lenguaje para transformaciones precisas"
      },
      proficiencyLevels: {
        title: "6 Niveles de Competencia",
        description: "Desde principiante (A1) hasta maestría (C2)"
      },
      multiLanguage: {
        title: "Múltiples Idiomas",
        description: "Soporte para inglés, español y francés"
      },
      instantResults: {
        title: "Resultados Instantáneos",
        description: "Obtén variaciones en segundos con adaptaciones contextuales"
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Cómo funciona GradeLingo?",
          answer: "GradeLingo utiliza modelos avanzados de lenguaje para analizar tu entrada y generar variaciones apropiadas para diferentes niveles de competencia, manteniendo el significado original."
        },
        {
          question: "¿Cuáles son los diferentes niveles de competencia?",
          answer: "Seguimos el Marco Común Europeo de Referencia (MCER) con seis niveles: A1 (Principiante), A2 (Básico), B1 (Intermedio), B2 (Intermedio Alto), C1 (Avanzado) y C2 (Maestría)."
        },
        {
          question: "¿Puedo usarlo para aprender un nuevo idioma?",
          answer: "¡Sí! GradeLingo es perfecto para estudiantes de idiomas. Te ayuda a entender cómo la misma idea puede expresarse en diferentes niveles de habilidad, facilitando tu progreso en el aprendizaje."
        },
        {
          question: "¿Las traducciones son siempre precisas?",
          answer: "Si bien nuestra IA se esfuerza por la precisión, recomendamos usar las frases generadas como herramientas de aprendizaje y guías, más que como traducciones definitivas."
        },
        {
          question: "¿Puedo usarlo para contenido académico o profesional?",
          answer: "Sí, GradeLingo es adecuado para uso académico y profesional. Sin embargo, recomendamos revisar el contenido generado para asegurarte de que se ajuste a tu contexto y requisitos específicos."
        }
      ]
    },
    errorMessages: {
      required: "Por favor, comparte una frase para transformar",
      failed: "No pudimos generar variaciones. Inténtalo de nuevo."
    }
  },
  fr: {
    title: "GradeLingo",
    subtitle: "Transformez votre langage. Maîtrisez chaque niveau.",
    inputPlaceholder: "Saisissez votre phrase et regardez-la évoluer à travers les niveaux...",
    maxChars: "Longueur maximale",
    characters: "caractères restants",
    generateButton: "Transformer la Phrase",
    generating: "Création des variations...",
    selectLanguage: "Choisissez votre langue",
    features: {
      aiPowered: {
        title: "Propulsé par l'IA",
        description: "Traitement avancé du langage pour des transformations précises"
      },
      proficiencyLevels: {
        title: "6 Niveaux de Compétence",
        description: "Du débutant (A1) à la maîtrise (C2)"
      },
      multiLanguage: {
        title: "Langues Multiples",
        description: "Support pour l'anglais, l'espagnol et le français"
      },
      instantResults: {
        title: "Résultats Instantanés",
        description: "Obtenez des variations en quelques secondes avec des adaptations contextuelles"
      }
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question: "Comment fonctionne GradeLingo ?",
          answer: "GradeLingo utilise des modèles de langage avancés pour analyser votre entrée et générer des variations appropriées pour différents niveaux de compétence, tout en maintenant le sens original."
        },
        {
          question: "Quels sont les différents niveaux de compétence ?",
          answer: "Nous suivons le Cadre Européen Commun de Référence (CECR) avec six niveaux : A1 (Débutant), A2 (Élémentaire), B1 (Intermédiaire), B2 (Intermédiaire Supérieur), C1 (Avancé) et C2 (Maîtrise)."
        },
        {
          question: "Puis-je l'utiliser pour apprendre une nouvelle langue ?",
          answer: "Oui ! GradeLingo est parfait pour les apprenants en langues. Il vous aide à comprendre comment la même idée peut être exprimée à différents niveaux de compétence, facilitant ainsi votre progression dans l'apprentissage."
        },
        {
          question: "Les traductions sont-elles toujours précises ?",
          answer: "Bien que notre IA s'efforce d'être précise, nous recommandons d'utiliser les phrases générées comme outils d'apprentissage et guides plutôt que comme des traductions définitives."
        },
        {
          question: "Puis-je l'utiliser pour du contenu académique ou professionnel ?",
          answer: "Oui, GradeLingo convient à un usage académique et professionnel. Cependant, nous recommandons de revoir le contenu généré pour vous assurer qu'il correspond à votre contexte et à vos exigences spécifiques."
        }
      ]
    },
    errorMessages: {
      required: "Veuillez partager une phrase à transformer",
      failed: "Nous n'avons pas pu générer de variations. Veuillez réessayer."
    }
  }
};