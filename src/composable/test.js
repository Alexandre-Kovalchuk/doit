import { ref } from 'vue';
import scrollLock from 'scroll-lock';

const isPopUp = ref(false);

function showPopUp() {
  isPopUp.value = !isPopUp.value;

  if (isPopUp.value) {
    scrollLock.disablePageScroll();
  } else {
    scrollLock.enablePageScroll();
  }
}

export { isPopUp, showPopUp };
