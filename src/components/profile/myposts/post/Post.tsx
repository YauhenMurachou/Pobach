import { FC } from 'react';
import classes from './Post.module.css';

type Props = {
  message: string;
  likesCount: number;
};

const Post: FC<Props> = ({ message, likesCount }) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="avatar"
        />
        {message}
        <div>
          <span>like</span>
          <span>{likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
