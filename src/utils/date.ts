export const convertDate = (date: string) => {
  const dateParts = date.split('T');
  const day = dateParts[0].slice(8);
  const month = dateParts[0].slice(5, 7);
  const year = dateParts[0].slice(0, 4);
  const newDate = day + '.' + month + '.' + year;
  return newDate;
};
