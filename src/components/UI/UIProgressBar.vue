<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  percent: {
    type: Number,
    default: 50,
    required: true,
  },
  nameClass: {
    type: String,
    default: '',
    required: true,
  },
  maxWidth: {
    type: String,
    default: '300px',
  },

  color: {
    type: String,
    default: '',
    required: true,
  },

  // color: {
  //   type: String,
  //   default: '',
  // },
  //
  // percent: {
  //   type: Number,
  //   required: true,
  // },
});

// const props = defineProps({

//   percent: {
//     type: Number,
//     required: true,
//   },

// });
</script>

<template>
  <div class="progress">
    <div class="progress__row">
      <p
        :class="['progress__name', `progress__name_${nameClass}`]"
        :style="[{ color: `${color}` }]"
      >
        {{ name }}
      </p>
      <p
        :class="['progress__percent', `progress__name_${nameClass}`]"
        :style="[{ color: `${color}` }]"
      >
        {{ percent }}
      </p>
    </div>
    <div class="progress__bar">
      <div
        class="progress__line"
        :style="[{ width: `${percent}%` }, { background: `${color}` }]"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.progress {
  width: 100%;
  overflow: hidden;
  margin-bottom: 27px;
  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &__name {
  }

  &__bar {
    //height: 2px;
    background: #2b353f;
    height: 100%;
    border-radius: 4px;
    transition: 0.5s;
  }
  &__line {
    height: 4px;
    background: #55aaff;
  }
}
</style>
