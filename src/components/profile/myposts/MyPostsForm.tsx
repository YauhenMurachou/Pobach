import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { newPostSchema } from 'src/utils/validationForms';

import classes from './Myposts.module.css';

type Props = {
  onSubmit: (values: { newPost: string }) => void;
};

const MyPostsForm: FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        newPost: '',
      }}
      validationSchema={newPostSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form>
          <>
            <Field
              component={TextField}
              fullWidth
              name="newPost"
              id="newPost"
              placeholder={t('profile.newPost')}
              autoFocus
              sx={{ bgcolor: 'var(--white-main)' }}
            />
            {errors.newPost && touched.newPost ? (
              <div>{errors.newPost}</div>
            ) : null}
          </>
          <div className={classes.buttons}>
            <Button
              type="submit"
              disabled={!dirty || !isValid}
              variant="contained"
            >
              {t('profile.addPost')}
            </Button>
            <Button type="submit" disabled variant="contained">
              {t('profile.removePost')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyPostsForm;
