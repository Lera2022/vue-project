<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
@font-face {
  font-weight: 400;
  /* Соответствует значению normal */
  font-family: DM Serif Display, serif;
  src: url("./assets/fonts/DMSerifDisplay-Regular.ttf");
}

@font-face {
  font-weight: 400;
  /* Соответствует значению normal */
  font-family: DM Serif Display, serif;
  font-style: italic;
  src: url("./assets/fonts/DMSerifDisplay-Italic.ttf");
}

@font-face {
  font-weight: 700;
  /* Соответствует значению bold */
  font-family: Jost, sans-serif;
  src: url("./assets/fonts/Jost-Bold.ttf");
}

@font-face {
  font-weight: 600;
  font-family: Jost, sans-serif;
  src: url("./assets/fonts/Jost-SemiBold.ttf");
}

@font-face {
  font-weight: 400;
  font-family: Jost, sans-serif;
  src: url("./assets/fonts/Jost-Regular.ttf");
}
</style>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
