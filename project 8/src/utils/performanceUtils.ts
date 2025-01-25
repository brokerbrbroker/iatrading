import { getWorkingDaysInMonth } from './dateUtils';

export function generateDailyReturns(totalReturn: number, year: number, month: number, maxDay?: number) {
  const workingDays = getWorkingDaysInMonth(year, month)
    .filter(date => !maxDay || date.getDate() <= maxDay)
    .sort((a, b) => a.getTime() - b.getTime());

  if (workingDays.length === 0) return [];

  const dailyReturns = [];
  let remainingReturn = totalReturn;
  
  // Determine number of negative days (1-2 for shorter periods, 2-4 for full months)
  const negativeDays = maxDay ? 
    Math.floor(Math.random() * 2) + 1 : // 1-2 negative days for partial months
    Math.floor(Math.random() * 3) + 2;  // 2-4 negative days for full months
  
  // Create array of indices for negative days, avoiding first and last day
  const negativeIndices = new Set();
  const availableDays = workingDays.length > 2 ? workingDays.length - 2 : workingDays.length;
  
  while (negativeIndices.size < Math.min(negativeDays, availableDays)) {
    const index = Math.floor(Math.random() * availableDays) + 1;
    negativeIndices.add(index);
  }
  
  // Calculate positive returns
  const totalNegative = -1 * negativeDays * 2; // Average -2% loss per negative day
  const requiredPositive = totalReturn - totalNegative;
  const positiveDays = workingDays.length - negativeIndices.size;
  const averagePositiveReturn = requiredPositive / positiveDays;
  
  for (let i = 0; i < workingDays.length; i++) {
    let dayReturn;
    
    if (i === workingDays.length - 1) {
      // Last day - adjust to hit target
      dayReturn = parseFloat(remainingReturn.toFixed(2));
    } else if (negativeIndices.has(i)) {
      // Negative day - between -1% and -3%
      dayReturn = parseFloat((-1 - Math.random() * 2).toFixed(2));
    } else {
      // Positive day - variation around average positive return
      const variance = 0.3; // 30% variance
      const minReturn = averagePositiveReturn * (1 - variance);
      const maxReturn = averagePositiveReturn * (1 + variance);
      dayReturn = parseFloat((minReturn + Math.random() * (maxReturn - minReturn)).toFixed(2));
    }
    
    remainingReturn -= dayReturn;
    
    dailyReturns.push({
      date: workingDays[i],
      return: dayReturn
    });
  }
  
  return dailyReturns;
}