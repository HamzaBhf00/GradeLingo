"use client";

import { Brain, Gauge, Globe2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { Translations, Language } from "@/types/phrases";

interface FeatureShowcaseProps {
  translations: Translations[Language]["features"];
}

const features = [
  {
    key: "aiPowered",
    Icon: Brain
  },
  {
    key: "proficiencyLevels",
    Icon: Gauge
  },
  {
    key: "multiLanguage",
    Icon: Globe2
  },
  {
    key: "instantResults",
    Icon: Sparkles
  }
] as const;

export function FeatureShowcase({ translations }: FeatureShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/[0.02] to-transparent rounded-lg -m-0.5" />
          <div className="relative p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                <feature.Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold mb-1">{translations[feature.key].title}</h3>
                <p className="text-sm text-muted-foreground">
                  {translations[feature.key].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}