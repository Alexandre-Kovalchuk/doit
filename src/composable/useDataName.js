import { computed } from 'vue';

export function dataName(name, q, nameTab) {
  return computed(() => {
    return name[0][q.value] || name[0][nameTab];
  });
}
