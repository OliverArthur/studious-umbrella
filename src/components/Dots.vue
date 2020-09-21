<template>
  <ul class="dot">
    <li
      v-for="(_, index) in dots"
      class="dot__item"
      :class="{'dot__item--active': currentIndexEl === index}"
      :key="index">
      <button
        class="button dot__button"
        :disabled="currentIndexEl === index"
        @click="showCardElement(index)">
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppDot',
  props: {
    dots: {
      type: Array,
      required: true,
      default: () => []
    },
    currentIndexEl: {
      type: Number,
      required: true,
      default: 0
    },
    showCardElement: {
      type: Function,
      required: true,
      default: () => {}
    }
  }
}
</script>
