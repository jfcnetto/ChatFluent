import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Globe, Trophy, BookOpen, ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LANGUAGES } from '@/lib/stories';

const features = [
  { icon: MessageCircle, title: 'Conversas Reais', desc: 'Pratique diálogos do dia a dia em situações reais como aeroporto, restaurante e hotel.' },
  { icon: Zap, title: 'Feedback Instantâneo', desc: 'Saiba imediatamente se acertou e aprenda com explicações no seu idioma.' },
  { icon: Trophy, title: 'Sistema de Progresso', desc: 'Ganhe pontos, mantenha sequências e suba de nível enquanto aprende.' },
  { icon: Globe, title: '11 Idiomas', desc: 'Explicações em 11 idiomas para que você aprenda no idioma que já conhece.' },
  { icon: BookOpen, title: 'Modo História', desc: 'Histórias interativas que prendem sua atenção e tornam o aprendizado divertido.' },
  { icon: Flame, title: '100% Gratuito', desc: 'Sem custos, sem cadastro obrigatório. Comece a praticar agora mesmo.' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              100% gratuito · Sem cadastro
            </div>
            <h1 className="font-space font-bold text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Aprenda inglês praticando{' '}
              <span className="text-primary">conversas reais</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              Escolha seu idioma e comece agora. Histórias interativas que fazem você praticar inglês como se estivesse vivendo a situação.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/simulator">
                <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl shadow-lg shadow-primary/20">
                  Começar agora <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-base px-8 h-12 rounded-xl">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-space font-bold text-2xl md:text-3xl mb-3">Idiomas Suportados</h2>
          <p className="text-muted-foreground">Explicações no seu idioma nativo</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 bg-card border border-border px-4 py-2.5 rounded-xl text-sm font-medium"
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-space font-bold text-2xl md:text-3xl mb-3">Por que ChatFluent?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Uma forma divertida e eficiente de praticar inglês
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center"
        >
          <h2 className="font-space font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
            Pronto para começar?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Escolha uma história e comece a praticar agora mesmo. É grátis!
          </p>
          <Link to="/simulator">
            <Button size="lg" variant="secondary" className="text-base px-8 h-12 rounded-xl gap-2">
              Ir para o Simulador <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}