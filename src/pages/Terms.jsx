import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <h1 className="font-space font-bold text-3xl">Termos de Uso</h1>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o ChatFluent, você concorda com estes Termos de Uso. Se não concordar 
              com algum destes termos, por favor, não utilize o site.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">2. Descrição do Serviço</h2>
            <p>
              O ChatFluent é uma plataforma educativa gratuita que oferece simulações de conversas em 
              inglês através de histórias interativas. O conteúdo é fornecido apenas para fins educativos.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">3. Uso Permitido</h2>
            <p>Você concorda em usar o site apenas para fins legais e educativos. É proibido:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Copiar ou redistribuir o conteúdo sem autorização</li>
              <li>Tentar acessar áreas restritas do site</li>
              <li>Usar o site de forma que possa danificá-lo</li>
              <li>Usar bots ou scripts automatizados</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do ChatFluent, incluindo textos, gráficos, logotipos e software, é 
              propriedade do ChatFluent e está protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">5. Isenção de Responsabilidade</h2>
            <p>
              O conteúdo é fornecido "como está". Não garantimos que o site estará sempre disponível ou 
              livre de erros. O ChatFluent não substitui cursos formais de idiomas.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">6. Publicidade</h2>
            <p>
              O site exibe anúncios através do Google AdSense. Estes anúncios são de responsabilidade 
              dos anunciantes e não representam endosso do ChatFluent.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">7. Alterações nos Termos</h2>
            <p>
              Podemos atualizar estes termos a qualquer momento. O uso contínuo do site após as 
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">8. Contato</h2>
            <p>
              Para dúvidas sobre estes termos, entre em contato conosco através da página de Contato.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}