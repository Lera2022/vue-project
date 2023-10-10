<template>
  <header class="header center">
    <a class="logo" href="index.html">
      <img src="../assets/img/Logo.svg" alt="Interno Logo">
      <h1 class="heading heading__logo">Interno</h1>
    </a>
    <nav>
      <ul class="nav__header">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/projectview">Project</router-link>
        </li>
        <li>
          <router-link to="/blogview">Blog</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding-top: 61px;
  padding-bottom: 57px;
}

.logo {
  display: flex;
  gap: 10px;
}

.nav__header {
  display: flex;
  justify-content: space-between;
  width: 243px;
  font-size: 20px;
}
</style>