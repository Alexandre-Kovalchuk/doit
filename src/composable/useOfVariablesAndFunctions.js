import { ref } from 'vue';

const searchName = ref('');

const sortVal = ref(1);
const isDisable = ref(true);

const editTable = () => {
  isDisable.value = !isDisable.value;
};

export { searchName, sortVal, isDisable, editTable };
