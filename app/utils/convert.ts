export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);

  const months = [
    'january', 'february', 'march', 'april',
    'may', 'june', 'july', 'august',
    'september', 'october', 'november', 'december'
  ];

  const monthName = months[date.getMonth()];

  const formattedDate = `${date.getDate()} ${monthName} ${date.getFullYear()}, ${formatAMPM(date)}`;

  return formattedDate;
};

export function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 часов становятся 12
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${hours}:${minutes}:${date.getSeconds()} ${ampm}`;
  return time;
};
