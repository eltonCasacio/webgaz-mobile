export function formatDate(date: any) {
  const dateFormated = new Date(date);
  const day = dateFormated.getDate();
  const month = dateFormated.getMonth();
  const year = dateFormated.getFullYear();

  return `${day}/${month + 1}/${year}`;
}

export function formatDateUs(date: any) {
  const dateFormated = new Date(date);
  const day = dateFormated.getDate();
  const month = dateFormated.getMonth();
  const year = dateFormated.getFullYear();

  return `${year}-${month + 1}-${day}`;
}
