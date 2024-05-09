export function useSearch(data, nameSearch, nameRef) {
  return data.filter((name) => {
    return name[nameSearch].toLowerCase().includes(nameRef.toLowerCase());
  });
}
