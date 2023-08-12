import { useTranslateData } from 'src/hooks/useTranslateData';

export const useRestore = (deleted: boolean) => {
  const { deletedNotify } = useTranslateData();
  const [deletion, recovery] = deleted ? deletedNotify.split('.') : [];
  return [deletion, recovery];
};
