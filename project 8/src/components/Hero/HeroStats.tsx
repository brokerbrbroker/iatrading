import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10.000+',
    label: 'Usuários Ativos'
  },
  {
    icon: Award,
    value: '98.7%',
    label: 'Taxa de Acerto'
  },
  {
    icon: TrendingUp,
    value: '982%',
    label: 'Rentabilidade Média'
  }
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-black/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all">
            <Icon className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}