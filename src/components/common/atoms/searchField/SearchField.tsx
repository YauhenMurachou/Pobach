import {
  ChangeEvent,
  Dispatch,
  FC,
  memo,
  ReactNode,
  SetStateAction,
} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import classes from './SearchField.module.css';

type Props = {
  placeholder: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  isSearch: boolean;
  isDisabled?: boolean;
  rightIcons?: ReactNode;
};

const SearchField: FC<Props> = memo(
  ({
    placeholder,
    searchValue,
    setSearchValue,
    isSearch,
    isDisabled,
    rightIcons,
  }) => {
    const handleChangeSearch = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      setSearchValue(e.target.value);
    };

    return (
      <div className={classes.wrapper}>
        <TextField
          onChange={handleChangeSearch}
          value={searchValue}
          placeholder={placeholder}
          disabled={isDisabled}
          fullWidth
          type="search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: !isSearch && rightIcons,
          }}
          sx={{ bgcolor: 'var(--white-main)' }}
          autoFocus={isSearch}
        />
      </div>
    );
  }
);

export default SearchField;
