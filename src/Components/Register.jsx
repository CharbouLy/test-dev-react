import React from 'react';
import RegisterForm from '../Form/Register/RegisterForm';
import { tabConfig } from '../Utils/TabConfig';

export const registerTabConfig = tabConfig('register', 'Je n\'ai pas de compte');

const Register = () => {
  return (
    <RegisterForm />
  );
};

export default Register;