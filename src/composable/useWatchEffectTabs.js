export function useWatchTabs(q, router, selectedTab, defaultTab) {
  q.value = router.currentRoute.value.query.q || defaultTab;
  selectedTab.value = q.value;
}
