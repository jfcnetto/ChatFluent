import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-space font-bold text-lg">ChatFluent</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aprenda inglês praticando conversas reais através de histórias interativas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Navegação</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/simulator" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Simulador</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ChatFluent. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}