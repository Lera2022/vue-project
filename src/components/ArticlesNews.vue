<template>
  <div class="articles__wrapper">
    <div v-for=" article in articles ">
      <div class="article ">
        <img :src="article.url" :alt="article.alt" class="img__article">
        <h3 class="subheading subheading__article ">{{ article.subheading }}
        </h3>
        <div class="article__wrapper ">
          <p class="date ">{{ article.date }}</p>
          <a href="blog-details.html">
            <!-- <img src="../assets/img/arrow.svg " width="52px " height="52px " alt="arrow " class="arrow__article "> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArticlesNews',

  data() {
    return {
      articles: [{
        isDark: false,
        url: "article1.jpg",
        alt: 'Kitchan Design',
        subheading: 'Let’s Get Solution For Building Construction Work',
        date: '26 December,2022',
      },
      {
        isDark: true,
        url: "article2.jpg",
        alt: 'Living Design',
        subheading: `Low Cost Latest Invented Interior Designing Ideas.`,
        date: '22 December,2022',
      }, {
        isDark: false,
        url: "article3.jpg",
        alt: 'Interior Design',
        subheading: 'Best For Any Office &Business Interior Solution',
        date: '25 December,2022',
      }, {
        isDark: false,
        url: "article4.jpg",
        alt: 'Kitchan Design',
        subheading: 'Let’s Get Solution For Building Construction Work',
        date: '26 December,2022',
      }, {
        isDark: false,
        url: "article5.jpg",
        alt: 'Living Design',
        subheading: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '22 December,2022',
      }, {
        isDark: false,
        url: "article6.jpg",
        alt: 'Interior Design',
        subheading: 'Best For Any Office & Business Interior Solution',
        date: '25 December,2022',
      }
      ]
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>