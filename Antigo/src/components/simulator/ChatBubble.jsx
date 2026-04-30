import React from 'react';
import { motion } from 'framer-motion';

export default function ChatBubble({ type, children, delay = 0 }) {
  const isNpc = type === 'npc';
  const isSystem = type === 'system';
  const isUser = type === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isNpc
            ? 'bg-card border border-border text-foreground rounded-tl-md'
            : isUser
            ? 'bg-primary text-primary-foreground rounded-tr-md'
            : isSystem
            ? 'bg-muted border border-border text-muted-foreground italic rounded-md text-xs mx-auto max-w-[90%]'
            : 'bg-card border border-border text-foreground'
        }`}
      >
        {isNpc && (
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold text-primary">🤖 NPC</span>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
}