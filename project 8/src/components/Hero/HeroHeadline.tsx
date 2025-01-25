import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function HeroHeadline() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full mb-6 animate-pulse">
        <TrendingUp className="w-5 h-5" />
        <span className="font-semibold">Tecnologia Exclusiva</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Opere com{' '}
        <span className="text-green-500">100% de Assertividade</span>
        {' '}usando Inteligência Artificial
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
        O único aplicativo do mercado que utiliza IA avançada para identificar 
        operações com alta probabilidade de lucro, sem martingale.
      </p>
    </div>
  );
}