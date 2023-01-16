import { FC } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import classes from './Myposts.module.css';

const newPostSchema = Yup.object().shape({
  newPost: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long Post, maximum length 30 symbols!'),
});

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
          <div>
            <Field
              component="textarea"
              name="newPost"
              id="newPost"
              placeholder={t('profile.newPost')}
            />
            {errors.newPost && touched.newPost ? (
              <div>{errors.newPost}</div>
            ) : null}
          </div>
          <div>
            <button
              className={classes.addButton}
              type="submit"
              disabled={!dirty || !isValid}
            >
              {t('profile.addPost')}
            </button>
            <button>{t('profile.removePost')}</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyPostsForm;
