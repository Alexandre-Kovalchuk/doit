import * as Yup from 'yup';
import { ref } from 'vue';

// Визначення окремих схем валідації для кожного поля
const emailSchema = Yup.string()
  .email('Invalid email')
  .required('Email is required')
  .matches(
    /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,4}$/,
    'Please enter a valid email address'
  );

const passwordSchema = Yup.string()
  .required('Password is required')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    'Password must contain at least 8 characters, including one letter and one number'
  );

const usernameSchema = Yup.string()
  .required('Username is required')
  .min(3, 'Username must be at least 3 characters long');

const daySchema = Yup.string()
  .required('Date is required')
  .max(2, 'Day must be at most 2 characters long');

const userData = ref({
  email: '',
  password: '',
  username: '',
  day: '',
});

const errorMessages = ref({
  email: '',
  password: '',
  username: '',
  day: '',
});

// Функції валідації для кожного поля
const validateEmail = async () => {
  try {
    await emailSchema.validate(userData.value.email);
    errorMessages.value.email = '';
  } catch (error) {
    errorMessages.value.email = error.message;
    console.error('Email validation error:', error.message);
  }
};

const validatePassword = async () => {
  try {
    await passwordSchema.validate(userData.value.password);
    errorMessages.value.password = '';
  } catch (error) {
    errorMessages.value.password = error.message;
    console.error('Password validation error:', error.message);
  }
};

const validateUsername = async () => {
  try {
    await usernameSchema.validate(userData.value.username);
    errorMessages.value.username = '';
  } catch (error) {
    errorMessages.value.username = error.message;
  }
};

export { validateEmail, validatePassword, validateUsername, errorMessages, userData };
