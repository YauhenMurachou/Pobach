import { useTranslateData } from 'src/hooks/useTranslateData';

export const useRestore = () => {
  const { deletedNotify } = useTranslateData();
  const [deletion, recovery] = deletedNotify.split('.');
  return [deletion, recovery];
};
