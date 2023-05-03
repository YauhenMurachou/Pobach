import { Dispatch, FC } from 'react';
import { useTranslation } from 'react-i18next';
import Post from 'src/components/common/molecules/post/Post';
import MyPostsForm from 'src/components/profile/myposts/MyPostsForm';
import {
  InitialStateProfileType,
  ProfileActionsTypes,
} from 'src/redux/profilePageReducer';

import classes from './Myposts.module.css';

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

  const { t } = useTranslation();

  const posts = postsData.map(({ message, likesCount, id, isLike }) => (
    <Post
      message={message}
      likesCount={likesCount}
      key={id}
      id={id}
      isLike={isLike}
    />
  ));

  return (
    <div>
      <h3 className={classes.item}>{t('profile.posts')}</h3>
      <MyPostsForm onSubmit={addPostButtonFunction} />
      <div className={classes.item}>{posts}</div>
    </div>
  );
};

export default Myposts;
