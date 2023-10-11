<script>
import ProjectsCard from "./ProjectsCard.vue";

export default {
  name: "ProjectsList",
  components: { ProjectsCard },
  props: {
    projects: Array,
    target: String,
  },
  computed: {
    leftRow() {
      return this.projects.filter((_, idx) => !(idx % 2));
    },
    rightRow() {
      return this.projects.filter((_, idx) => idx % 2);
    }
  },
  methods: {
    getRounded(idx, column) {
      if (this.target !== 'home') return 0;
      if (column === 2 && idx === 0) return 3
      if (column === 2 && idx === 1) return 4
      return column + idx
    }
  }
};
</script>

<template>
  <div class="projects center">
    <div class="projects__column">
      <ProjectsCard v-for="(project, idx) in leftRow" :img="project.img" :text="project.text" :title="project.title"
        :key="project.id" :rounded="getRounded(idx, 1)" :id="project.id" />
    </div>
    <div class="projects__column">
      <ProjectsCard v-for="(project, idx) in rightRow" :img="project.img" :text="project.text" :title="project.title"
        :key="project.id" :rounded="getRounded(idx, 2)" :id="project.id" />
    </div>

  </div>
</template>

<style scoped
       lang="scss">
       .projects {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;

         &__column {
           display: flex;
           flex-direction: column;
           gap: 55px;
         }
       }
</style>
