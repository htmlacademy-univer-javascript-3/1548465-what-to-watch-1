export function getRunTime(runTime: number): string {
  const minutes = runTime % 60;
  const hours = Math.floor(runTime / 60);
  return `${hours}h ${minutes}m`;
}

export function getFormattedReviewDate(date: Date): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const day = date.getDay();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}
