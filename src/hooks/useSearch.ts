import { Dispatch, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'src/hooks/useDebounce';

export const useSearch = (
  onChange: (
    dispatch: Dispatch<unknown>,
    currentPage: number,
    pageSize: number,
    name?: string,
    isFriend?: boolean
  ) => void,
  currentPage: number,
  pageSize: number,
  isFriend?: boolean
) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const toggleSearch = () => setIsSearch((prevState) => !prevState);
  const debouncedValue = useDebounce<string>(searchValue, 500);

  useEffect(() => {
    setIsSearch(false);
    setSearchValue('');
  }, []);

  useEffect(() => {
    if (onChange && (searchValue.trim().length >= 2 || !searchValue.length)) {
      onChange(dispatch, currentPage, pageSize, searchValue, isFriend);
    }
  }, [debouncedValue]); // eslint-disable-line

  return { toggleSearch, isSearch, setSearchValue, searchValue };
};
