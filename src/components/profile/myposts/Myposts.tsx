import { Dispatch, FC } from 'react';

import Post from './post/Post.js';
import MyPostsForm from './MyPostsForm';

import classes from './Myposts.module.css';
import { InitialStateProfileType } from '../../../redux/profilePageReducer.js';
import { ProfileActionsTypes } from './../../../redux/profilePageReducer';

type Props = {
  postsData: InitialStateProfileType['postsData'];
  addPostButton: (
    newPost: string
  ) => (dispatch: Dispatch<ProfileActionsTypes>) => void;
};

const Myposts: FC<Props> = ({ postsData, addPostButton }) => {
  const addPostButtonFunction = (values: { newPost: string }) => {
    addPostButton(values.newPost);
  };

  const posts = postsData.map((post) => (
    <Post
      message={post.message}
      likesCount={post.likesCount}
      id={post.id}
      key={post.id}
    />
  ));

  return (
    <div>
      <h3 className={classes.item}>My posts</h3>

      <MyPostsForm onSubmit={addPostButtonFunction} />

      <div className={classes.item}>{posts}</div>
    </div>
  );
};

export default Myposts;
