<script>
import PageHeader from "@/components/PageHeader.vue";
import logo from "../assets/img/top__project-details.jpg";
import photo from "../assets/img/main__project-details.jpg";
import BlogSlider from "../components/BlogSlider.vue"

export default {
  name: "ProjectDetailsPage",
  data() {
    return {
      headerImage: logo,
      article: {
        img: [photo, photo, photo],
        tag: "Kitchan",
        title: "Minimal Look Bedrooms",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. \nIn nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`,
        id: 1,
        date: '26 December,2022',
      }
    };
  },
  components: { BlogSlider, PageHeader }
};
</script>

<template>
  <div class="details">
    <PageHeader :image="headerImage" />
    <div class="details__container">
      <div class="details__description">
        <h1 class="details__title">{{ article.title }}</h1>
        <p class="details__text" v-for="text in article.description.split('\n')">{{ text }}</p>
      </div>
      <div class="details__slider">
        <BlogSlider :images="article.img" />
      </div>
    </div>
  </div>
</template>


