import { FC } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
// import * as Yup from "yup"

// import { Button } from "@mui/material"
// import TextField from "@mui/material/TextField"

import classes from './ProfileInfo.module.css';
import { ProfileType } from '../../../../../types';

type Props = {
  info: string[];
  onSubmit: (
    values: ProfileType,
    formikHelpers: FormikHelpers<ProfileType>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => void | Promise<any>;
  profile: ProfileType;
};

const ProfileInfoEditForm: FC<Props> = ({ info, onSubmit, profile }) => {
  const objProp = profile;
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        // initialValues={{
        //   newMessage: ""
        // }}
        initialValues={profile}
      >
        {() => (
          /*{errors, touched}*/

          <Form>
            {info.map((item, index) => {
              if (item === 'photos') {
                return <span key={item + index.toString()}></span>;
              } else if (
                typeof objProp[item as keyof typeof objProp] === 'boolean'
              ) {
                return (
                  <div style={{ display: 'flex' }}>
                    <div> {item}</div>
                    <Field
                      label={item}
                      name={item}
                      id={(item + index).toString()}
                      type="checkbox"
                      key={(item + index).toString()}
                    />
                  </div>
                );
              } else if (
                typeof objProp[item as keyof typeof objProp] !== 'object'
              ) {
                return (
                  <div>
                    {item}
                    <Field
                      label={item}
                      name={item}
                      id={(item + index).toString()}
                      component="input"
                      key={(item + index).toString()}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    {item}:
                    {Object.keys(objProp['contacts']).map((elem, ind) => {
                      return (
                        <div key={ind}>
                          {elem}
                          <Field
                            name={`contacts.${elem}`}
                            id={(elem + index).toString()}
                            component="input"
                            key={(elem + index).toString()}
                          />
                          {/* {elem}: {objProp[item][elem] || "No data"} */}
                        </div>
                      );
                    })}
                  </div>
                );
              }
            })}
            <button className={classes.addButton} type="submit">
              Save changes
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfileInfoEditForm;

// <div style={{ display: "flex" }}>
// <input type="checkbox" key={index} />
// <div> I am looking for a job</div>
// </div>
