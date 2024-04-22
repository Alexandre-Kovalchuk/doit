import { computed } from 'vue';

export function dataName(name, q) {
  return computed(() => {
    return name[0][q.value] || [];
  });
}
