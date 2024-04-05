<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
import { logo } from '@/components/JSFiles/UseLogo.js';
import { icons } from '@/components/JSFiles/PopUp/PopUpData.js';
</script>

<template>
  <div class="login">
    <div class="login__logo">
      <BaseImage :srcset="logo.webp" :src="logo.img" :alt="'logo'" />
    </div>

    <h2 class="login__title">{{}}</h2>

    <div class="login__email">
      <BaseInput
        placeholder="Username or Email"
        name="email"
        label="Username or Email"
        type="email"
        modify="email"
      />
    </div>

    <div class="login__psd">
      <BaseInput placeholder="Password" name="pas" label="Password" type="password" modify="psd" />
    </div>

    <div class="login__btn">
      <UIBtn label="Login" color="blue" />
    </div>

    <p class="login__text">or login with</p>

    <div class="login__social">
      <div v-for="item in icons" :key="item.id" class="login__social-icon">
        <BaseSvg :id="item.svg" />
      </div>
    </div>

    <p class="login__forgot-psd">Forgot password?</p>

    <p class="login__create">Don't have an account? <span>Sign up!</span></p>
  </div>
</template>

<style lang="scss">
.login {
  max-width: 241px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    width: 80px;
    height: 80px;
    margin-bottom: 44px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    text-align: center;
    color: #e6e6e6;
    margin-bottom: 30px;
  }

  &__email {
    width: 100%;
    margin-bottom: 16px;
  }

  &__psd {
    width: 100%;
    margin-bottom: 22px;
  }

  &__btn {
    width: 100%;
    height: 44px;
    margin-bottom: 30px;
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #627ca3;
    margin-bottom: 16px;
  }

  &__social {
    width: 216px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    &-icon {
      border: 1px solid #16263d;
      border-radius: 2px;
      padding: 8px;
      width: 48px;
      height: 48px;

      svg {
        width: 32px;
        height: 32px;
      }
    }
  }

  &__forgot-psd,
  span,
  &__create {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #0a68f5;
    margin-bottom: 12px;
  }

  &__create {
    width: 100%;
    color: #627ca3;
  }
}
</style>
