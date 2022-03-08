export const getHour = (): string => {
  return `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(
    2,
    '0',
  )}`;
};
