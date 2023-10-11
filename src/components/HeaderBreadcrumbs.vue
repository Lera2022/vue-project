<script>
export default {
  name: "HeaderBreadcrumbs",
  computed: {
    direction() {
      return this.$route.path;
    }
  }
};
</script>

<template>
  <nav class="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    /
    <router-link class="nav__link" :to="direction">{{ direction.slice(1)[0].toUpperCase() +
      direction.slice(2) }}</router-link>
  </nav>
</template>


