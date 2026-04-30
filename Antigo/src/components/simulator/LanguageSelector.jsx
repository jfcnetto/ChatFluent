import React from 'react';
import { motion } from 'framer-motion';
import { LANGUAGES, UI_TEXTS } from '@/lib/stories';

export default function LanguageSelector({ currentLang, onSelect }) {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="font-space font-bold text-xl text-center mb-6">
        {UI_TEXTS.selectLanguage[currentLang] || 'Select your language'}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {LANGUAGES.map((lang, i) => (
          <motion.button
            key={lang.code}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => onSelect(lang.code)}
            className={`flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all text-left text-sm font-medium active:scale-[0.97] ${
              currentLang === lang.code
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40 hover:bg-muted'
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span>{lang.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}