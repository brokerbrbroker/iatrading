import React from 'react';
import { DollarSign } from 'lucide-react';

export default function UsualPricing() {
  return (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <DollarSign className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-bold text-blue-400">
          Nossos clientes geralmente pagam:
        </h3>
      </div>
      
      <div className="space-y-4 text-center">
        <p className="text-gray-300">
          <span className="font-bold text-blue-300">R$ 5.000 a R$ 10.000</span>
          {' '}em cursos e mentorias
        </p>
        
        <p className="text-gray-300">
          <span className="font-bold text-blue-300">R$ 500 a R$ 2.000</span>
          {' '}mensais em sinais e grupos VIP
        </p>
        
        <p className="text-gray-300">
          <span className="font-bold text-blue-300">R$ 300 a R$ 1.000</span>
          {' '}em robôs e indicadores
        </p>
        
        <div className="pt-4 border-t border-blue-500/20">
          <p className="text-lg font-semibold text-blue-400">
            Total: R$ 15.000 a R$ 35.000 por ano
          </p>
        </div>
      </div>
    </div>
  );
}