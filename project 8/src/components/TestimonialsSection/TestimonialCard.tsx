import React from 'react';
import type { Testimonial } from './testimonialData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-black/40 rounded-xl border border-gray-800 overflow-hidden flex flex-col">
      <div className="relative aspect-[9/16] md:aspect-video">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          controls
          preload="none"
          poster={testimonial.posterUrl}
        >
          <source src={testimonial.videoUrl} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
        <p className="text-green-500 text-sm mb-3">{testimonial.title}</p>
        <p className="text-gray-400 text-sm flex-1">{testimonial.description}</p>
      </div>
    </div>
  );
}