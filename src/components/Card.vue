<template>
  <article class="card">
    <div class="card__media">
      <img :src="media" :alt="title" />
    </div>
    <div class="card__content">
      <span class="title">{{ title }}</span>
      <div class="meta">
        <span class="date">{{ releaseDate }}</span>
        <span class="type">{{ mediaType }}</span>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'AppCard',
  props: {
    title: {
      type: String,
      required: true,
      default: null
    },
    media: {
      type: String,
      required: true,
      default: null
    },
    releaseDate: {
      type: String,
      required: true,
      default: null
    },
    mediaType: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
