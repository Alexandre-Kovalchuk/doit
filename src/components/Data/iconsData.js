export function iconsData() {
  const logo = {
    webp: new URL('../../assets/img/logo.webp', import.meta.url),
    img: new URL('../../assets/img/logo.png', import.meta.url),
  };

  const accountIcon = {
    webp: new URL('../../assets/img/account.webp', import.meta.url),
    img: new URL('../../assets/img/account.png', import.meta.url),
  };

  return { logo, accountIcon };
}
