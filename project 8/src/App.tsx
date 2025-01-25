import React, { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import PerformanceSection from './components/PerformanceSection';
import FeaturesSection from './components/FeaturesSection';
import SafetySection from './components/SafetySection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection/PricingSection';
import FAQSection from './components/FAQ/FAQSection';
import Footer from './components/Footer/Footer';
import PixelTracking from './components/PixelTracking';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#1F2937] text-white relative">
      <PixelTracking />
      <div className="relative z-10">
        <Hero isVisible={isVisible} />
        <PerformanceSection />
        <FeaturesSection />
        <SafetySection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;