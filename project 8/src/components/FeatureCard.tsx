import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  animation: string;
}

export default function FeatureCard({ icon: Icon, title, description, animation }: FeatureCardProps) {
  return (
    <div className="bg-black/80 p-6 rounded-xl backdrop-blur-sm border border-gray-800 transform hover:scale-105 transition-all duration-300 hover:border-green-500/50 flex flex-col items-center text-center group">
      <Icon className={`w-12 h-12 text-green-500 transition-all duration-300 ${animation}`} />
      <h3 className="text-xl font-bold my-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}