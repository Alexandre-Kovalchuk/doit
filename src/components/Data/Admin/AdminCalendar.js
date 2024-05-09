import { ref } from 'vue';

const nameBtn = ['Edit more', 'Add calendar'];

const nameTh = ['Event`s name', 'Start Date', 'End Date', 'Website'];

const nameTd = ref([
  {
    name: 'The best of the best tournament',
    entry: '$ 1500',
    pool: '$ 20000',
    website: 'doit.gg/Starcraft2/cup1',
    start: '10 minutes',
  },
  {
    name: 'The best tournament ',
    entry: '$ 480',
    pool: '$ 10000',
    website: 'doit.gg/Starcraft2/cup1',
    start: '43 minutes',
  },
  {
    name: 'The best of the best tournament ',
    entry: '$ 930',
    pool: '$ 5000',
    website: 'doit.gg/Starcraft2/cup1',
    start: '2 hours',
  },
  {
    name: 'The best of the best tournament ',
    entry: '$ 1500',
    pool: '$ 20000',
    website: 'doit.gg/Starcraft2/cup1',
    start: '10 minutes',
  },
  {
    name: 'The best tournament ',
    entry: '$ 2410',
    pool: '$ 2000',
    website: '',
    start: '2 month',
  },
  {
    name: 'The best tournament ',
    entry: '$ 480',
    pool: '$ 10000',
    website: '',
    start: '43 minutes',
  },
  {
    name: 'The best tournament ',
    entry: '$ 30',
    pool: '$ 200',
    website: '',
    start: '1 year',
  },
  {
    name: 'The tournament ',
    entry: '$ 930',
    pool: '$ 5000',
    website: '',
    start: '2 hours',
  },
  {
    name: 'The best of the best tournament',
    entry: '$ 2410',
    pool: '$ 2000',
    website: '',
    start: '2 month',
  },
  {
    name: 'The tournament ',
    entry: '$ 30',
    pool: '$ 200',
    website: '',
    start: '1 year',
  },
]);

export { nameBtn, nameTh, nameTd };
