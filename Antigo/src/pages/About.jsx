import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-space font-bold text-3xl md:text-4xl mb-6">Sobre o ChatFluent</h1>
        
        <div className="prose prose-slate max-w-none">
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-space font-bold text-xl m-0">O que é o ChatFluent?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              O ChatFluent é uma plataforma educativa gratuita onde você aprende inglês através de histórias 
              interativas. Em vez de memorizar regras gramaticais, você pratica conversas reais em situações 
              do dia a dia — como no aeroporto, restaurante, hotel ou em uma entrevista de emprego.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-base mb-2">Nossa Missão</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tornar o aprendizado de inglês acessível, divertido e eficiente para todos, 
                independente do idioma nativo ou nível de conhecimento.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2">Para Quem?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Iniciantes a intermediários em inglês que falam português, alemão, polonês, espanhol, 
                francês, italiano, holandês, russo, turco ou japonês.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-warning" />
              </div>
              <h2 className="font-space font-bold text-xl m-0">Como Funciona?</h2>
            </div>
            <ol className="space-y-3 text-muted-foreground text-sm">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <span>Escolha seu idioma nativo para receber explicações personalizadas.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span>Selecione uma história/cenário (aeroporto, restaurante, etc).</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span>Um NPC (personagem) fala em inglês e você escolhe a melhor resposta.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <span>Receba feedback imediato com explicações no seu idioma.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">5</span>
                <span>Ganhe pontos, mantenha sequências e suba de nível!</span>
              </li>
            </ol>
          </div>
        </div>
      </motion.div>
    </div>
  );
}