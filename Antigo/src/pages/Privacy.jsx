import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <h1 className="font-space font-bold text-3xl">Política de Privacidade</h1>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">1. Informações que Coletamos</h2>
            <p>
              O ChatFluent utiliza o armazenamento local do navegador (localStorage) para salvar seu progresso 
              no jogo, incluindo pontuação, idioma selecionado e histórias completadas. Não coletamos dados 
              pessoais identificáveis.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">2. Uso de Cookies</h2>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e cookies de terceiros (como Google 
              AdSense e Google Analytics) para exibição de anúncios e análise de tráfego. Você pode gerenciar 
              suas preferências de cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">3. Google AdSense</h2>
            <p>
              Este site utiliza o Google AdSense para exibir anúncios. O Google pode usar cookies para 
              personalizar anúncios com base nas suas visitas anteriores a este e outros sites. Você pode 
              optar por desativar a publicidade personalizada visitando as Configurações de Anúncios do Google.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros. 
              Os dados de progresso são armazenados exclusivamente no seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança para proteger suas informações. No entanto, nenhuma 
              transmissão pela internet é 100% segura.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">6. Alterações</h2>
            <p>
              Reservamo-nos o direito de atualizar esta política a qualquer momento. Quaisquer alterações 
              serão publicadas nesta página.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">7. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta política, entre em contato conosco através da página de Contato.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}