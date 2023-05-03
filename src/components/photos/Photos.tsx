import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from '@mui/material';
import { fetchPhotos, photosRequestedAction } from 'src/redux/photosReducer';
import { RootState } from 'src/redux/redux-store';

import styles from './Photos.module.css';

const Photos: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const toolkitPhotos = useSelector(
    (state: RootState) => state.photos.toolkit.toolkitPhotos
  );
  const sagaPhotos = useSelector(
    (state: RootState) => state.photos.saga.sagaPhotos
  );

  const dispatch = useDispatch();

  const getToolkitPhotos = () => {
    dispatch(fetchPhotos());
  };

  const getSagaPhotos = () => {
    dispatch(photosRequestedAction());
  };

  if (!isAuth) {
    return <Redirect to="/Login" />;
  }
  return (
    <div>
      <h3>Photos</h3>
      <div className={styles.subtitle}>
        <Button type="button" onClick={getToolkitPhotos} variant="contained">
          Get photos with RTK
        </Button>
        <Button
          type="button"
          onClick={getSagaPhotos}
          variant="contained"
          color="secondary"
        >
          Get photos with Redux-saga
        </Button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {toolkitPhotos.map((photo) => (
            <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
          ))}
        </div>
        <div className={styles.container}>
          {sagaPhotos.map((photo) => (
            <img
              key={photo.id}
              src={photo.download_url}
              alt={photo.author}
              width="200"
              height="200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
