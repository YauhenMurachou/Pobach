import { useEffect, useState } from 'react';
import { useDebounce } from 'src/hooks/useDebounce';

export const useSearch = (
  onChange: (currentPage: number, pageSize: number, name?: string) => void,
  currentPage: number,
  pageSize: number
) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleSearch = () => setIsSearch((prevState) => !prevState);
  const debouncedValue = useDebounce<string>(searchValue, 500);

  useEffect(() => {
    setIsSearch(false);
    setSearchValue('');
  }, []);

  useEffect(() => {
    if (onChange && (searchValue.trim().length >= 2 || !searchValue.length)) {
      onChange(currentPage, pageSize, searchValue);
    }
  }, [debouncedValue]); // eslint-disable-line

  return { toggleSearch, isSearch, setSearchValue, searchValue };
};
