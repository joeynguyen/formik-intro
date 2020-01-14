import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import BasicFormikField from './BasicFormikField';
const phoneFormatRegex = /^\d{3}-\d{3}-\d{4}$/;
const REQUIRED = 'Required';


const ExampleSchema = Yup.object().shape({
  test: Yup.string().required(REQUIRED),
  firstname: Yup.string().required(REQUIRED),
});


const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ test: '', firstname: '', email: '' }}
      validationSchema={ExampleSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        /* and other goodies */
      }) => {
        console.log('isValid', isValid);

        return (
            <form onSubmit={handleSubmit}>
              <BasicFormikField fieldKey="firstname" label="First Name" type="text" />
              <BasicFormikField fieldKey="lastname" label="First Name" type="text" />
              <Field type="email" name="email" placeholder="Email" />
              <Field
                name="test"
                render={({ field, form: { touched, errors } /* _form */ }) => (
                  <div className={`form-group ${touched.test && errors.test && "has-error"}`}>
                    <label className="control-label" htmlFor="inputError1">Input with error</label>
                    <input {...field} type="text" className="form-control" id="inputError1" />
                  </div>
                )}
              />

              <Field
                name="test"
                render={({ field, form: { touched, errors } /* _form */ }) => (
                  <div className={`form-group ${touched.test && errors.test && "has-error"}`}>
                    <label className="control-label" htmlFor="inputError1">Input with error</label>
                    <input {...field} type="text" className="form-control" id="inputError1" />
                  </div>
                )}
              />
 
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        )
        }}
    </Formik>
  </div>
);

export default Basic;

