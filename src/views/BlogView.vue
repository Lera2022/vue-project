<template>
  <main class="main">
    <section class="top__blog">
      <div class="wrapper__blog">
        <h1 class=" heading heading__blog">Articles & News</h1>
        <p class="breadcrumbs__blog">Home / Blog</p>
      </div>
    </section>

    <section class="latest center">
      <h2 class="heading__projects heading heading__latest">Latest Post</h2>
      <div class="wrapper__latest">
        <img src="../assets/img/latest.jpg" alt="room">
        <div class="wrapper__latest-text">
          <router-link to="/blogdetailsview">
            <h3 class="subheading subheading__latest">Low Cost Latest Invented Interior<br> Designing Ideas</h3>
          </router-link>
          <p class="desc__latest">Lorem ipsum dolor sit amet, adipiscing Aliquam<br> eu sem vitae turpis dignissim
            maximus.posuere<br> in.Contrary to popular belief.
          </p>
          <p class="desc__latest desc__bottom">
            Lorem Ipsum is not simply random text. It has<br> roots in a piece of classica.</p>
          <div class="article__wrapper">
            <p class="date">25 December,2022</p>
            <router-link to="/blogdetailsview">
              <img src="../assets/img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__article">
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="articles center">
      <h2 class="heading heading__articles_blog">Articles & News</h2>
      <ArticlesNews />
      <nav>
        <ul class="pagination">
          <li class="pagination__item"><img src="../assets/img/1.svg" alt="1"></li>
          <li class="pagination__item"><img src="../assets/img/2.svg" alt="2"></li>
          <li class="pagination__item"><img src="../assets/img/3.svg" alt="3"></li>
          <li><img src="../assets/img/parrow.svg" alt="arrow forward"></li>
        </ul>
      </nav>
    </section>
  </main>
</template>

<script>
import ArticlesNews from "../components/ArticlesNews.vue"
export default {
  name: 'BlogView',
  components: { ArticlesNews },
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
.subheading__latest {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}
</style>