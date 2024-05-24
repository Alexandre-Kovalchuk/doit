<script setup>
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseDropdown from '@/components/Base/BaseDropdown.vue';

const host = ['User1990', 'User1990', 'User1990', 'User1990', 'User1990'];
</script>

<template>
  <div class="basic">
    <div class="basic__dropdown">
      <h3 class="basic__title">Host</h3>

      <BaseDropdown :options="host" />
    </div>

    <div class="basic__name">
      <BaseInput
        placeholder="Tournament name*"
        name="name"
        label="Tournament name*"
        modify="panel"
      />
    </div>

    <div class="basic__url">
      <p class="basic__host">Doit.gg/</p>
      <BaseInput placeholder="ivanenko-tournament" name="host" modify="panel" />
    </div>

    <div class="basic__quick">
      <h3 class="basic__title">Quick Rules</h3>

      <textarea
        class="basic__textarea"
        placeholder="You can write here somebody about your tournament...."
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss">
.basic {
  margin: 0 14px;

  &__dropdown {
    margin-bottom: 22px;
  }
  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #cccdcd;
    margin-bottom: 12px;
  }

  &__name {
    height: 68px;
    .inp {
      width: 100%;
      &__text {
        height: 40px;
      }
    }
  }

  &__url {
    display: flex;
    //align-items: center;
    margin: 22px 0;
    width: 100%;

    .inp {
      width: 418px;

      &__text {
        border-radius: 0 4px 4px 0;
        height: 40px;
      }
    }
  }

  &__host {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #78828f;
    text-align: center;
    padding: 12px 0;
    border: 2px solid #20252b;
    border-radius: 4px 0 0 4px;
    width: 94px;
    height: 40px;
    background: #20252b;
  }

  &__textarea {
    width: 100%;
    resize: none;
    border-radius: 4px;
    padding: 12px 16px;
    border: 2px solid #20252b;
    background: #0f1215;
    aspect-ratio: 1 / 0.36;
    color: #cccdcd;
    font-size: 16px;
    font-weight: 400;
  }

  .dropdown {
    color: #cccdcd;
    height: 40px;
    border-radius: 4px;
    border: 2px solid #20252b;
  }
}
</style>
