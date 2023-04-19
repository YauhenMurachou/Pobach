import { Dispatch } from 'react';
import { getUsersThunkCreator } from 'src/redux/usersReducer';

export const calculatePagesCount = (total: number, pageSize: number) => {
  const pagesCount = Math.ceil(total / pageSize);
  return pagesCount;
};

export const getUsers = (
  dispatch: Dispatch<unknown>,
  currentPage: number,
  pageSize: number,
  name?: string,
  isFriend?: boolean
) => dispatch(getUsersThunkCreator(currentPage, pageSize, name, isFriend));
