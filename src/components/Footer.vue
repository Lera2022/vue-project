<template>
  <footer class="footer center">
    <div class="logo__footer">
      <a class="logo" href="index.html">
        <img src="../assets/img/Logo.svg" alt="Interno Logo">
        <h2 class="heading heading__logo">Interno</h2>
      </a>
      <p class="desc__logo">It is a long established fact that a reader<br>will be distracted lookings.</p>
      <div class="social">
        <a href="#"><img src="../assets/img/tw.svg" alt="twitter"></a>
        <a href="#"><img src="../assets/img/in.svg" alt="in"></a>
      </div>
    </div>
    <div class="nav">
      <h3 class="subheading subheading__footer">Pages</h3>
      <ul class="nav_list">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
      </ul>
    </div>
    <div class="nav contact">
      <h3 class="subheading subheading__footer">Contact</h3>
      <p class="desc__contact">55 East Birchwood Ave.<br>Brooklyn, New York 11201</p>
      <p class="desc__contact">contact@interno.com</p>
      <p class="desc__contact">(123) 456 - 7890</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

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
.footer {
  display: flex;
  gap: 101px;
  padding-bottom: 140px;
  color: #4D5053;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.heading__logo {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 50px */
}

.desc__logo {
  margin-top: 25px;
  margin-bottom: 25px;
}

.subheading__footer {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
}

.social {
  display: flex;
  gap: 54px;
}

.nav {
  display: grid;
  gap: 25px;

  .nav_list {
    display: grid;
    gap: 25px;
  }
}

.contact {
  margin-left: 282px;
}
</style>