import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Flame, Star, Zap } from 'lucide-react';

export default function ProgressHeader({ step, total, score, streak, lang, uiTexts }) {
  const pct = total > 0 ? ((step) / total) * 100 : 0;

  return (
    <div className="bg-card border-b border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <Star className="w-4 h-4 text-warning" />
            <span>{score}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <Flame className="w-4 h-4 text-destructive" />
            <span>{streak}</span>
          </div>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {uiTexts?.step?.[lang] || 'Step'} {step + 1}/{total}
        </span>
      </div>
      <Progress value={pct} className="h-2" />
    </div>
  );
}