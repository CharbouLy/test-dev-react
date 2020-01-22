import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from '../TextInput';
import registerSchema from './registerValidationSchema';

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
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
          <TextInput
            label="confirmer le mot de passe"
            name="passwordConfirmation"
            type="password"
          />
          <button type="submit">M'enregistrer</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;