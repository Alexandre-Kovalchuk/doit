export function useAllData(arr, allDataArr) {
  for (let elem in arr[0]) {
    if (Array.isArray(arr[0][elem])) {
      arr[0][elem].forEach((item) => {
        allDataArr.push(item);
      });
    }
  }
  return allDataArr;
}
