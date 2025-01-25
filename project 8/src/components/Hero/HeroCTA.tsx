import React from 'react';
import { ArrowRight } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

export default function HeroCTA() {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <a
        href="#pricing"
        onClick={scrollToPricing}
        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg text-lg mb-8"
      >
        COMEÇAR AGORA
        <ArrowRight className="w-5 h-5" />
      </a>
      
      <p className="text-sm text-gray-500 mb-8">
        Oferta especial por tempo limitado
      </p>

      <VideoPlayer />
    </div>
  );
}