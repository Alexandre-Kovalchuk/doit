<script setup>
const emit = defineEmits(['update:value']);

const props = defineProps({
  value: {
    type: String,
    default: '',
  },

  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: 'text',
  },

  placeholder: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    required: false,
  },

  modify: {
    type: String,
    default: '',
    required: false,
  },
});

const updateVal = (e) => {
  emit('update:value', e.target.value);
};
</script>

<template>
  <div class="inp">
    <input
      :class="['inp__text', modify ? `inp__text_${modify}` : '']"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateVal"
    />
    <label class="inp__label" :for="name">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
.inp {
  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #cccdcd;
    padding: 12px 16px;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid #20252b;
    border-radius: 4px;

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #cccdcd;
    }
  }
}
</style>
