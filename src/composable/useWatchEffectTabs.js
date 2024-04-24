export function useWatchTabs(q, router, selectedTab) {
  q.value = router.currentRoute.value.query.q;
  selectedTab.value = q.value;
}
