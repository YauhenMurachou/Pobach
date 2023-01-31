import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchPhotos } from 'src/redux/photosReducer';
import { RootState } from 'src/redux/redux-store';

import styles from './Photos.module.css';

const Photos: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const photos = useSelector((state: RootState) => state.photos.photos);
  const dispatch = useDispatch();

  const clickForPhotos = () => {
    dispatch(fetchPhotos());
  };
  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  return (
    <div>
      <h2>Photos</h2>
      <div>This is test page for practice with redux-toolkit</div>
      <button type="button" onClick={clickForPhotos}>
        Get photos
      </button>
      <div className={styles.container}>
        {photos.map((photo) => (
          <div>
            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
