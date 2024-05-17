import { ref } from 'vue';

export function userLinksData() {
  const links = ref([
    { name: 'Play', href: 'play' },
    { name: 'News', href: 'news' },
    { name: 'Games', href: 'games' },
    { name: 'Shop', href: 'shop' },
    { name: 'Sponsorship', href: 'sponsorship' },
  ]);

  const userLinks = ref([
    { name: 'profile', href: 'My profile' },
    { name: 'profile', href: 'My team' },
    { name: 'profile', href: 'Deposit/Withdraw' },
    { name: 'profile', href: 'Deposit/Withdraw' },
    { name: 'profile', href: 'Premium' },
    { name: 'profile', href: 'Statistics' },
  ]);

  const userLinksSub = ref([
    { name: 'profile', href: 'Support' },
    { name: 'profile', href: 'Settings' },
    { name: '/', href: 'Logout' },
  ]);

  return { links, userLinks, userLinksSub };
}
