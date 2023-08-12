import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/redux-store';

export const useIsOwner = (id: number) => {
  const { userId, ownerAvatar } = useSelector((state: RootState) => ({
    userId: state.auth.userId,
    ownerAvatar: state.auth.ownerAvatar,
  }));
  const isOwner = userId === id;
  return { isOwner, ownerAvatar };
};
