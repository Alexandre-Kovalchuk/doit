export function modifyKey(name, firstKey, secondKey) {
  return Object.keys(name[firstKey])[secondKey];
}
