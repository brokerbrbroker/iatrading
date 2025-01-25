const holidays2024 = [
  '2024-01-01', // Ano Novo
  '2024-02-12', // Carnaval
  '2024-02-13', // Carnaval
  '2024-03-29', // Sexta-feira Santa
  '2024-04-21', // Tiradentes
  '2024-05-01', // Dia do Trabalho
  '2024-05-30', // Corpus Christi
  '2024-09-07', // Independência
  '2024-10-12', // Nossa Senhora
  '2024-11-02', // Finados
  '2024-11-15', // Proclamação da República
  '2024-12-25', // Natal
];

const holidays2025 = [
  '2025-01-01', // Ano Novo
  '2025-03-03', // Carnaval
  '2025-03-04', // Carnaval
  '2025-04-18', // Sexta-feira Santa
  '2025-04-21', // Tiradentes
  '2025-05-01', // Dia do Trabalho
  '2025-06-19', // Corpus Christi
  '2025-09-07', // Independência
  '2025-10-12', // Nossa Senhora
  '2025-11-02', // Finados
  '2025-11-15', // Proclamação da República
  '2025-12-25', // Natal
];

export function isHoliday(date: Date): boolean {
  const dateString = date.toISOString().split('T')[0];
  return holidays2024.includes(dateString) || holidays2025.includes(dateString);
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}