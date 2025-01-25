import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Acesso completo ao aplicativo',
  'Aulas de instalação e configuração',
  'Curso completo de opções binárias',
  'Acesso a estratégias validadas pelos usuários'
];

export default function BenefitsList() {
  return (
    <div className="bg-gradient-to-br from-[#1e2338]/30 to-[#141824]/30 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
      <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center">O que você receberá:</h4>
      <ul className="space-y-3 md:space-y-4 max-w-lg mx-auto">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start md:items-center gap-2 md:gap-3">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5 md:mt-0" />
            <span className="text-sm md:text-base text-gray-200">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}