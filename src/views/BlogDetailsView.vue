<script>
import headerImg from "../assets/img/top__blog-details.jpg";
import PageHeader from "../components/BlogTags.vue";
import BlogTags from "../components/BlogTags.vue";
import BlogDetailsContent from "../components/BlogDetailsContent.vue";

export default {
  name: "BlogDetailsView",
  components: { BlogDetailsContent, BlogTags, PageHeader },
  data() {
    return {
      headerImage: headerImg,
      tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bed Room'],
      providedTag: '',
    };
  },
  methods: {
    setProvidedTag(value) {
      if (this.providedTag === value) {
        this.providedTag = '';
      } else {
        this.providedTag = value;
      }
    }
  }
};
</script>


<template>
  <div>
    <section class="top__blog bdv">
      <div class="wrapper__blog">

      </div>
    </section>
    <div class="blog">
      <div class="blog__container">
        <div class="blog__content">
          <BlogDetailsContent />
        </div>
        <div class="blog__tags">
          <BlogTags :provided-tag="providedTag" :tags="tags" @provide-tag="setProvidedTag" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bdv {
  background-image: url('../assets/img/top__blog-details.jpg');
}
</style>
