import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(5, 'Should be at least 5 characters').required('Password is required')
});

export default validationSchema ;