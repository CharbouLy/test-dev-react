import * as Yup from 'yup';

const email = Yup.string().email('You have to provide a valid email.').required('The email is required');

export default email;