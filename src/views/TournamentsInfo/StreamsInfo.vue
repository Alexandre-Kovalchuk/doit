<script setup>
const props = defineProps({
  label: {
    type: String,
  },
});
</script>

<template>
  <div class="game-streams">
    <textarea :placeholder="label"></textarea>
  </div>
</template>

<style lang="scss">
.game-streams {
  border: 2px solid #20252b;
  height: 311px;

  textarea {
    background: #0f1215;
    width: 100%;
    height: 100%;
    padding: 26px;
    resize: none;
    aspect-ratio: 1 / 0.635;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #67707a;

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #67707a;
    }
  }
}
</style>
