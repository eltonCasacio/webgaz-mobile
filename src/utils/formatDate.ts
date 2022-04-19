export function formatDate(date: any) {
  const dateFormated = new Date(date);
  const day = dateFormated.getDate();
  const month = dateFormated.getMonth() + 1;
  const year = dateFormated.getFullYear();

  const formatedDay = day < 10 ? `0${day}` : `${day}`;
  const formatedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formatedDay}/${formatedMonth}/${year}`;
}
