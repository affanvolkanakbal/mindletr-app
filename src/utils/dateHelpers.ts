export const getWeekIdFromDateStr = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(Date.UTC(year, month - 1, day));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearNum = d.getUTCFullYear();
  const weekNo = Math.ceil((((d.getTime() - new Date(Date.UTC(yearNum, 0, 1)).getTime()) / 86400000) + 1) / 7);
  return `${yearNum}-W${weekNo}`;
};

export const getMonthIdFromDateStr = (dateStr: string) => {
  // dateStr format: YYYY-MM-DD
  return dateStr.substring(0, 7);
};
