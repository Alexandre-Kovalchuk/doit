export let data;
export function updateTabs(q, nameTab, nameData, selectedTabs, defaultTab, secondData) {
  switch (q) {
    case nameTab + 'All':
    case nameTab + 'StarCraft':
    case nameTab + 'Dota':
    case nameTab + 'CS':
    case nameTab + 'LOL':
    case nameTab + 'Fortnite':
      selectedTabs.value = defaultTab;
      data = nameData[0][defaultTab];
      // console.log(12);
      break;
    default:
      data = secondData;
      // console.log(data);
      // console.log(23);
      break;
  }
}
