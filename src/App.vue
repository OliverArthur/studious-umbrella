<template>
  <main class="app">
    <router-view v-slot="{ Component }">
      <transition name="slider">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>
<script>

export default {
  name: 'App'
}
</script>
<style lang="scss">
#app {
  width: 100%;
}
</style>
