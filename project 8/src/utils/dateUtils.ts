import { isWeekend, isHoliday } from './holidays';

export function getWorkingDaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = [];
  const date = new Date(year, month - 1, 1);
  
  while (date.getMonth() === month - 1) {
    if (!isWeekend(date) && !isHoliday(date)) {
      days.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }
  
  return days;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', { 
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}