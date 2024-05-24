import { ref } from 'vue';

export function adminLeaguesData() {
  const nameBtn = [
    { name: 'EditMode', label: 'Edit mode' },
    { name: 'AddTournament', label: '+ Add tournament' },
  ];

  const nameTh = ['Leagues`s name', 'Entry price', 'Pool price', 'Signed', 'Start in'];

  const nameTd = ref([
    {
      name: 'The best of the best tournament',
      entry: 'FREE',
      pool: '$ 20000',
      signed: '1/4',
      start: '10 minutes',
    },

    {
      name: 'The best tournament ',
      entry: 'FREE',
      pool: '$ 10000',
      signed: '31/32',
      start: '43 minutes',
    },

    {
      name: 'The best of the best tournament ',
      entry: 'FREE',
      pool: '$ 5000',
      signed: '8/12',
      start: '2 hours',
    },

    {
      name: 'The best of the best tournament ',
      entry: 'FREE',
      pool: '$ 20000',
      signed: '1/4',
      start: '10 minutes',
    },

    {
      name: 'The best tournament ',
      entry: '$ 5',
      pool: '$ 2000',
      signed: '13/32',
      start: '2 month',
    },

    {
      name: 'The best tournament ',
      entry: '$ 10',
      pool: '$ 10000',
      signed: '31/32',
      start: '43 minutes',
    },

    {
      name: 'The best tournament ',
      entry: 'FREE',
      pool: '$ 200',
      signed: '1/16',
      start: '1 year',
    },

    {
      name: 'The tournament ',
      entry: 'Premium',
      pool: '$ 5000',
      signed: '8/12',
      start: '2 hours',
    },

    {
      name: 'The best of the best tournament',
      entry: 'Premium',
      pool: '$ 2000',
      signed: '13/32',
      start: '2 month',
    },

    {
      name: 'The tournament ',
      entry: 'FREE',
      pool: '$ 200',
      signed: '1/16',
      start: '1 year',
    },
  ]);

  return { nameBtn, nameTd, nameTh };
}
