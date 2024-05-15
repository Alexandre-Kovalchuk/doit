export function gameData() {
  const games = [
    {
      id: 1,
      txt: 'StarCraft II',
      webp: new URL('../../../assets/img/gameLogo/image5.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/image5.png', import.meta.url),
      logo: [
        {
          webp: new URL('../../../assets/img/dota_logo.webp', import.meta.url),
          png: new URL('../../../assets/img/dota_logo.png', import.meta.url),
        },
      ],
    },

    {
      id: 2,
      txt: 'Dota II',
      webp: new URL('../../../assets/img/gameLogo/image3.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/image3.png', import.meta.url),
      logo: [],
    },

    {
      id: 3,
      txt: 'CS:GO',
      webp: new URL('../../../assets/img/gameLogo/image2.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/image2.png', import.meta.url),
      logo: [],
    },

    {
      id: 4,
      txt: 'League of Legends',
      webp: new URL('../../../assets/img/gameLogo/image4.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/image4.png', import.meta.url),
      logo: [],
    },

    {
      id: 5,
      txt: 'Fortnite',
      webp: new URL('../../../assets/img/gameLogo/image.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/image.png', import.meta.url),
      logo: [],
    },

    {
      id: 6,
      txt: 'FIFA 2020',
      webp: new URL('../../../assets/img/gameLogo/fifa.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/fifa.png', import.meta.url),
    },

    {
      id: 7,
      txt: 'Metro',
      webp: new URL('../../../assets/img/gameLogo/metro.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/metro.png', import.meta.url),
    },

    {
      id: 8,
      txt: 'Valorant',
      webp: new URL('../../../assets/img/gameLogo/Valorant.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/Valorant.png', import.meta.url),
    },

    {
      id: 9,
      txt: 'Stalker 2',
      webp: new URL('../../../assets/img/gameLogo/stalker.webp', import.meta.url),
      img: new URL('../../../assets/img/gameLogo/stalker.png', import.meta.url),
    },
  ];
}
