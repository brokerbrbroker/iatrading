import React from 'react';
import { Brain, TrendingUp, Award, Users } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

function FeatureItem({ icon, title, description, delay }: FeatureItemProps) {
  return (
    <div 
      className="group flex items-start gap-4 p-6 bg-black/30 rounded-xl border border-gray-800 
        hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:bg-black/50
        animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="text-blue-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "982% Mais Rentabilidade",
      description: "Aumente drasticamente seus lucros com nossa tecnologia avançada de análise operacional",
      delay: "0ms"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inteligência Artificial Exclusiva",
      description: "O único aplicativo do Brasil com IA integrada, identificando padrões e oportunidades com precisão",
      delay: "100ms"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Líder na América Latina",
      description: "Reconhecido como o melhor analisador de mercado, com resultados comprovados por milhares de usuários",
      delay: "200ms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Ativa",
      description: "Mais de 10.000 usuários ativos compartilhando sucesso e resultados consistentes",
      delay: "300ms"
    }
  ];

  return (
    <div className="bg-[#1a1a2e] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Tecnologia que Revoluciona seus Resultados
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in" style={{ animationDelay: "50ms" }}>
            Descubra como nossa tecnologia exclusiva identifica as melhores oportunidades do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}