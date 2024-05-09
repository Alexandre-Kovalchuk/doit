import { computed, ref } from 'vue';

export function pagination(itemsPerPage, data) {
  const currentPage = ref(1);

  const paginatedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  });

  const totalPages = computed(() => Math.ceil(data.length / itemsPerPage));
  function setPage(page) {
    if (page > 0 && page <= totalPages.value) {
      currentPage.value = page;
    }
  }

  return {
    paginatedData,
    currentPage,
    totalPages,
    setPage,
  };
}
