<template>
  <div class="slider">
    <div class="slider__inner">
      <button
        type="button"
        class="button slider__button button--prev"
        @click="showPrev"
        :disabled="leftEdge">
          <img
          class="icon"
          alt="left arrow"
          :src="require(`@/assets/images/keyboard_arrow_left.svg`)" />
      </button>
      <app-card
        :title="currentElement.Title"
        :media="currentElement.Poster"
        :release-date="currentElement.Year"
        :media-type="currentElement.Type"/>
      <button
        type="button"
        class="button slider__button button--next"
        @click="showNext"
        :disabled="rightEdge">
        <img
          class="icon"
          alt="right arrow"
          :src="require(`@/assets/images/keyboard_arrow_right.svg`)" />
      </button>
    </div>
    <app-dots
      :dots="data"
      :current-index-el="currentIndexEl"
      :show-card-element="showElement"/>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import AppCard from '@/components/Card'
import AppDots from '@/components/Dots'

export default {
  name: 'AppSlider',
  components: {
    AppCard,
    AppDots
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup (props, ctx) {
    const cards = ref(props.data)
    const currentIndexEl = ref(0)

    const currentElement = computed(() => cards.value[currentIndexEl.value])
    const leftEdge = computed(() => currentIndexEl.value === 0)
    const rightEdge = computed(() => currentIndexEl.value === cards.value.length - 1)

    function showNext () {
      currentIndexEl.value++
    }

    function showPrev () {
      currentIndexEl.value--
    }

    function showElement (elementIndex) {
      currentIndexEl.value = elementIndex
    }

    return {
      currentIndexEl,
      currentElement,
      leftEdge,
      rightEdge,
      showNext,
      showPrev,
      showElement
    }
  }
}
</script>
