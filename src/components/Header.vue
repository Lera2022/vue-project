<template>
  <header class="header center">
    <a class="logo" href="index.html">
      <img src="../assets/img/Logo.svg" alt="Interno Logo">
      <h1 class="heading heading__logo">Interno</h1>
    </a>
    <nav>
      <ul class="nav__header">
        <li v-for="([name, path]) in Object.entries(routes)">
          <router-link :to="path" class="nav__link">{{ name[0].toUpperCase() + name.slice(1) }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

import { navigationRoutes } from "../router/navigationRoutes.js";

export default {
  name: "InternoHeader",
  data() {
    return {
      routes: navigationRoutes,
    }
  }
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