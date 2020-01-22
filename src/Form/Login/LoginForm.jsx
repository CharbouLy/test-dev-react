import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../TextInput';
import loginSchema from './loginValidationSchema';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <TextInput
            label="Email"
            name="email"
            type="email"
          />
          <TextInput
            label="Mot de passe"
            name="password"
            type="password"
          />
          <button type="submit">Me connecter</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;