<script setup></script>

<template>
  <main class="main">
    <section class="error">
      <div class="container">
        <div class="error__content">
          <div class="error__row">
            <div class="error__column error__column_right">
              <h1 class="error__title">404</h1>
            </div>

            <div class="error__column error__column_left">
              <p class="error__text">
                Are you lost? <br />
                Please back to the game!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '@/assets/style/breakpoints/media-breakpoints';

.error {
  margin-top: 204px;

  @include media-breakpoint-down(sm) {
    margin-top: 130px;

    background: linear-gradient(180deg, rgba(20, 114, 255, 0) 16.67%, #1472ff 100%);
  }

  &__row {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
  }

  &__title {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 700;
    font-size: 116px;
    line-height: 100%;
    color: #0f1215;
    padding: 109px 84px;

    @include media-breakpoint-down(md) {
      font-size: 108px;
    }

    @include media-breakpoint-down(sm) {
      color: #fff;
      padding: 71px 0 0;
      text-align: center;
      font-size: 100px;
      margin-bottom: 30px;
    }
  }

  &__text {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
    font-size: 30px;
    line-height: 130%;
    color: #fff;
    padding: 127px 84px;

    @include media-breakpoint-down(sm) {
      padding: 0;
      text-align: center;
      color: #0f1215;
    }
  }

  &__column {
    background: linear-gradient(90deg, #1472ff 0%, rgba(20, 114, 255, 0) 94.79%);
    @include media-breakpoint-down(sm) {
      background: none;
    }

    &_right {
      max-width: 602px;
      width: 100%;
      height: 333px;

      @include media-breakpoint-down(sm) {
        max-width: 100%;
        height: auto;
      }
    }

    &_left {
      max-width: 568px;
      width: 100%;
      height: 335px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      border-left: 1px solid #1472ff;
      background:
        linear-gradient(#0f1215, #0f1215) padding-box,
        linear-gradient(90deg, #1472ff 0%, rgba(20, 114, 255, 0) 94.79%);

      @include media-breakpoint-down(sm) {
        border: none;
        background: none;
      }
    }
  }
}
</style>
