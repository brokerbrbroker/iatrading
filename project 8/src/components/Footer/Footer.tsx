import React from 'react';
import { Shield, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-red-500" />
                <span className="font-bold text-xl">Hacker Invest</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando a maneira como você opera no mercado financeiro, com tecnologia de ponta e resultados comprovados.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:suporte@traderinfalivel.com" className="hover:text-white transition-colors">
                  suporte@hackerinvest.com
                </a>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              <p className="mb-4">
                Este site não é afiliado a nenhuma corretora de opções binárias. Resultados passados não garantem resultados futuros.
              </p>
              <p>
                Operar no mercado financeiro envolve riscos. Invista de forma consciente e responsável.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
            <p>© {currentYear} Trader Infalível. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}