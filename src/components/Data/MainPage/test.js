export function tournamentsData() {
  const Dota = [
    {
      id: 1,
      title: 'Dota II',
      status: 'Ongoing',
      day: 'Monday',
      mode: '1v1',
      start: '22/04',
      platform: 'PC',
      region: 'US East',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '22/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],

      webp: new URL('../../../assets/img/dota/Dota1.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota1.png', import.meta.url),

      labelThird: [
        {
          id: 1,
          name: 'Start time',
          txt: 'Today, 05 oct 2019 at 19:45 CEST',
        },
        {
          id: 2,
          name: 'Game',
          game: 'Dota II',
          platform: 'PC',
        },
        {
          id: 3,
          name: 'Prize pool',
          txt: '100 USD',
        },
        {
          id: 4,
          name: 'Check in time',
          txt: 'Today, 05 oct 2019 at 17:30 CEST',
        },
        {
          id: 5,
          name: 'Mode',
          txt: '1 on 1 - single elimination\n' + 'BO1 | Final BO3',
        },

        {
          id: 6,
          name: 'VETO',
          txt: 'ABABA\n' + 'Start player with higher seed',
        },

        {
          id: 7,
          name: 'Additional requirements',
          txt: 'At least 18 years old\n' + 'Linked PSN Account\n' + 'PS4',
        },

        {
          id: 8,
          name: 'Lobby',
          txt: 'Game chat: OCR3',
        },

        {
          id: 9,
          txt: 'MORE RULES',
        },
      ],
    },

    {
      id: 2,
      title: 'Dota II',
      status: 'Ongoing',
      day: 'Tuesday',
      mode: '2v2',
      start: '23/04',
      platform: 'Xbox one',
      region: 'Europe',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '23/04' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$20' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },

    {
      id: 3,
      title: 'Dota II',
      status: 'Ongoing',
      day: 'Wednesday',
      mode: '5v5',
      start: '24/04',
      platform: 'PS4',
      region: 'Singapore',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'ps4' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/dota/Dota3.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota3.png', import.meta.url),
    },

    {
      id: 4,
      title: 'Dota II',
      status: 'Upcoming',
      day: 'Thursday',
      start: '24/05',
      mode: '1v1',
      platform: 'Nintendo switch',
      region: 'Singapore',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'nintendo switch' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/dota/Dota4.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota4.png', import.meta.url),
    },

    {
      id: 5,
      title: 'Dota II',
      status: 'Upcoming',
      day: 'Friday',
      mode: '2v2',
      start: '25/05',
      platform: 'PS5',
      region: 'Australia',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '25/05' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Australia' },
      ],

      webp: new URL('../../../assets/img/dota/Dota5.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota5.png', import.meta.url),
    },

    {
      id: 6,
      title: 'Dota II',
      status: 'Upcoming',
      day: 'Saturday',
      mode: '5v5',
      start: '26/05',
      platform: 'Xbox Series X',
      region: 'Brazil',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '26/05' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox Series X' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Brazil' },
      ],
      webp: new URL('../../../assets/img/dota/Dota6.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota6.png', import.meta.url),
    },

    {
      id: 7,
      title: 'Dota II',
      status: 'Finished',
      day: 'Sunday',
      mode: '2v2',
      start: '26/03',
      platform: 'PS5',
      region: 'Peru',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Peru' },
      ],

      webp: new URL('../../../assets/img/dota/Dota7.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota7.png', import.meta.url),
    },

    {
      id: 8,
      title: 'Dota II',
      status: 'Finished',
      day: 'Sunday',
      mode: '1v1',
      start: '22/03',
      platform: 'Xbox one',
      region: 'US East',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/dota/Dota1.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota1.png', import.meta.url),
    },

    {
      id: 9,
      title: 'Dota II',
      status: 'Finished',
      day: 'Monday',
      mode: '5v5',
      start: '21/03',
      platform: 'PC',
      region: 'Europe',
      name: 'Dota',

      labelFirst: [
        { name: 'Start', txt: '21/03' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },
  ];

  const StarCraft = [
    {
      id: 1,
      title: 'StarCraft II',
      status: 'Ongoing',
      day: 'Monday',
      mode: '1v1',
      start: '22/04',
      platform: 'PC',
      region: 'US East',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '22/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 2,
      title: 'StarCraft II',
      status: 'Ongoing',
      day: 'Tuesday',
      mode: '2v2',
      start: '23/04',
      platform: 'Xbox one',
      region: 'Europe',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '23/04' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$20' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },

    {
      id: 3,
      title: 'StarCraft II',
      status: 'Ongoing',
      day: 'Wednesday',
      mode: '5v5',
      start: '24/04',
      platform: 'PS4',
      region: 'Singapore',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'ps4' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 4,
      title: 'StarCraft II',
      status: 'Upcoming',
      day: 'Thursday',
      start: '24/05',
      mode: '1v1',
      platform: 'Nintendo switch',
      region: 'Singapore',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'nintendo switch' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/dota/Dota4.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota4.png', import.meta.url),
    },

    {
      id: 5,
      title: 'StarCraft II',
      status: 'Upcoming',
      day: 'Friday',
      mode: '2v2',
      start: '25/05',
      platform: 'PS5',
      region: 'Australia',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '25/05' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Australia' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft3.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft3.png', import.meta.url),
    },

    {
      id: 6,
      title: 'StarCraft II',
      status: 'Upcoming',
      day: 'Saturday',
      mode: '5v5',
      start: '26/05',
      platform: 'Xbox Series X',
      region: 'Brazil',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '26/05' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox Series X' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Brazil' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 7,
      title: 'StarCraft II',
      status: 'Finished',
      day: 'Sunday',
      mode: '2v2',
      start: '26/03',
      platform: 'PS5',
      region: 'Peru',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Peru' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 8,
      title: 'StarCraft II',
      status: 'Finished',
      day: 'Sunday',
      mode: '1v1',
      start: '22/03',
      platform: 'Xbox one',
      region: 'US East',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 9,
      title: 'StarCraft II',
      status: 'Finished',
      day: 'Monday',
      mode: '5v5',
      start: '21/03',
      platform: 'PC',
      region: 'Europe',
      name: 'StarCraft',

      labelFirst: [
        { name: 'Start', txt: '21/03' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },
  ];

  const CS = [
    {
      id: 1,
      title: 'CS:GO',
      status: 'Ongoing',
      day: 'Monday',
      mode: '1v1',
      start: '22/04',
      platform: 'PC',
      region: 'US East',
      name: 'cs',

      labelFirst: [
        { name: 'Start', txt: '22/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 2,
      title: 'CS:GO',
      status: 'Ongoing',
      day: 'Tuesday',
      mode: '2v2',
      start: '23/04',
      platform: 'Xbox one',
      region: 'Europe',

      labelFirst: [
        { name: 'Start', txt: '23/04' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$20' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },

    {
      id: 3,
      title: 'CS:GO',
      status: 'Ongoing',
      day: 'Wednesday',
      mode: '5v5',
      start: '24/04',
      platform: 'PS4',
      region: 'Singapore',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'ps4' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 4,
      title: 'CS:GO',
      status: 'Upcoming',
      day: 'Thursday',
      start: '24/05',
      mode: '1v1',
      platform: 'Nintendo switch',
      region: 'Singapore',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'nintendo switch' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/dota/Dota4.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota4.png', import.meta.url),
    },

    {
      id: 5,
      title: 'CS:GO',
      status: 'Upcoming',
      day: 'Friday',
      mode: '2v2',
      start: '25/05',
      platform: 'PS5',
      region: 'Australia',

      labelFirst: [
        { name: 'Start', txt: '25/05' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Australia' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft3.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft3.png', import.meta.url),
    },

    {
      id: 6,
      title: 'CS:GO',
      status: 'Upcoming',
      day: 'Saturday',
      mode: '5v5',
      start: '26/05',
      platform: 'Xbox Series X',
      region: 'Brazil',

      labelFirst: [
        { name: 'Start', txt: '26/05' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox Series X' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Brazil' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 7,
      title: 'CS:GO',
      status: 'Finished',
      day: 'Sunday',
      mode: '2v2',
      start: '26/03',
      platform: 'PS5',
      region: 'Peru',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Peru' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 8,
      title: 'CS:GO',
      status: 'Finished',
      day: 'Sunday',
      mode: '1v1',
      start: '22/03',
      platform: 'Xbox one',
      region: 'US East',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 9,
      title: 'CS:GO',
      status: 'Finished',
      day: 'Monday',
      mode: '5v5',
      start: '21/03',
      platform: 'PC',
      region: 'Europe',

      labelFirst: [
        { name: 'Start', txt: '21/03' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },
  ];

  const LOL = [
    {
      id: 1,
      title: 'League of Legends',
      status: 'Ongoing',
      day: 'Monday',
      mode: '1v1',
      start: '22/04',
      platform: 'PC',
      region: 'US East',
      name: 'lol',

      labelFirst: [
        { name: 'Start', txt: '22/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 2,
      title: 'League of Legends',
      status: 'Ongoing',
      day: 'Tuesday',
      mode: '2v2',
      start: '23/04',
      platform: 'Xbox one',
      region: 'Europe',

      labelFirst: [
        { name: 'Start', txt: '23/04' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$20' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },

    {
      id: 3,
      title: 'League of Legends',
      status: 'Ongoing',
      day: 'Wednesday',
      mode: '5v5',
      start: '24/04',
      platform: 'PS4',
      region: 'Singapore',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'ps4' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 4,
      title: 'League of Legends',
      status: 'Upcoming',
      day: 'Thursday',
      start: '24/05',
      mode: '1v1',
      platform: 'Nintendo switch',
      region: 'Singapore',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'nintendo switch' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/dota/Dota4.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota4.png', import.meta.url),
    },

    {
      id: 5,
      title: 'League of Legends',
      status: 'Upcoming',
      day: 'Friday',
      mode: '2v2',
      start: '25/05',
      platform: 'PS5',
      region: 'Australia',

      labelFirst: [
        { name: 'Start', txt: '25/05' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Australia' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft3.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft3.png', import.meta.url),
    },

    {
      id: 6,
      title: 'League of Legends',
      status: 'Upcoming',
      day: 'Saturday',
      mode: '5v5',
      start: '26/05',
      platform: 'Xbox Series X',
      region: 'Brazil',

      labelFirst: [
        { name: 'Start', txt: '26/05' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox Series X' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Brazil' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 7,
      title: 'League of Legends',
      status: 'Finished',
      day: 'Sunday',
      mode: '2v2',
      start: '26/03',
      platform: 'PS5',
      region: 'Peru',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Peru' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 8,
      title: 'League of Legends',
      status: 'Finished',
      day: 'Sunday',
      mode: '1v1',
      start: '22/03',
      platform: 'Xbox one',
      region: 'US East',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 9,
      title: 'League of Legends',
      status: 'Finished',
      day: 'Monday',
      mode: '5v5',
      start: '21/03',
      platform: 'PC',
      region: 'Europe',

      labelFirst: [
        { name: 'Start', txt: '21/03' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },
  ];

  const Fortnite = [
    {
      id: 1,
      title: 'Fortnite',
      status: 'Ongoing',
      day: 'Monday',
      mode: '1v1',
      start: '22/04',
      platform: 'PC',
      region: 'US East',
      name: 'fortnite',

      labelFirst: [
        { name: 'Start', txt: '22/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 2,
      title: 'Fortnite',
      status: 'Ongoing',
      day: 'Tuesday',
      mode: '2v2',
      start: '23/04',
      platform: 'Xbox one',
      region: 'Europe',

      labelFirst: [
        { name: 'Start', txt: '23/04' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$20' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },

    {
      id: 3,
      title: 'Fortnite',
      status: 'Ongoing',
      day: 'Wednesday',
      mode: '5v5',
      start: '24/04',
      platform: 'PS4',
      region: 'Singapore',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'ps4' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 4,
      title: 'Fortnite',
      status: 'Upcoming',
      day: 'Thursday',
      start: '24/05',
      mode: '1v1',
      platform: 'Nintendo switch',
      region: 'Singapore',

      labelFirst: [
        { name: 'Start', txt: '24/04' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$30' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'nintendo switch' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Singapore' },
      ],
      webp: new URL('../../../assets/img/dota/Dota4.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota4.png', import.meta.url),
    },

    {
      id: 5,
      title: 'Fortnite',
      status: 'Upcoming',
      day: 'Friday',
      mode: '2v2',
      start: '25/05',
      platform: 'PS5',
      region: 'Australia',

      labelFirst: [
        { name: 'Start', txt: '25/05' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Australia' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft3.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft3.png', import.meta.url),
    },

    {
      id: 6,
      title: 'Fortnite',
      status: 'Upcoming',
      day: 'Saturday',
      mode: '5v5',
      start: '26/05',
      platform: 'Xbox Series X',
      region: 'Brazil',

      labelFirst: [
        { name: 'Start', txt: '26/05' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox Series X' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Brazil' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },

    {
      id: 7,
      title: 'Fortnite',
      status: 'Finished',
      day: 'Sunday',
      mode: '2v2',
      start: '26/03',
      platform: 'PS5',
      region: 'Peru',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '2v2' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PS5' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Peru' },
      ],

      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 8,
      title: 'Fortnite',
      status: 'Finished',
      day: 'Sunday',
      mode: '1v1',
      start: '22/03',
      platform: 'Xbox one',
      region: 'US East',

      labelFirst: [
        { name: 'Start', txt: '26/03' },
        { name: 'Mode', txt: '1v1' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'Xbox one' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'US East' },
      ],
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      png: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },

    {
      id: 9,
      title: 'Fortnite',
      status: 'Finished',
      day: 'Monday',
      mode: '5v5',
      start: '21/03',
      platform: 'PC',
      region: 'Europe',

      labelFirst: [
        { name: 'Start', txt: '21/03' },
        { name: 'Mode', txt: '5v5' },
        { name: 'Slots', txt: '2/8' },
        { name: 'Pool', txt: '$ 1500' },
      ],

      labelSecond: [
        { name: 'Prize', txt: '$10' },
        { name: 'Entry fee', txt: 'Free to enter' },
        { name: 'platform', txt: 'PC' },
        { name: 'Slots', txt: '2 / 8' },
        { name: 'Mode', txt: 'Capitains mode' },
        { name: 'Server', txt: 'Europe' },
      ],
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      png: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },
  ];

  return { Dota, StarCraft, CS, LOL, Fortnite };
}
