export const teamBtn = [
  { id: 1, name: 'Team Blacer' },
  { id: 2, name: 'Team Scorpio' },
  { id: 3, name: 'Team Ez game' },
  { id: 4, name: 'Create Team' },
  { id: 5, name: 'Edit Team' },
];

export const teamBlacer = [
  { id: 1, name: 'About Team' },
  { id: 2, name: 'Manage Team' },
  { id: 3, name: 'Players' },
  { id: 4, name: 'Tournaments' },
  { id: 5, name: 'Statistics' },
];

export const teamManage = [
  { id: 1, name: 'Edit info' },
  { id: 2, name: 'Add Players' },
  { id: 3, name: 'Players' },
  { id: 4, name: 'Tournamnets' },
  { id: 5, name: 'Statistics' },
];

export function updateTitle(q, title) {
  switch (q) {
    case 'Team Blacer':
      title.value = 'Team Blacer';
      break;
    case 'Team Scorpio':
      title.value = 'Team Scorpio';
      break;
    case 'Team Ez game':
      title.value = 'Team Ez game';
      break;
    case 'Create Team':
      title.value = 'Create Team';
      break;
    case 'Manage Team':
      title.value = 'Team Blacer - Manage';
      break;
    case 'Players':
      title.value = 'Players';
      break;
    case 'Tournaments':
      title.value = 'Tournaments';
      break;
    case 'Edit info':
      title.value = 'Edit info';
      break;
    case 'Add Players':
      title.value = 'Add Players';
      break;
    case 'About Team':
      title.value = 'About Team';
      break;
    case 'Edit Team':
      title.value = 'Edit Team';
      break;
    default:
      title.value = 'My Team';
      break;
  }
}

export const createTeam = [
  { id: 1, label: 'Team Leader' },
  { id: 2, label: 'Join password' },
  { id: 3, label: 'Country' },
  { id: 3, label: 'Web-site' },
];
