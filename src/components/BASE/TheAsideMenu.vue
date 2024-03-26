<template>
  <aside class="aside">
    <div class="aside__content">
      <ul class="aside__list">
        <li v-for="item in svgIcon" class="aside__list-item">
          <svg>
            <use :xlink:href="item.id"></use>
          </svg>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const svgIcon = [
  {
    id: '#knight',
  },
  {
    id: '#trophy',
  },
  {
    id: '#growth',
  },
  {
    id: '#network',
  },
  {
    id: '#target',
  },
  {
    id: '#megaphone',
  },
];
</script>
<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';
.aside {
  position: absolute;

  &__content {
    position: fixed;
    left: 0;
    width: 114px;
    height: 100%;
    background-color: #0f1215;
    border-right: 2px solid #20252b;
    padding: 229px 40px 184px 40px;

    @include media-breakpoint-down(md) {
      bottom: 0;
      width: 100%;
      height: 55px;
      border-right: none;
      border-top: 2px solid #20252b;
      padding: 16px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @include media-breakpoint-down(md) {
      flex-direction: revert;
    }

    &-item {
      svg {
        width: 32px;
        height: 32px;
        @include media-breakpoint-down(md) {
          width: 32px;
          height: 22px;
        }
      }
    }
  }
}
</style>
