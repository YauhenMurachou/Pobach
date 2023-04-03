import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import classes from './SearchField.module.css';

type Props = {
  placeholder: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  isSearch: boolean;
};

const SearchField: FC<Props> = memo(
  ({ placeholder, searchValue, setSearchValue, isSearch }) => {
    const handleChangeSearch = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      setSearchValue(event.target.value);
    };

    return (
      <div className={classes.wrapper}>
        <TextField
          onChange={handleChangeSearch}
          value={searchValue}
          placeholder={placeholder}
          fullWidth
          type="search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: 'var(--white-main)' }}
          autoFocus={isSearch}
        />
      </div>
    );
  }
);

export default SearchField;
