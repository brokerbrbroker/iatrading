import React from 'react';
import { LineChart, Target, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: LineChart,
    title: 'Análise Avançada',
    description: 'Algoritmos precisos para identificar as melhores oportunidades',
    animation: 'hover:animate-bounce'
  },
  {
    icon: Target,
    title: 'Sinais Precisos',
    description: 'Alertas em tempo real com alta taxa de acerto',
    animation: 'hover:animate-spin-slow'
  },
  {
    icon: Zap,
    title: 'Execução Automática',
    description: 'Conexão direta com sua corretora para operações precisas',
    animation: 'hover:animate-pulse'
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}