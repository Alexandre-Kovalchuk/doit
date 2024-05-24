export function useShowAllSlide(data, variableName) {
  if (variableName.value === 'All' || variableName === 'All') {
    return Object.values(data).flat();
  } else {
    return data[variableName.value || variableName];
  }
}
