<script setup>
import BaseImage from '@/components/Base/BaseImage.vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseSvg from '@/components/Base/BaseSvg.vue';
import UIBtn from '@/components/UI/UIBtn.vue';
// import { logo } from '@/components/Data/UseLogoAndAvatar.js';
import { icons } from '@/components/Data/PopUp/PopUpData.js';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { showPopUp } from '@/composable/test.js';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';
import { countries } from '@/components/Data/Profile/Setting.js';
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue';

import {
  day,
  month,
  saveToLocalStorage,
  updateDate,
  userData,
  year,
} from '@/composable/localStorage.js';
import {
  validateEmail,
  validatePassword,
  errorMessages,
  validateUsername,
} from '@/composable/useValidate.js';

const q = ref('');
const routers = useRouter();

let email = ref(null);

watch(() => {
  q.value = routers.currentRoute.value.query.q;
  // email.value = userData.value.email;
});

const param = (name) => {
  routers.push({ path: '/', query: { q: name } });
};

const handleClick = () => {
  saveToLocalStorage();
  showPopUp();
};
</script>

<template>
  <div class="login">
    <div class="login__logo">
      <BaseImage :srcset="logo.webp" :src="logo.img" :alt="'logo'" />
    </div>

    <h2 class="login__title">{{ q }}</h2>

    <!--  login  -->

    <div class="login__sign-in" v-if="q === 'Login'">
      <div class="login__email">
        <BaseInput
          placeholder="Username or Email"
          name="email"
          label="Username or Email"
          type="email"
          modify="email"
          v-model:value="userData.email"
          @input="validateEmail"
          :error="errorMessages.email"
        />
      </div>

      <div class="login__psd">
        <BaseInput
          placeholder="Password"
          name="pas"
          label="Password"
          type="password"
          modify="psd"
          v-model:value="userData.password"
          @input="validatePassword"
          :error="errorMessages.password"
        />
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

      <p class="login__forgot-psd">Forgot password ?</p>

      <p class="login__create">Don't have an account? <span>Sign up!</span></p>
    </div>

    <!--  Sign up 1/2  -->

    <div class="login__sign-in" v-if="q === 'Sign up 1/2'">
      <div class="login__email">
        <BaseInput
          placeholder="Username or Email"
          name="email"
          label="Username or Email"
          type="email"
          modify="email"
          v-model:value="userData.email"
          @input="validateEmail"
          :error="errorMessages.email"
        />
      </div>

      <div class="login__psd">
        <BaseInput
          placeholder="Password"
          name="pas"
          label="Password"
          type="password"
          modify="psd"
          v-model:value="userData.password"
          @input="validatePassword"
          :error="errorMessages.password"
        />
      </div>

      <div class="login__btn">
        <UIBtn label="Next step" color="blue" @click="param('Sign up 2/2')" />
      </div>

      <p class="login__text">or signup with</p>

      <div class="login__social">
        <div v-for="item in icons" :key="item.id" class="login__social-icon">
          <BaseSvg :id="item.svg" />
        </div>
      </div>

      <p class="login__forgot-psd">Already have an account?</p>
    </div>

    <!--  Sign up 1/2  -->

    <div class="login__sign-up" v-if="q === 'Sign up 2/2'">
      <div class="login__username">
        <BaseInput
          placeholder="Username "
          name="username"
          label="Username"
          type="text"
          modify="email"
          v-model:value="userData.username"
          @input="validateUsername"
          :error="errorMessages.text"
        />
      </div>

      <div class="login__country">
        <BaseDropdown
          :options="countries"
          title="Country"
          label="Select country"
          v-model:modelValue="userData.country"
        />
      </div>

      <div class="login__date">
        <p class="login__date-label">Date of birth</p>

        <div class="login__date-row">
          <BaseInput
            placeholder="dd"
            name="dd"
            label=""
            type="number"
            modify="email"
            v-model:value="day"
            @input="updateDate"
          />

          <BaseInput
            placeholder="mm"
            name="mm"
            label=""
            type="number"
            modify="email"
            v-model:value="month"
            @input="updateDate"
          />

          <BaseInput
            placeholder="yyyy"
            name="yyyy"
            label=""
            type="number"
            modify="email"
            v-model:value="year"
            @input="updateDate"
          />
        </div>
      </div>

      <div class="login__check">
        <BaseCheckbox
          label="I’m have at least 13 years of age and agree to the terms of service"
          name="sign"
        />
      </div>

      <div class="login__create-account">
        <router-link :to="{ path: '/profile' }">
          <UIBtn label="Create an account" color="blue" @click="handleClick" />
        </router-link>
      </div>
    </div>
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
    text-align: center;
    margin: 0 0 16px;
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

  &__forgot-psd {
    text-align: center;
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

  &__country {
    margin: 16px 0;
  }

  &__date-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #fff;
    margin-bottom: 6px;
  }

  &__date-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 12px;

    .inp {
      &__text {
        text-align: center;

        &::placeholder {
          text-align: center;
        }
      }
    }
  }

  &__check {
    margin-top: 16px;
    label {
      display: block;
      font-size: 12px !important;
      line-height: 133% !important;
      color: #627ca3 !important;
      width: 217px;
    }
  }

  &__create-account {
    margin-top: 22px;
    width: 241px;
    height: 44px;
  }

  .dropdown {
    &__title {
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: #fff;
      margin-bottom: 6px;
    }
  }
}
</style>
