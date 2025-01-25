import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroStats from './HeroStats';
import HeroCTA from './HeroCTA';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className={`space-y-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <HeroHeadline />
          <HeroStats />
          <HeroCTA />
        </div>
      </div>
    </div>
  );
}