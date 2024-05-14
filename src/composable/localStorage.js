import { ref } from 'vue';

const day = ref('');
const month = ref('');
const year = ref('');

const updateDate = () => {
  userData.value.date = `${day.value}-${month.value}-${year.value}`;
};
const userData = ref({
  email: '',
  password: '',
  username: '',
  country: '',
  date: '',
});

const saveToLocalStorage = () => {
  let existingData = JSON.parse(localStorage.getItem('user'));

  if (!existingData) {
    existingData = [];
  }

  existingData.push(userData.value);

  localStorage.setItem('user', JSON.stringify(existingData));
};

export { userData, saveToLocalStorage, day, month, year, updateDate };
