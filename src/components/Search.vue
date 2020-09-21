<template>
<div :class="modifier" class="search">
  <h1>Movies finder</h1>
  <form class="search__form" role="search">
    <label for="search">Search for your favorite movies</label>
    <input
      id="search"
      placeholder="Search by movie title"
      autofocus
      v-model="query"
      class="search__control"
      type="search"
      required
    />
    <button
      class="search__button"
      @click.prevent="gotToPage">
      <span>GO!</span>
    </button>
  </form>
  <div class="search__message">
    <small class="info">Press enter or the button to search</small>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'

export default {
  name: 'AppSearch',
  props: {
    modifier: {
      type: String
    }
  },
  setup () {
    const query = ref('')

    function gotToPage () {
      router.push({
        name: 'result',
        params: { query: query.value }
      })
    }

    return {
      query,
      gotToPage
    }
  }
}
</script>
