import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function OptionButton({ text, index, selected, isCorrect, disabled, onClick }) {
  const showResult = selected !== null;
  const isThis = selected === index;
  const isCorrectOption = isCorrect === index;

  let borderClass = 'border-border hover:border-primary/50 hover:bg-primary/5';
  let iconEl = null;

  if (showResult && isThis && isCorrectOption) {
    borderClass = 'border-success bg-success/10';
    iconEl = <Check className="w-4 h-4 text-success shrink-0" />;
  } else if (showResult && isThis && !isCorrectOption) {
    borderClass = 'border-destructive bg-destructive/10';
    iconEl = <X className="w-4 h-4 text-destructive shrink-0" />;
  } else if (showResult && isCorrectOption) {
    borderClass = 'border-success/50 bg-success/5';
    iconEl = <Check className="w-4 h-4 text-success/60 shrink-0" />;
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => !disabled && onClick(index)}
      disabled={disabled}
      className={`w-full flex items-center gap-3 text-left p-3.5 rounded-xl border-2 transition-all text-sm font-medium ${borderClass} ${
        disabled ? 'cursor-default' : 'cursor-pointer active:scale-[0.98]'
      }`}
    >
      <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="flex-1">{text}</span>
      {iconEl}
    </motion.button>
  );
}