import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Button } from '@mui/material';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UserType } from 'src/types';

type Props = {
  followingInProgress: number[];
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
  user: UserType;
};

const FollowButtons: FC<Props> = memo(
  ({ followingInProgress, unfollowUsers, followUsers, user }) => {
    const { t } = useTranslation();
    return (
      <div>
        {user.followed ? (
          <Button
            variant="contained"
            startIcon={<PersonRemoveIcon />}
            disabled={followingInProgress.some(
              (id: UserType['id']) => id === user.id
            )}
            onClick={() => {
              unfollowUsers(user.id);
            }}
            color="info"
          >
            {t('users.unfollow')}
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            disabled={followingInProgress.some(
              (id: UserType['id']) => id === user.id
            )}
            onClick={() => {
              followUsers(user.id);
            }}
          >
            {t('users.follow')}
          </Button>
        )}
      </div>
    );
  }
);

export default FollowButtons;
