import React, { useState } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  videoUrl: string;
  name: string;
  title: string;
  description: string;
}

function Testimonial({ videoUrl, name, title, description }: TestimonialProps) {
  return (
    <div className="bg-black/40 rounded-xl border border-gray-800 overflow-hidden w-full">
      <video 
        className="w-full aspect-[9/16] object-cover rounded-t-xl"
        controls
        preload="none"
        poster="https://traderinfalivel.app/wp-content/uploads/2024/09/video-alexandre-poster.jpg"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{title}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      videoUrl: "https://traderinfalivel.app/wp-content/uploads/2024/09/video-alexandre.mp4",
      name: "Alexandre",
      title: "Advogado",
      description: "Alcançou impressionantes 381% de rentabilidade utilizando nossa estratégia exclusiva sem martingale."
    },
    {
      videoUrl: "https://traderinfalivel.app/wp-content/uploads/2024/09/video-henrique.mp4",
      name: "Henrique",
      title: "Profissional de Marketing Digital",
      description: "Encontrou a solução perfeita para maximizar seus ganhos de forma consistente e segura."
    },
    {
      videoUrl: "https://traderinfalivel.app/wp-content/uploads/2024/09/video-alan.mp4",
      name: "Alan",
      title: "Novo Usuário",
      description: "Mesmo sendo iniciante, já está obtendo resultados expressivos com nossa tecnologia."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MessageCircle className="w-16 h-16 text-green-500 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in">
            Conheça quem já está transformando seus resultados com nossa tecnologia
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-black/50 p-2 rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-black/50 p-2 rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-green-500 w-6' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe Instruction */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Deslize para o lado ou use as setas para ver mais depoimentos
          </p>
        </div>
      </div>
    </div>
  );
}