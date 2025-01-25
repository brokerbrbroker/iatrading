import React from 'react';
import { MessageCircle } from 'lucide-react';
import { testimonials } from './testimonialData';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  return (
    <div className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <MessageCircle className="w-16 h-16 text-green-500 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Conheça quem já está transformando seus resultados com nossa tecnologia
          </p>
          <p className="text-sm text-gray-500">
            Deslize para o lado para ver mais depoimentos
          </p>
        </div>

        {/* Container com scroll horizontal suave para mobile */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 max-w-7xl mx-auto scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[85vw] flex-shrink-0 snap-center md:w-auto">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de scroll para mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}