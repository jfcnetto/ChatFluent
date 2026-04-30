import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function StoryCard({ story, lang, completed, bestScore, onClick, index }) {
  const title = story.title[lang] || story.title.en;
  const desc = story.description[lang] || story.description.en;

  const difficultyColors = {
    beginner: 'bg-success/10 text-success border-success/20',
    intermediate: 'bg-warning/10 text-warning border-warning/20',
    advanced: 'bg-destructive/10 text-destructive border-destructive/20',
  };

  const difficultyLabels = {
    beginner: { pt: 'Iniciante', en: 'Beginner', de: 'Anfänger', pl: 'Początkujący', es: 'Principiante', fr: 'Débutant', it: 'Principiante', nl: 'Beginner', ru: 'Начинающий', tr: 'Başlangıç', ja: '初心者' },
    intermediate: { pt: 'Intermediário', en: 'Intermediate', de: 'Mittelstufe', pl: 'Średni', es: 'Intermedio', fr: 'Intermédiaire', it: 'Intermedio', nl: 'Gemiddeld', ru: 'Средний', tr: 'Orta', ja: '中級' },
    advanced: { pt: 'Avançado', en: 'Advanced', de: 'Fortgeschritten', pl: 'Zaawansowany', es: 'Avanzado', fr: 'Avancé', it: 'Avanzato', nl: 'Gevorderd', ru: 'Продвинутый', tr: 'İleri', ja: '上級' },
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onClick={onClick}
      className="w-full text-left bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:border-primary/30 transition-all active:scale-[0.98] group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
          {story.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-base truncate">{title}</h3>
            {completed && <CheckCircle className="w-4 h-4 text-success shrink-0" />}
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{desc}</p>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={`text-xs ${difficultyColors[story.difficulty]}`}>
              {difficultyLabels[story.difficulty]?.[lang] || difficultyLabels[story.difficulty]?.en}
            </Badge>
            <span className="text-xs text-muted-foreground">{story.steps.length} steps</span>
            {bestScore > 0 && (
              <span className="text-xs text-muted-foreground">⭐ {bestScore}</span>
            )}
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
      </div>
    </motion.button>
  );
}