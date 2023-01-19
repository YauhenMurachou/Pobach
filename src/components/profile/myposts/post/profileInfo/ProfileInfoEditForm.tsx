import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-mui';
import { ProfileType } from 'src/types';

import classes from './ProfileInfo.module.css';

type Props = {
  info: string[];
  onSubmit: (
    values: ProfileType,
    formikHelpers: FormikHelpers<ProfileType>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => void | Promise<any>;
  profile: ProfileType;
  toggleEditMode: () => void;
};

const ProfileInfoEditForm: FC<Props> = ({
  info,
  onSubmit,
  profile,
  toggleEditMode,
}) => {
  const objProp = profile;
  const { t } = useTranslation();
  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={profile}>
        {({ dirty }) => (
          <Form>
            {info.map((item, index) => {
              if (item === 'photos' || item === 'userId') {
                return undefined;
              } else if (
                typeof objProp[item as keyof typeof objProp] === 'boolean'
              ) {
                return (
                  <div
                    style={{ display: 'flex' }}
                    key={(item + index).toString()}
                  >
                    <Field
                      Label={{ label: item }}
                      name={item}
                      id={(item + index).toString()}
                      type="checkbox"
                      component={CheckboxWithLabel}
                    />
                  </div>
                );
              } else if (
                typeof objProp[item as keyof typeof objProp] !== 'object'
              ) {
                return (
                  <div
                    className={classes.property}
                    key={(item + index).toString()}
                  >
                    <Field
                      name={item}
                      id={(item + index).toString()}
                      component={TextField}
                      variant="standard"
                      helperText={item}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={(item + index).toString()}>
                    <span className={classes.property}>{item}</span>:
                    {Object.keys(objProp['contacts']).map((elem, ind) => (
                      <div
                        key={(elem + ind).toString()}
                        className={classes.contact}
                      >
                        <Field
                          name={`contacts.${elem}`}
                          id={(elem + index).toString()}
                          component={TextField}
                          variant="standard"
                          helperText={elem}
                        />
                      </div>
                    ))}
                  </div>
                );
              }
            })}
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!dirty}
              >
                {t('profile.save')}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={toggleEditMode}
              >
                {t('profile.back')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfileInfoEditForm;
