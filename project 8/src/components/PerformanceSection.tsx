import React, { useState } from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';
import DailyPerformance from './DailyPerformance';
import { monthlyData } from '../data/monthlyPerformanceData';

export default function PerformanceSection() {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  const handleMonthClick = (month: string) => {
    setOpenMonth(openMonth === month ? null : month);
  };

  return (
    <div className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Histórico de Rentabilidade</h2>
          <p className="text-gray-400 text-lg mb-4">
            Acompanhe nossa performance excepcional mês a mês
          </p>
          <p className="text-sm text-gray-500">
            Clique em qualquer mês para ver o relatório detalhado dia a dia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthlyData.map((item, index) => {
            const isOpen = openMonth === item.month;

            return (
              <div
                key={index}
                className={`bg-black/40 p-6 rounded-xl border border-gray-800 hover:border-green-500/50 
                  transition-all duration-300 cursor-pointer`}
                onClick={() => handleMonthClick(item.month)}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">{item.month}</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 
                        ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-green-500">
                    {item.return}%
                  </span>
                  {item.isPartial && (
                    <span className="ml-2 text-sm text-gray-400">
                      até dia 14
                    </span>
                  )}
                </div>
                {!isOpen && (
                  <p className="text-sm text-gray-500 mt-2">
                    Toque para ver resultados diários
                  </p>
                )}
                <DailyPerformance 
                  dailyReturns={item.dailyReturns.map(dr => ({
                    date: new Date(dr.date + 'T00:00:00'),
                    return: dr.return
                  }))}
                  isOpen={isOpen}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}