import { ref } from 'vue';

const nameBtn = [
  { name: 'EditMode', label: 'Edit mode' },
  { name: 'AddTournament', label: '+ Add tournament' },
];

const nameTh = ['Tournament`s name', 'Entry price', 'Pool price', 'Signed', 'Start in'];

const nameTd = ref([
  {
    name: 'The best of the best tournament',
    entry: '$ 1500',
    pool: '$ 20000',
    signed: '1/4',
    start: '10 minutes',
  },
  {
    name: 'The best tournament ',
    entry: '$ 480',
    pool: '$ 10000',
    signed: '31/32',
    start: '43 minutes',
  },
  {
    name: 'The best of the best tournament ',
    entry: '$ 930',
    pool: '$ 5000',
    signed: '8/12',
    start: '2 hours',
  },
  {
    name: 'The best of the best tournament ',
    entry: '$ 1500',
    pool: '$ 20000',
    signed: '1/4',
    start: '10 minutes',
  },
  {
    name: 'The best tournament ',
    entry: '$ 2410',
    pool: '$ 2000',
    signed: '13/32',
    start: '2 month',
  },
  {
    name: 'The best tournament ',
    entry: '$ 480',
    pool: '$ 10000',
    signed: '31/32',
    start: '43 minutes',
  },
  {
    name: 'The best tournament ',
    entry: '$ 30',
    pool: '$ 200',
    signed: '1/16',
    start: '1 year',
  },
  {
    name: 'The tournament ',
    entry: '$ 930',
    pool: '$ 5000',
    signed: '8/12',
    start: '2 hours',
  },
  {
    name: 'The best of the best tournament',
    entry: '$ 2410',
    pool: '$ 2000',
    signed: '13/32',
    start: '2 month',
  },
  {
    name: 'The tournament ',
    entry: '$ 30',
    pool: '$ 200',
    signed: '1/16',
    start: '1 year',
  },
]);

export { nameBtn, nameTd, nameTh };
