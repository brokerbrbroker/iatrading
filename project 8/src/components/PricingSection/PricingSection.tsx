import React from 'react';
import { ArrowRight } from 'lucide-react';
import SpecialOfferAlert from './SpecialOfferAlert';
import BenefitsList from './BenefitsList';

export default function PricingSection() {
  return (
    <div id="pricing" className="bg-gradient-to-b from-[#1a1f35] to-[#0f1525] py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Comece Agora Mesmo</h2>
            <p className="text-lg md:text-xl text-gray-400">
              Transforme seus resultados com o Hacker Invest
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1e2338]/50 to-[#141824]/50 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-xl">
            <SpecialOfferAlert />
            <BenefitsList />

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://pay.kirvano.com/bc8d9a3d-c89a-434d-9c6d-9771333e69fa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg w-full md:w-auto transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
              >
                GARANTIR MINHA VAGA
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="mt-4 text-xs md:text-sm text-gray-500">
                Pagamento 100% seguro • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}