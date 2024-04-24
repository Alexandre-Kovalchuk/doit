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
    default: 'text',
  },

  placeholder: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    default: '',
  },

  modify: {
    type: String,
    default: '',
  },
});

const updateVal = (e) => {
  emit('update:value', e.target.value);
};
</script>

<template>
  <div class="inp">
    <label :class="['inp__label', modify ? `inp__label_${modify}` : '']" :for="name">
      {{ label }}
    </label>
    <input
      :class="['inp__text', modify ? `inp__text_${modify}` : '']"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateVal"
    />
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

    &_email,
    &_psd {
      border: 1px solid #16263d;
      border-radius: 2px;
      color: #627ca3;
      height: 40px;

      &::placeholder {
        color: #627ca3;
      }

      &:focus {
        border: 1px solid #185ec7;
        background: #16263d;
      }
    }
  }

  &__label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #fff;
    margin-bottom: 6px;

    &_game {
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      color: #cccdcd;
      margin: 22px 0 12px;
    }
  }
}
</style>
