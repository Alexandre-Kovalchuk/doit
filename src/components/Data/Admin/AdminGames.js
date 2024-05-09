import { ref } from 'vue';

const nameBtn = ['Add Game'];

const nameTh = ['Title', 'Active'];

const nameTd = ref([
  {
    name: 'StarCraft II',
    active: 'Yes',
  },

  {
    name: 'Dota II',
    active: 'Yes',
  },

  {
    name: 'CS:GO',
    active: 'Yes',
  },

  {
    name: 'League of Legends',
    active: 'No',
  },

  {
    name: 'Fortnite',
    active: 'No',
  },

  {
    name: 'FIFA 2020',
    active: 'No',
  },

  {
    name: 'Metro',
    active: 'No',
  },

  {
    name: 'Valorant',
    active: 'No',
  },

  {
    name: 'Stalker 2',
    active: 'No',
  },

  {
    name: 'Call of Duty',
    active: 'No',
  },
]);

export { nameTd, nameBtn, nameTh };
