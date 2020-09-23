<template>
  <div :class="modifier" class="result">
    <button
      @click="goBack"
      class="button button--goBack">
      <img :src="require(`@/assets/images/backspace-black.svg`)" title="Go Back" />
      <span>Go Back</span>
    </button>
    <h1>Movies finder</h1>
    <p v-if="!error">
      We have found <strong>{{ totalResult }}</strong> criteria that match the title of the film.
    </p>
    <p v-else>
      {{ message }}
      <strong><router-link to="/">Please, try again</router-link></strong>
    </p>
    <app-slider v-if="!error && movies.length" :data="movies" />
  </div>
</template>

<script>
import AppSlider from '@/components/Slider'
import { useRouter } from 'vue-router'
import useStore from '@/hooks/useStore'
import { watch } from 'vue'

export default {
  name: 'AppResult',
  components: { AppSlider },
  props: {
    /**
     * @description this prop can be used to apply custom css
     * class to apply custom style.
     */
    modifier: {
      type: String
    },
    query: {
      type: String
    }
  },
  setup (props, ctx) {
    const { loadData, movies, error, message, totalResult } = useStore()
    const router = useRouter()

    watch(() => props.query, () => {
      loadData(props.query)
    }, { immediate: true })

    function goBack () {
      router.go(-1)
    }

    return {
      movies,
      totalResult,
      goBack,
      error,
      message
    }
  }
}
</script>
