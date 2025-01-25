import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

interface DailyReturn {
  date: Date;
  return: number;
}

interface DailyPerformanceProps {
  dailyReturns: DailyReturn[];
  isOpen: boolean;
}

export default function DailyPerformance({ dailyReturns, isOpen }: DailyPerformanceProps) {
  if (!isOpen) return null;

  return (
    <div className="mt-4 border-t border-gray-800 pt-4 animate-fade-in">
      <div className="max-h-[400px] overflow-y-auto">
        {dailyReturns.map((day, index) => (
          <div
            key={day.date.toString()}
            className="flex justify-between items-center py-2 border-b border-gray-800/50"
          >
            <span className="text-sm">{formatDate(day.date)}</span>
            <div className="flex items-center">
              <span
                className={`text-sm font-medium ${
                  day.return >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {day.return >= 0 ? '+' : ''}{day.return.toFixed(1)}%
              </span>
              {day.return >= 0 ? (
                <ChevronUp className="w-4 h-4 text-green-500 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 text-red-500 ml-1" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}