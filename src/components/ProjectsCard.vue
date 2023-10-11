<script>


export default {
  name: "ProjectsCard",
  props: {
    title: String,
    text: String,
    img: String,
    id: Number | String,
    rounded: Number
  },
  methods: {
    navigate() {
      router.push({ path: `/project/${this.id}` });
    }
  },
  data() {
    return {
      roundedClasses: ["", "rounded--rt", "rounded--rb", "rounded--lt", "rounded--lb"]
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img width="585px" :src="img" :alt="title" :class="`${roundedClasses[rounded]} ${rounded !== 0 ? 'img' : ''}`"
        :height="rounded > 0 ? '550px' : ''">
    </div>
    <div class="card__description">
      <div class="card__about">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__text">{{ text }}</p>
      </div>
      <div class="card__action">
        <router-link to="/projectdetailsview"><button class="card__btn" @click="navigate">
            <img src="../assets/img/project-arrow.svg" alt="forward">
          </button></router-link>
      </div>
    </div>
  </div>
</template>

<style>
.card__description {
  display: flex;
  justify-content: space-between;
}

.card__title {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.card__text {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}
</style>
