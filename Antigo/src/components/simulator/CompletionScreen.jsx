import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, ArrowLeft, Star, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getLevel, UI_TEXTS } from '@/lib/stories';

export default function CompletionScreen({ score, errors, streak, totalScore, lang, onRetry, onBack }) {
  const success = errors <= 3;
  const level = getLevel(totalScore, lang);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center"
    >
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
        success ? 'bg-success/10' : 'bg-warning/10'
      }`}>
        <Trophy className={`w-10 h-10 ${success ? 'text-success' : 'text-warning'}`} />
      </div>

      <h2 className="font-space font-bold text-2xl mb-2">
        {success
          ? (UI_TEXTS.congrats[lang] || UI_TEXTS.congrats.en)
          : (UI_TEXTS.tooManyErrors[lang] || UI_TEXTS.tooManyErrors.en)}
      </h2>

      <div className="flex items-center gap-6 my-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Star className="w-5 h-5 text-warning" />
            <span className="font-bold text-xl">{score}</span>
          </div>
          <span className="text-xs text-muted-foreground">{UI_TEXTS.score[lang] || 'Score'}</span>
        </div>
        <div className="w-px h-10 bg-border" />
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Flame className="w-5 h-5 text-destructive" />
            <span className="font-bold text-xl">{streak}</span>
          </div>
          <span className="text-xs text-muted-foreground">{UI_TEXTS.streak[lang] || 'Streak'}</span>
        </div>
      </div>

      <div className="bg-muted rounded-xl px-6 py-3 mb-8">
        <span className="text-sm text-muted-foreground">{UI_TEXTS.level[lang] || 'Level'}: </span>
        <span className="font-semibold">{level}</span>
        <span className="text-sm text-muted-foreground ml-2">({totalScore} pts)</span>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          {UI_TEXTS.backToStories[lang] || 'Back'}
        </Button>
        <Button onClick={onRetry} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          {UI_TEXTS.tryAgain[lang] || 'Try again'}
        </Button>
      </div>
    </motion.div>
  );
}