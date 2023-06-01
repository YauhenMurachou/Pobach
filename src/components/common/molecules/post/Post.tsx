import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { profileActions } from 'src/redux/profilePageReducer';

import classes from './Post.module.css';

type Props = {
  message: string;
  likesCount: number;
  id: number;
  isLike?: boolean;
};

const Post: FC<Props> = ({ message, likesCount, id, isLike }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(
      profileActions.updateLikesActionCreator({
        message,
        id,
        likesCount: isLike ? likesCount - 1 : likesCount + 1,
        isLike: !isLike,
      })
    );
  };
  return (
    <div className={classes.post}>
      <div className={classes.iconWrapper}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="avatar"
        />
        <div className={classes.likeWrapper}>
          <FavoriteIcon
            onClick={handleLike}
            sx={{ opacity: isLike ? 1 : 0.3 }}
          />
          <span className={classes.likesCount}>{likesCount}</span>
        </div>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Post;
