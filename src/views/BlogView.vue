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
        <img src="img/latest.jpg" alt="room">
        <div class="wrapper__latest-text">
          <h3 class="subheading subheading__latest">Low Cost Latest Invented Interior<br> Designing Ideas</h3>
          <p class="desc__latest">Lorem ipsum dolor sit amet, adipiscing Aliquam<br> eu sem vitae turpis dignissim
            maximus.posuere<br> in.Contrary to popular belief.
          </p>
          <p class="desc__latest desc__bottom">
            Lorem Ipsum is not simply random text. It has<br> roots in a piece of classica.</p>
          <div class="article__wrapper">
            <p class="date">25 December,2022</p>
            <a href="blog-details.html">
              <img src="img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__article">
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="articles center">
      <h2 class="heading heading__articles_blog">Articles & News</h2>
      <div id="app">
        <div class="articles__wrapper">
          <div v-for=" article in articles ">
            <div class="article ">
              <img :src="article.url" :alt="article.alt" class="img__article">
              <h3 class="subheading subheading__article ">{{ article.subheading }}
              </h3>
              <div class="article__wrapper ">
                <p class="date ">{{ article.date }}</p>
                <a href="blog-details.html">
                  <img src="img/arrow.svg " width="52px " height="52px " alt="arrow " class="arrow__article ">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul class="pagination">
          <li class="pagination__item"><img src="img/1.svg" alt="1"></li>
          <li class="pagination__item"><img src="img/2.svg" alt="2"></li>
          <li class="pagination__item"><img src="img/3.svg" alt="3"></li>
          <li><img src="img/parrow.svg" alt="arrow forward"></li>
        </ul>
      </nav>
    </section>
  </main>
</template>

<script>
export default {
  name: 'VueProjectBlogView',

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

<style lang="scss" scoped></style>