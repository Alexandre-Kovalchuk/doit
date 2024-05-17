export function lobbyData() {
  const firstTeam = [
    {
      name: 'heavyfish365',
      nickname: 'silverfrog195',
      webp: new URL('../../assets/img/teams/firstTeam1.webp', import.meta.url),
      png: new URL('../../assets/img/teams/firstTeam1.png', import.meta.url),
      svg: 'crown',
    },

    {
      name: 'ticklishbird837',
      nickname: 'yellowbear776',
      webp: new URL('../../assets/img/teams/firstTeam2.webp', import.meta.url),
      png: new URL('../../assets/img/teams/firstTeam2.png', import.meta.url),
    },

    {
      name: 'brownbird866',
      nickname: 'silverfrog195',
      webp: new URL('../../assets/img/teams/firstTeam3.webp', import.meta.url),
      png: new URL('../../assets/img/teams/firstTeam3.png', import.meta.url),
    },

    {
      name: 'happysnake594',
      nickname: 'lazymeercat616',
      webp: new URL('../../assets/img/teams/firstTeam4.webp', import.meta.url),
      png: new URL('../../assets/img/teams/firstTeam4.png', import.meta.url),
    },

    {
      name: 'lazypanda823',
      nickname: 'purpleleopard757',
      webp: new URL('../../assets/img/teams/firstTeam5.webp', import.meta.url),
      png: new URL('../../assets/img/teams/firstTeam5.png', import.meta.url),
    },
  ];

  const secondTeam = [
    {
      name: 'biggorilla763',
      nickname: 'sadpanda176',
      webp: new URL('../../assets/img/teams/secondTeam1.webp', import.meta.url),
      png: new URL('../../assets/img/teams/secondTeam1.png', import.meta.url),
    },
    {
      name: 'redladybug753',
      nickname: 'sadpanda176',
      webp: new URL('../../assets/img/teams/secondTeam2.webp', import.meta.url),
      png: new URL('../../assets/img/teams/secondTeam2.png', import.meta.url),
    },
    {
      name: 'brownbear646',
      nickname: 'sadpanda176',
      webp: new URL('../../assets/img/teams/secondTeam3.webp', import.meta.url),
      png: new URL('../../assets/img/teams/secondTeam3.png', import.meta.url),
      svg: 'crown',
    },
    {
      name: 'crazyfish228',
      nickname: 'crazyfrog418',
      webp: new URL('../../assets/img/teams/secondTeam4.webp', import.meta.url),
      png: new URL('../../assets/img/teams/secondTeam4.png', import.meta.url),
    },
    {
      name: 'sadwolf227',
      nickname: 'beautifullion765',
      webp: new URL('../../assets/img/teams/secondTeam5.webp', import.meta.url),
      png: new URL('../../assets/img/teams/secondTeam5.png', import.meta.url),
    },
  ];

  const titleTeam = ['Team 1', 'Team 2'];

  const details = [
    {
      txtName: 'NAME',
      txtPsd: 'PASSWORD',
      txtIp: 'SERVER IP',
      name: 'ESL - 3451516161714',
      psd: '121245W1SDA61CG6',
      ip: '453.647.484.14:2701',
    },
  ];

  return { firstTeam, secondTeam, titleTeam, details };
}
