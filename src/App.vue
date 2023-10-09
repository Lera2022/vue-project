<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: { Header, Footer }
}
</script>

<template>
  <div class="pages">
    <Header />
    <div class="pages__view">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'DM Sans', 'Open Sans', sans-serif;
  src: url("./assets/fonts/DMSerifDisplay-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Jost', 'Open Sans', sans-serif;
  src: url("./assets/fonts/Jost-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Jost bold', 'Open Sans', sans-serif;
  src: url("./assets/fonts/Jost-Bold.ttf");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'Jost semi-bold', 'Open Sans', sans-serif;
  src: url("./assets/fonts/Jost-SemiBold.ttf");
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}

.page-body {
  font-family: 'Jost', sans-serif;
  color: #292F36;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.heading,
.num__indicator,
.subheading {
  font-family: 'DM Serif Display', serif;
  font-weight: inherit;
}
</style>
