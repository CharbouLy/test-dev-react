import * as Yup from 'yup';
import email from '../emailValidation';

const registerSchema = Yup.object().shape({
  email,
  password: Yup.string().min(5).max(16).required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default registerSchema;