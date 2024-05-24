export function useSort(nameVar, data, nameSortA, nameSortB) {
  nameVar.value *= -1;

  data.value.sort((a, b) => {
    const nameA = a[nameSortA].toLowerCase();
    const nameB = b[nameSortB].toLowerCase();

    if (nameA < nameB) {
      return -1 * nameVar.value;
    }

    if (nameA > nameB) {
      return nameVar.value;
    }

    return 0;
  });
}
