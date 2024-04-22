<!--<script setup>-->
<!--const props = defineProps({-->
<!--  names: {-->
<!--    type: Array,-->
<!--    required: true,-->
<!--  },-->
<!--  selectedTab: {-->
<!--    type: String,-->
<!--    required: true,-->
<!--  },-->
<!--});-->

<!--const emit = defineEmits(['changeTab']);-->
<!--const clickOnTabs = (nameTab) => {-->
<!--  emit('changeTab', nameTab);-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="info-tab">-->
<!--    <div class="info-tab__row">-->
<!--      <button-->
<!--        :class="['info-tab__btns', { 'info-tab__btns_act': btn.name === selectedTab }]"-->
<!--        v-for="btn in names"-->
<!--        :key="btn.name"-->
<!--        @click="clickOnTabs(btn.name)"-->
<!--      >-->
<!--        {{ btn.label }}-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="info-tab__content">-->
<!--      <slot />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--@import '@/assets/style/breakpoints/media-breakpoints';-->

<!--.info-tab {-->
<!--  position: relative;-->

<!--  &__row {-->
<!--    display: flex;-->

<!--    @include media-breakpoint-down(sm) {-->
<!--      overflow: auto;-->

<!--      &::-webkit-scrollbar {-->
<!--        display: none;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__btns {-->
<!--    font-weight: 400;-->
<!--    font-size: 16px;-->
<!--    line-height: 200%;-->
<!--    color: #67707a;-->
<!--    padding: 11px 40px 9px;-->
<!--    border-top: 2px solid transparent;-->
<!--    position: relative;-->

<!--    @include media-breakpoint-down(md) {-->
<!--      font-size: 12px;-->
<!--      line-height: 100%;-->
<!--    }-->

<!--    @include media-breakpoint-down(xs) {-->
<!--      padding: 15px 18px;-->
<!--      background: #1a222d;-->
<!--      color: #f5f5f5;-->
<!--      margin-right: 4px;-->
<!--    }-->

<!--    &_act {-->
<!--      font-weight: 500;-->
<!--      color: #f5f5f5;-->
<!--      background: #0f1215;-->
<!--      border-top: 2px solid #20252b;-->
<!--      border-left: 2px solid #20252b;-->
<!--      border-right: 2px solid #20252b;-->
<!--      padding: 11px 40px 11px;-->

<!--      &:after {-->
<!--        content: '';-->
<!--        position: absolute;-->
<!--        width: 100%;-->
<!--        height: 4px;-->
<!--        background-color: #0f1215;-->
<!--        bottom: -3px;-->
<!--        left: 0;-->
<!--      }-->

<!--      @include media-breakpoint-down(sm) {-->
<!--        padding: 15px 18px;-->
<!--        border: none;-->
<!--        background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  &__content {-->
<!--  }-->
<!--}-->
<!--</style>-->
