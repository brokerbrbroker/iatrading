import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';

export default function SpecialOfferAlert() {
  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit'
  });

  return (
    <div className="mb-6 md:mb-8">
      <div className="bg-gradient-to-br from-[#1e2338]/30 to-[#141824]/30 rounded-lg p-4 md:p-6">
        {/* Header with pulsing effect */}
        <div className="flex items-center justify-center mb-4 md:mb-6">
          <div className="flex items-center gap-2 bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full animate-bounce text-sm md:text-base">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold">SOMENTE ATÉ HOJE, {today}</span>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          {/* Normal Price Info */}
          <div className="bg-[#381e1e]/30 rounded-lg p-3 md:p-4">
            <p className="text-base md:text-lg text-gray-300 mb-2">
  Normalmente, nossos clientes pagam:
</p>
            <p className="text-red-500 text-lg md:text-xl text-blue-400">
  <s>R$ 997,00 pelo aplicativo</s>
</p>
<p className="text-red-500 text-lg md:text-xl text-blue-400">
  <s>+ R$ 97,00 pelo servidor</s>
</p>
          </div>

          {/* Special Offer */}
          <div className="bg-[#1e381f]/30 rounded-lg p-3 md:p-4">
            <p className="text-base md:text-lg font-bold text-white mb-2">SUPER OFERTA ESPECIAL:</p>
            <p className="text-2xl md:text-3xl font-bold text-green-500 mb-2">
              Apenas R$ 29,90
            </p>
            <p className="text-base md:text-lg text-green-400">
              pagamento único e vitalício
            </p>
            <p className="text-xs md:text-sm text-green-300 mt-2">
              *Você leva o aplicativo COMPLETO!
            </p>
          </div>

          {/* Urgency Message */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 text-yellow-500">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
            <p className="text-xs md:text-sm font-semibold">Oferta por tempo limitado!</p>
          </div>
        </div>
      </div>
    </div>
  );
}