export const tournamentsData = [
  {
    tournamentsDota: [
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
    ],

    tournamentsStarCraft: [
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
    ],

    tournamentsCS: [
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
    ],

    tournamentsLOL: [
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
    ],

    tournamentsFortnite: [
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
    ],

    filter: {
      mode: [
        { id: 1, title: 'Game mode', name: '1v1' },
        { id: 2, name: '2v2' },
        { id: 3, name: '5v5' },
      ],

      status: [
        { id: 4, title: 'Status', name: 'Upcoming' },
        { id: 5, name: 'Past' },
      ],

      platform: [
        { id: 6, title: 'Platform', name: 'PC' },

        { id: 7, name: 'Xbox one' },

        { id: 8, name: 'PS4' },

        { id: 9, name: 'Nintendo switch' },

        { id: 10, name: 'PS5' },

        { id: 11, name: 'Xbox Series X' },
      ],

      region: [
        { id: 12, title: 'Server region', name: 'Europe' },

        { id: 13, name: 'Singapore' },

        { id: 14, name: 'Australia' },

        { id: 15, name: 'Brazil' },

        { id: 16, name: 'Peru' },

        { id: 17, name: 'US East' },
      ],
    },

    Requirements: [
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
    ],

    svg: [
      { id: 1, name: 'info-facebook' },
      { id: 2, name: 'info-twitter' },
      { id: 3, name: 'info-instagram' },
      { id: 4, name: 'info-pinterest' },
      { id: 5, name: 'info-git' },
    ],
  },
];

localStorage.setItem('tournamentsData', JSON.stringify(tournamentsData));
export const nameGame = [
  {
    Dota: {
      title: 'Dota II',
      webp: new URL('../../../assets/img/dota_logo.webp', import.meta.url),
      png: new URL('../../../assets/img/dota_logo.png', import.meta.url),
    },

    CS: {
      title: 'CS:GO',
      webp: new URL('../../../assets/img/cs_logo.webp', import.meta.url),
      png: new URL('../../../assets/img/cs_logo.png', import.meta.url),
    },

    StarCraft: {
      title: 'StarCraft II',
      webp: new URL('../../../assets/img/star_logo.webp', import.meta.url),
      png: new URL('../../../assets/img/star_logo.png', import.meta.url),
    },

    LOL: {
      title: 'League of Legends',
      webp: new URL('../../../assets/img/lol_logo.webp', import.meta.url),
      png: new URL('../../../assets/img/lol_logo.png', import.meta.url),
    },

    Fortnite: {
      title: 'Fortnite',
      webp: new URL('../../../assets/img/Fortnite_logo.webp', import.meta.url),
      png: new URL('../../../assets/img/Fortnite_logo.png', import.meta.url),
    },
  },
];

export const players = [
  {
    id: 1,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
  {
    id: 2,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
  {
    id: 3,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
  {
    id: 4,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
  {
    id: 5,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
  {
    id: 6,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
  {
    id: 7,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
  {
    id: 8,
    name: 'Fresh young gun',
    team: 'unknown',
    wins: 22,
    loses: 22,
    draws: 22,
    points: 222,
    webp: new URL('../../../assets/img/avatar.webp', import.meta.url),
    png: new URL('../../../assets/img/avatar.png', import.meta.url),
    flagWebp: new URL('../../../assets/img/flag.webp', import.meta.url),
    flagPng: new URL('../../../assets/img/flag.png', import.meta.url),
  },
];

export const infoTab = [
  {
    firstTab: [
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
      {
        name: 'Rules',
        label: 'Rules',
      },
      {
        name: 'Support',
        label: 'Support',
      },
      {
        name: 'Lobby',
        label: 'Lobby',
      },
    ],

    secondTab: [
      {
        name: 'Streams',
        label: 'Streams',
      },
      {
        name: 'Add stream',
        label: 'Add stream',
      },
    ],

    thirdTab: [
      {
        name: 'Prize pool',
        label: 'Prize pool',
      },
    ],

    fourTab: [
      {
        name: 'Quick rules',
        label: 'Quick rules',
      },
    ],
  },
];
