export function changeTabs(selectedTab, tabName, router, namePage) {
  selectedTab.value = tabName;
  router.push({ path: namePage, query: { q: tabName } });
}
