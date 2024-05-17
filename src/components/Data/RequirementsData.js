export function requirementsData() {
  const requirements = [
    {
      id: 1,
      title: 'Minimum age',
      txt: 'At least 18 years old',
    },
    {
      id: 2,
      title: 'Residence',
      txt: 'More info',
    },
    {
      id: 3,
      title: 'PSN account',
      txt: 'Register your name ID',
    },
    {
      id: 4,
      title: 'Play',
      txt: 'Please log in to take part\n' + 'in this tournament.',
    },
  ];

  const svg = [
    { id: 1, name: 'info-facebook' },
    { id: 2, name: 'info-twitter' },
    { id: 3, name: 'info-instagram' },
    { id: 4, name: 'info-pinterest' },
    { id: 5, name: 'info-git' },
  ];

  return { requirements, svg };
}
