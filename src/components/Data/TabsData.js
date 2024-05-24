export function tabsData() {
  const labelsTabs = [
    { name: 'All', label: 'All' },
    { name: 'StarCraft', label: 'StarCraft II' },
    { name: 'Dota', label: 'Dota II' },
    { name: 'CS', label: 'CS:GO' },
    { name: 'LOL', label: 'LOL' },
    { name: 'Fortnite', label: 'Fortnite' },
  ];

  const infoTabs = [
    {
      name: 'Info',
      label: 'Info',
    },

    {
      name: 'Bracket',
      label: 'Bracket',
    },

    {
      name: 'Players',
      label: 'Players',
    },
    // {
    //   name: 'Rules',
    //   label: 'Rules',
    // },
    // {
    //   name: 'Support',
    //   label: 'Support',
    // },
    {
      name: 'Lobby',
      label: 'Lobby',
    },
    {
      name: 'Standings',
      label: 'Standings',
    },
  ];

  const poolTabs = [
    {
      name: 'Prize pool',
      label: 'Prize pool',
    },
  ];

  const quickTabs = [
    {
      name: 'Quick rules',
      label: 'Quick rules',
    },
  ];

  const streamsTabs = [
    {
      name: 'Streams',
      label: 'Streams',
    },
    {
      name: 'Add stream',
      label: 'Add stream',
    },
  ];

  const topTabs = [
    {
      desktop: [
        { name: 'Top Countries', label: 'Top Countries' },
        { name: 'Top Players', label: 'Top Players' },
        { name: 'Top Teams', label: 'Top Teams' },
        { name: 'Top Games', label: 'Top Games' },
      ],

      mobile: [
        { name: 'Countries', label: 'Countries' },
        { name: 'Players', label: 'Players' },
        { name: 'Teams', label: 'Teams' },
        { name: 'Games', label: 'Games' },
      ],
    },
  ];

  const adminTabs = [
    { name: 'Tournaments', label: 'Tournaments' },
    { name: 'Teams', label: 'Teams' },
    { name: 'Players', label: 'Players' },
    { name: 'Leagues', label: 'Leagues' },
    { name: 'Calendar', label: 'Calendar' },
    { name: 'News', label: 'News' },
    { name: 'Games', label: 'Games' },
    { name: 'Payments', label: 'Payments' },
  ];

  return { labelsTabs, infoTabs, poolTabs, quickTabs, streamsTabs, topTabs, adminTabs };
}
