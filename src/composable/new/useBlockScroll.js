import scrollLock from 'scroll-lock';
import { ref } from 'vue';

const isScroll = ref(false);

export function useBlockScroll() {
  isScroll.value = !isScroll.value;

  if (isScroll.value) {
    scrollLock.disablePageScroll();
  } else {
    scrollLock.enablePageScroll();
  }
}
