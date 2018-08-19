const months: string[] = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const getDate = (date: string) => {
  const parseDate = new Date(date);
  const day = parseDate.getUTCDate();
  const month = months[parseDate.getMonth()];
  const year = parseDate.getFullYear();
  const hours = parseDate.getUTCHours();
  const minutes = parseDate.getUTCMinutes();

  return `${day} ${month} ${year}г. в ${hours}:${minutes}`;
};