<script>
import img1 from "../assets/img/main__blog-details.jpg";
import img2 from "../assets/img/blog-details.jpg";
import BlogDetailsDivider from "../components/BlogDetailsDivider.vue";

export default {
  name: "BlogDetailsContent",
  components: { BlogDetailsDivider },
  data() {
    return {
      images: {
        top: img1,
        bottom: img2,
      }
    };
  }
};
</script>

<template>
  <div class="latest center">
    <h2 class="heading__projects heading__blog-details heading heading__latest">Let’s Get Solution for Building<br>
      Construction Work</h2>
    <img :src="images.top" alt="Image" class="content__img">
    <div class="content__stats date">
      <p>26 December,2022 </p>
      <p class="stats__item">Interior / Home / Decore</p>
    </div>
    <div class="content__text">
      <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
        in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
      <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
        Internet
        tend to repeat predefined chunks as necessary.</p>
      <div class="content__divider">
        <BlogDetailsDivider />
      </div>
      <h2 class="heading__projects heading__blog-details heading heading__latest">Design sprints are great</h2>
      <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
        in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered.</p>
      <ol class="content__list">
        <li class="content__item text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered.
        </li>
        <li class="content__item text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered.
        </li>
        <li class="content__item text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered.
        </li>
      </ol>
      <img :src="images.bottom" alt="Image" class="content__img">
      <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
        in.Contrary
        to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered.</p>
    </div>
  </div>
</template>

<style scoped>
.latest {
  width: 804px;
}

.heading__blog-details {
  text-align: left;
  font-weight: 400;
}

.content__img {
  margin-bottom: 46px;
}

.content__stats {
  display: flex;
  justify-content: space-between;
}

.date {
  margin-bottom: 48px;
}

.content__text {
  color: #4D5053;

  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
  margin-bottom: 35px;
}

.content__list {
  margin-bottom: 44px;
}

.content__item {
  padding: 16px 68px 16px 20px;
}
</style>