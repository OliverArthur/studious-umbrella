<template>
  <div :class="modifier" class="home">
    <app-search />
  </div>
</template>

<script>
import AppSearch from '@/components/Search'

export default {
  name: 'Home',
  components: { AppSearch },
  props: {
    /**
     * @description this prop can be used to apply custom css
     * class to apply custom style.
     */
    modifier: {
      type: String
    }
  }
}
</script>
