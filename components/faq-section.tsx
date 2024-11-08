"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { FAQ } from "@/types/phrases";

interface FAQSectionProps {
  title: string;
  items: FAQ[];
}

export function FAQSection({ title, items }: FAQSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-30" />
          <HelpCircle className="h-8 w-8 text-primary relative" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {title}
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {items.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="border-2 rounded-lg px-6 data-[state=open]:bg-muted/50"
            >
              <AccordionTrigger className="text-lg hover:no-underline hover:text-primary transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}