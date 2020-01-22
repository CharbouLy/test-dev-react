import * as Yup from 'yup';
import email from '../emailValidation';

const loginSchema = Yup.object().shape({
  email,
  password: Yup.string().required('Password is required'),
});

export default loginSchema;