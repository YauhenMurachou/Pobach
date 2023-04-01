export const calculatePagesCount = (total: number, pageSize: number) => {
  const pagesCount = Math.ceil(total / pageSize);
  return pagesCount;
};
