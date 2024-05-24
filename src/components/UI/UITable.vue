<script setup>
import BaseSvg from '@/components/Base/BaseSvg.vue';
import BaseInput from '@/components/Base/BaseInput.vue';

const props = defineProps({
  th: {
    type: Array,
    required: true,
  },
  dataTd: {
    type: Array,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['sort', 'popup']);

const sort = (name) => {
  emit('sort', name);
};

const popup = (name) => {
  if (name === 'info') {
    emit('popup', name);
  }
};
</script>

<template>
  <div class="table">
    <div class="table__head">
      <div class="table__head-row" v-for="(item, index) in th" :key="index">
        <h2 class="table__head-title">{{ item.name || item }}</h2>

        <div class="table__head-sort">
          <button class="table__head-top" @click="sort(item.name)">
            <BaseSvg id="arrow-top" />
          </button>

          <button class="table__head-down" @click="sort(item.name)">
            <BaseSvg id="arrow-bottom" />
          </button>
        </div>
      </div>
    </div>

    <div class="table__body">
      <div class="table__body-row" v-for="(item, index) in dataTd" :key="index">
        <div class="table__body-column" v-for="(value, key, index) in item" :key="index">
          <div class="table__body-content" v-if="key !== 'label'">
            <BaseInput
              :value="value"
              :name="key"
              :id="key"
              :is-disabled="isDisabled"
              placeholder=""
              :class="`inp__${key}`"
              :modify="key"
            />
          </div>

          <div class="table__body-subrow" v-if="key === 'label'">
            <button
              :class="`table__body-btn table__body-btn_${btn}`"
              v-for="(btn, index) in item.label"
              :key="index"
              @click="popup(btn)"
            >
              {{ btn }}
            </button>
          </div>
        </div>

        <p class="table__body-edit" v-if="isDisabled === false">edit</p>
      </div>
    </div>
  </div>

  <!--    <tbody>-->
  <!--      <tr v-for="(item, trIndex) in dataTd" :key="trIndex">-->
  <!--        <td v-for="(value, key, tdIndex) in item" :key="tdIndex">-->
  <!--          <div :class="['table__columns', `table__columns_${key}`]" v-if="key !== 'label'">-->
  <!--            <BaseInput-->
  <!--              :value="value"-->
  <!--              :name="key"-->
  <!--              :id="key"-->
  <!--              :is-disabled="isDisabled"-->
  <!--              placeholder=""-->
  <!--              :class="`inp__${key}`"-->
  <!--            />-->
  <!--          </div>-->

  <!--          <div class="table__btns" v-if="key === 'label'">-->
  <!--            <button-->
  <!--              :class="`table__btn table__btn_${btn}`"-->
  <!--              v-for="(btn, index) in item.label"-->
  <!--              :key="index"-->
  <!--            >-->
  <!--              {{ btn }}-->
  <!--            </button>-->
  <!--          </div>-->
  <!--        </td>-->

  <!--        <td v-if="isDisabled === false" style="padding: 0 16px 0 0">-->
  <!--          <p class="table__edit">edit</p>-->
  <!--        </td>-->
  <!--      </tr>-->
  <!--    </tbody>-->
  <!--  </table>-->
</template>

<style lang="scss">
.table {
  border: 2px solid #20252b;
  margin-top: 34px;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 44px;
    border-bottom: 2px solid #20252b;

    &-row {
      display: flex;
      align-items: center;
    }

    &-title {
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      color: #e6e6e6;
      opacity: 0.88;
    }

    &-sort {
      height: 16px;
      margin-left: 8px;
    }

    &-top,
    &-down {
      width: 16px;
      height: 10px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-down {
      margin-left: 2px;
    }
  }

  &__body {
    padding: 28px 43px 0;

    &-row {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
    }

    &-column {
      height: 32px;
    }

    &-content {
      width: fit-content;
      margin: 0 auto;
    }

    &-edit {
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      text-align: right;
      color: #cccdcd;
      width: 22px;
      margin-left: 22px;
    }

    &-subrow {
      display: flex;
      justify-content: space-between;
      width: 170px;
    }

    &-btn {
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      color: #f5f5f5;
      text-transform: capitalize;
      border-radius: 2px;

      &_yes,
      &_no,
      &_info {
        width: 50px;
        height: 24px;
        background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
      }

      &_sent {
        width: 100%;
        background: linear-gradient(180deg, #46f48c 0%, #2b9d37 100%);
      }

      &_declined {
        width: 100%;
        background: #601414;
      }
    }

    .inp {
      &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #67707a;
        padding: 0;

        &_disable {
          border: none;
        }

        &_active {
          border: 1px solid #20252b;
          border-radius: 4px;
          padding: 8px 16px;
          margin-bottom: 13px;
        }
      }
    }
  }
}

//.table {
//  margin-top: 30px;
//  border: 2px solid #20252b;
//  width: 100%;
//  border-spacing: 0;
//  border-collapse: collapse;
//
//  thead {
//    border-bottom: 2px solid #20252b;
//  }
//
//  tr {
//    height: 30px;
//  }
//
//  td {
//    padding: 30px 0 0;
//  }
//
//  //&:nth-child(1) {
//  //  td {
//  //    padding: 30px 30px 0 30px;
//  //  }
//  //}
//
//  &__row {
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    padding: 22px 0;
//  }
//
//  &__title {
//    font-weight: 500;
//    font-size: 22px;
//    line-height: 100%;
//    color: #e6e6e6;
//    opacity: 0.88;
//  }
//
//  &__sort {
//    height: 16px;
//    margin-left: 8px;
//  }
//
//  &__top,
//  &__down {
//    width: 16px;
//    height: 10px;
//
//    svg {
//      width: 100%;
//      height: 100%;
//    }
//  }
//
//  &__down {
//    margin-left: 2px;
//  }
//
//  &__columns {
//    margin: 0 auto;
//    &_name {
//      min-width: 292px;
//    }
//
//    &_entry,
//    &_author {
//      max-width: 83px;
//      width: 100%;
//    }
//
//    &_pool {
//      max-width: 96px;
//    }
//
//    &_signed {
//      max-width: 75px;
//    }
//
//    &_start {
//      max-width: 117px;
//    }
//
//    &_team {
//      max-width: 190px;
//    }
//
//    &_leader {
//      max-width: 100px;
//    }
//
//    &_game,
//    &_category {
//      max-width: 115px;
//    }
//
//    &_date {
//      max-width: 105px;
//    }
//  }
//

//
//  &__btns {
//    display: flex;
//    justify-content: space-between;
//    width: 170px;
//  }
//
//  &__btn {
//    font-weight: 700;
//    font-size: 16px;
//    line-height: 100%;
//    color: #f5f5f5;
//    text-transform: capitalize;
//    border-radius: 2px;
//
//    &_yes,
//    &_no,
//    &_info {
//      width: 50px;
//      height: 24px;
//      background: linear-gradient(180deg, #2788f6 0%, #0960e0 100%);
//    }
//
//    &_sent {
//      width: 100%;
//      background: linear-gradient(180deg, #46f48c 0%, #2b9d37 100%);
//    }
//
//    &_declined {
//      width: 100%;
//      background: #601414;
//    }
//  }
//
//  .inp {
//    &__text {
//      font-weight: 400;
//      font-size: 16px;
//      line-height: 100%;
//      color: #67707a;
//      padding: 0;
//      margin-bottom: 30px;
//
//      &_disable {
//        border: none;
//      }
//
//      &_active {
//        border: 1px solid #20252b;
//        border-radius: 4px;
//        padding: 8px 16px;
//        margin-bottom: 13px;
//      }
//    }
//  }
//}
</style>

<!--      <tr v-for="(item, index) in td" :key="index">-->
<!--        <td v-for="(key, index) in Object.keys(item)" :key="index">-->
<!--          <p-->
<!--            :class="[-->
<!--              'table__text',-->
<!--              { table__text_sent: item[key] === 'sent' },-->
<!--              { table__text_declined: item[key] === 'Declined' },-->
<!--            ]"-->
<!--            v-if="!Array.isArray(item[key]) || key !== 'label'"-->
<!--          >-->
<!--            {{ item[key] }}-->
<!--          </p>-->

<!--          <p-->
<!--            :class="['table__text', { table__text_label: key === 'label' }]"-->
<!--            v-else-if="Array.isArray(item[key]) && key === 'label'"-->
<!--          >-->
<!--            <span-->
<!--              :class="`table__text_${labelItem}`"-->
<!--              v-for="(labelItem, labelIndex) in item[key]"-->
<!--              :key="labelIndex"-->
<!--            >-->
<!--              {{ labelItem }}-->
<!--            </span>-->
<!--          </p>-->
<!--        </td>-->
<!--      </tr>-->
