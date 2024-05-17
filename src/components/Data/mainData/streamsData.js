export function streamsData() {
  const Dota = [
    {
      id: 1,
      webp: new URL('../../../assets/img/dota/Dota1.webp', import.meta.url),
      img: new URL('../../../assets/img/dota/Dota1.png', import.meta.url),
    },
    {
      id: 2,
      webp: new URL('../../../assets/img/dota/Dota2.webp', import.meta.url),
      img: new URL('../../../assets/img/dota/Dota2.png', import.meta.url),
    },
    {
      id: 3,
      webp: new URL('../../../assets/img/dota/Dota3.webp', import.meta.url),
      img: new URL('../../../assets/img/dota/Dota3.png', import.meta.url),
    },
  ];

  const Fortnite = [
    {
      id: 1,
      webp: new URL('../../../assets/img/Fortnite/Fortnite1.webp', import.meta.url),
      img: new URL('../../../assets/img/Fortnite/Fortnite1.jpeg', import.meta.url),
    },
    {
      id: 2,
      webp: new URL('../../../assets/img/Fortnite/Fortnite2.webp', import.meta.url),
      img: new URL('../../../assets/img/Fortnite/Fortnite2.jpeg', import.meta.url),
    },
    {
      id: 3,
      webp: new URL('../../../assets/img/Fortnite/Fortnite3.webp', import.meta.url),
      img: new URL('../../../assets/img/Fortnite/Fortnite3.jpeg', import.meta.url),
    },
  ];

  const LOL = [
    {
      id: 1,
      webp: new URL('../../../assets/img/lol/LOL1.webp', import.meta.url),
      img: new URL('../../../assets/img/lol/LOL1.png', import.meta.url),
    },
    {
      id: 2,
      webp: new URL('../../../assets/img/lol/LOL2.webp', import.meta.url),
      img: new URL('../../../assets/img/lol/LOL2.png', import.meta.url),
    },
    {
      id: 3,
      webp: new URL('../../../assets/img/lol/LOL3.webp', import.meta.url),
      img: new URL('../../../assets/img/lol/LOL3.png', import.meta.url),
    },
  ];

  const CS = [
    {
      id: 1,
      webp: new URL('../../../assets/img/cs/CS1.webp', import.meta.url),
      img: new URL('../../../assets/img/cs/CS1.png', import.meta.url),
    },
    {
      id: 2,
      webp: new URL('../../../assets/img/cs/CS2.webp', import.meta.url),
      img: new URL('../../../assets/img/cs/CS2.png', import.meta.url),
    },
    {
      id: 3,
      webp: new URL('../../../assets/img/cs/CS3.webp', import.meta.url),
      img: new URL('../../../assets/img/cs/CS3.png', import.meta.url),
    },
  ];

  const StarCraft = [
    {
      id: 1,
      webp: new URL('../../../assets/img/StarCraft/StarCraft1.webp', import.meta.url),
      img: new URL('../../../assets/img/StarCraft/StarCraft1.png', import.meta.url),
    },
    {
      id: 2,
      webp: new URL('../../../assets/img/StarCraft/StarCraft2.webp', import.meta.url),
      img: new URL('../../../assets/img/StarCraft/StarCraft2.png', import.meta.url),
    },
    {
      id: 3,
      webp: new URL('../../../assets/img/StarCraft/StarCraft3.webp', import.meta.url),
      img: new URL('../../../assets/img/StarCraft/StarCraft3.png', import.meta.url),
    },
  ];

  return { Dota, Fortnite, LOL, CS, StarCraft };
}
