<script setup>
const props = defineProps({
  label: {
    type: Storage,
    default: '',
  },
  name: {
    type: Storage,
    default: '',
  },
});
</script>

<template>
  <input type="checkbox" :id="name" />
  <label :for="name">{{ label }}</label>
</template>

<style lang="scss">
[type='checkbox']:not(:checked),
[type='checkbox']:checked {
  display: none;
}
[type='checkbox']:not(:checked) + label,
[type='checkbox']:checked + label {
  position: relative;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #cccdcd;
  padding-left: 26px;
}

[type='checkbox']:not(:checked) + label:before,
[type='checkbox']:checked + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  border: 2px solid #20252b;
  border-radius: 4px;
  width: 18px;
  height: 18px;
  transition: 0.275s;
}

[type='checkbox']:not(:checked) + label:after,
[type='checkbox']:checked + label:after {
  content: url('@/assets/img/check.svg');
  position: absolute;
  top: 0;
  left: 4px;
  transition: 0.2s;
}

[type='checkbox']:not(:checked) + label:after {
  opacity: 0;
}
</style>
