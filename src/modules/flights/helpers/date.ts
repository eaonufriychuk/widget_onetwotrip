const months: string[] = [
  'янв',
  'фев',
  'мар',
  'апр',
  'мая',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
];

export const getDate = (date: string) => {
  const parseDate = new Date(date);
  const day = parseDate.getUTCDate();
  const month = months[parseDate.getMonth()];
  const hours = parseDate.getUTCHours();
  const minutes = parseDate.getUTCMinutes();

  return `${day} ${month} - ${hours}:${minutes}`;
};