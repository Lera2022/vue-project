<template>
  <div class="wrapper__404">
    <div class="left">
      <h1 class="heading__404">404</h1>
      <p class="dsc__404">We are sorry, but the page
        you requested was not found</p>
    </div>
    <img src="../assets/img/main__404.jpg" alt="ruins">
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',

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

<style lang="scss" scoped>
.wrapper__404 {
  padding-left: calc(50% - 600px);
  display: flex;
  align-items: center;
  gap: 81px;
  margin-bottom: 200px;
}

.heading__404 {
  color: #CDA274;
  font-family: DM Serif Display;
  font-size: 250px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 312.5px */
}

.dsc__404 {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 52.5px */
  letter-spacing: 0.35px;
}
</style>