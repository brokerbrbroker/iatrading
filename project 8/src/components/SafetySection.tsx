import React from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function SafetySection() {
  return (
    <div className="bg-[#0d0d1a] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-red-500 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            O Único Realmente Sem Martingale
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "50ms" }}>
            Operações seguras e consistentes, sem dobrar apostas ou aumentar riscos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/30 p-6 rounded-xl border border-red-500/20 animate-fade-in" 
               style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-8 h-8 text-red-500" />
              <h3 className="text-xl font-bold">Outros Aplicativos</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Usam martingale para recuperar perdas
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Aumentam progressivamente os valores
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Alto risco de perda total
              </li>
            </ul>
          </div>

          <div className="bg-black/30 p-6 rounded-xl border border-green-500/20 animate-fade-in"
               style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-bold">Nosso Aplicativo</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Análise precisa sem martingale
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Gerenciamento de risco inteligente
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Resultados consistentes e seguros
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}