import React from 'react';
import { TrendingUp } from 'lucide-react';
import FeatureGrid from './FeatureGrid';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <div className="container mx-auto px-4 pt-20 pb-32">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Logo Animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center gap-2">
            <TrendingUp className="w-24 h-24 text-red-500 animate-pulse" strokeWidth={1.5} />
            <h1 className="text-2xl font-bold tracking-wider text-red-500">
              App Trader Infalível
            </h1>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          AUMENTE SEUS LUCROS E DIMINUA SEUS PREJUÍZOS
        </h2>

        {/* Subheading */}
        <p className={`text-xl md:text-2xl text-gray-400 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Você não precisa mais contar com a sorte.
        </p>

        {/* Feature Text */}
        <div className={`text-lg md:text-xl text-green-500 font-semibold max-w-2xl transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Receba sinais certeiros, descubra as melhores brechas do mercado e faça operações com até 100% de assertividade.
        </div>

        <FeatureGrid />
      </div>
    </div>
  );
}