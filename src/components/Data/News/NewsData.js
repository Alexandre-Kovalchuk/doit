function newsData() {
  const news = [
    {
      id: 1,
      title: 'Brazil end 12-year wait for Copa America',
      txt:
        'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.\n' +
        'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
      webp: new URL('../../../assets/img/news/news.webp', import.meta.url),
      png: new URL('../../../assets/img/news/news.png', import.meta.url),
    },

    {
      id: 2,
      title: 'Brazil end 12-year wait for Copa America',
      txt:
        'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.\n' +
        'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
      webp: new URL('../../../assets/img/news/news1.webp', import.meta.url),
      png: new URL('../../../assets/img/news/news1.png', import.meta.url),
    },

    {
      id: 3,
      title: 'Brazil end 12-year wait for Copa America',
      txt: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
      webp: new URL('../../../assets/img/news/news3.webp', import.meta.url),
      png: new URL('../../../assets/img/news/news3.png', import.meta.url),
    },

    {
      id: 4,
      title: 'Brazil end 12-year wait for Copa America',
      txt: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
      webp: new URL('../../../assets/img/news/news4.webp', import.meta.url),
      png: new URL('../../../assets/img/news/news4.png', import.meta.url),
    },
    {
      id: 5,
      title: 'Brazil end 12-year wait for Copa America',
      txt: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
      webp: new URL('../../../assets/img/news/news5.webp', import.meta.url),
      png: new URL('../../../assets/img/news/news5.png', import.meta.url),
    },
    {
      id: 6,
      title: 'Brazil end 12-year wait for Copa America',
      txt: 'A night to remember for Brazil. Drama is never too far away at Copa America and this final had it by the bucketlad. Thanks for your company.',
      webp: new URL('../../../assets/img/news/news6.webp', import.meta.url),
      png: new URL('../../../assets/img/news/news6.png', import.meta.url),
    },
  ];

  return { news };
}

function updateNewsTitle(q, title) {
  switch (q) {
    case 'StarCraft':
      title.value = 'StarCraft II';
      break;
    case 'Dota':
      title.value = 'Dota II';
      break;
    case 'CS':
      title.value = 'CS:GO';
      break;
    case 'LOL':
      title.value = 'League of Legends';
      break;
    case 'Fortnite':
      title.value = 'Fortnite';
      break;
    default:
      title.value = '';
      break;
  }
}

function changeTitle(index) {
  switch (index) {
    case 0:
      return 'StarCraft II';
    case 1:
      return 'Dota II';
    case 2:
      return 'CS:GO';
    case 3:
      return 'League of Legends';
    case 4:
      return 'Fortnite';
    default:
      return '';
  }
}

export { newsData, updateNewsTitle, changeTitle };
