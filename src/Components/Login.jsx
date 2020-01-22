import React from 'react';
import LoginForm from '../Form/Login/LoginForm';
import { tabConfig } from '../Utils/TabConfig';

export const loginTabConfig = tabConfig('login', 'J\'ai un compte');

const Login = () => {
  return (
    <LoginForm />
  );
};

export default Login;