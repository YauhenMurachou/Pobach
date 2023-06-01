import { Pagination } from '@mui/material';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import classes from './UsersPagination.module.css';

type Props = {
  pagesCount: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
  setPage: Dispatch<SetStateAction<number>>;
};

const UsersPagination: FC<Props> = ({
  pagesCount,
  currentPage,
  setPage,
  handlePageChange,
}) => {
  const togglePage = (_event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    handlePageChange(page);
  };

  return (
    <div className={classes.pagination}>
      <Pagination
        count={pagesCount}
        showFirstButton
        showLastButton
        page={currentPage}
        onChange={togglePage}
        shape="rounded"
      />
    </div>
  );
};

export default UsersPagination;
