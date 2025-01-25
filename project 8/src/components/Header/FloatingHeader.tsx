import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

export default function FloatingHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm transform transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="h-12 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-5 h-5 text-red-500" />
            <span className="font-bold text-base">Trader Infalível</span>
          </div>
          
          <a
            href="#pricing"
            onClick={scrollToPricing}
            className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-black font-bold px-3 py-1.5 rounded text-sm transition-all transform hover:scale-105"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </header>
  );
}