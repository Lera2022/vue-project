<script>
import HeaderBreadcrumbs from "../components/HeaderBreadcrumbs.vue"

export default {
  name: "PageHeader",
  components: { HeaderBreadcrumbs },
  props: {
    title: String,
    image: String,
  },
};
</script>

<template>
  <div class="header" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="header__container">
      <div class="wrapper__blog" v-if="title">
        <h1 class="heading heading__blog">{{ title }}</h1>
        <HeaderBreadcrumbs />
      </div>
    </div>
  </div>
</template>

