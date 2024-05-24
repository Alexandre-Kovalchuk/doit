import { ref } from 'vue';

export function adminGamesData() {
  const nameBtn = ['Add Game'];

  const nameTh = ['Title', 'Active'];

  const nameTd = ref([
    {
      name: 'StarCraft II',
      act: 'Yes',
    },

    {
      name: 'Dota II',
      act: 'Yes',
    },

    {
      name: 'CS:GO',
      act: 'Yes',
    },

    {
      name: 'League of Legends',
      act: 'No',
    },

    {
      name: 'Fortnite',
      act: 'No',
    },

    {
      name: 'FIFA 2020',
      act: 'No',
    },

    {
      name: 'Metro',
      act: 'No',
    },

    {
      name: 'Valorant',
      act: 'No',
    },

    {
      name: 'Stalker 2',
      act: 'No',
    },

    {
      name: 'Call of Duty',
      act: 'No',
    },
  ]);

  return { nameTd, nameBtn, nameTh };
}
