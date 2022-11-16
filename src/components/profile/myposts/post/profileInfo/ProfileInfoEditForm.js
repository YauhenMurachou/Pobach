import React from 'react';
import { Formik, Field, Form } from 'formik';
// import * as Yup from "yup"

// import { Button } from "@mui/material"
// import TextField from "@mui/material/TextField"

import classes from './ProfileInfo.module.css';

const ProfileInfoEditForm = ({ info, onSubmit, profile }) => {
  let objProp = profile;
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
                return <span key={index}></span>;
              } else if (typeof objProp[item] === 'boolean') {
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
              } else if (typeof objProp[item] !== 'object') {
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
                    {Object.keys(objProp[item]).map((elem, ind) => {
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
