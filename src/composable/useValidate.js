import * as Yup from 'yup';
import { userData } from '@/composable/localStorage.js';
import { ref } from 'vue';

const errorMessages = ref({
  email: '',
  password: '',
  text: '',
  number: '',
});

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,4}$/,
      'Please enter a valid email address'
    ),

  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must contain at least 8 characters, including one letter and one number'
    ),

  username: Yup.string()
    .required('Username is required')
    .matches(/^[^\d]+$/, 'Username cannot contain digits')
    .min(3, 'Username must be at least 3 characters long'),
});

const validateEmail = async () => {
  try {
    await schema.validateAt('email', userData.value);
    errorMessages.value.email = '';
  } catch (error) {
    errorMessages.value.email = error.message;
    console.error('Email validation error:', error.message);
  }
};

const validatePassword = async () => {
  try {
    await schema.validateAt('password', userData.value);
    errorMessages.value.password = '';
  } catch (error) {
    errorMessages.value.password = error.message;
    console.error('Password validation error:', error.message);
  }
};

const validateUsername = async () => {
  try {
    await schema.validateAt('username', userData.value);
    errorMessages.value.text = '';
  } catch (error) {
    errorMessages.value.text = error.message;
  }
};

export { validateEmail, validatePassword, validateUsername, errorMessages };
