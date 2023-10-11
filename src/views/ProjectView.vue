<script>
import PageHeader from "@/components/PageHeader.vue";
import logo from "../assets/img/top__project.jpg";
import img1 from "../assets/img/project1.jpg";
import img2 from "../assets/img/project2.jpg";
import img3 from "../assets/img/project3.jpg";
import img4 from "../assets/img/project4.jpg";
import img5 from "../assets/img/project5.jpg";
import img6 from "../assets/img/project6.jpg";
import img7 from "../assets/img/project7.jpg";
import img8 from "../assets/img/project8.jpg";
import ProjectTags from "../components/ProjectTags.vue";
import ProjectsList from "../components/ProjectsList.vue";
import PaginationButtons from "../components/PaginationButtons.vue";

export default {
  name: "ProjectView",
  data() {
    return {
      image: logo,
      projects: [
        {
          img: img1,
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          id: 1,
          tags: ['Bed Room', 'Kitchan']
        },
        {
          img: img2,
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          id: 2,
          tags: ['Bed Room', 'Living Area']
        },
        {
          img: img3,
          title: "Classic Minimal Bedroom",
          text: "Decor / Artchitecture",
          id: 3,
          tags: ['Bed Room', 'Kitchan']
        },
        {
          img: img4,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          id: 4,
          tags: ['Bed Room', 'Living Area']
        },
        {
          img: img5,
          title: "Minimal Bedroom table",
          text: "Decor / Artchitecture",
          id: 5,
          tags: ['Bed Room', 'Bathroom']
        },
        {
          img: img6,
          title: "System Table",
          text: "Decor / Artchitecture",
          id: 6,
          tags: ['Bed Room', 'Bathroom']
        },
        {
          img: img7,
          title: "Modern Medroom",
          text: "Decor / Artchitecture",
          id: 7,
          tags: ['Bed Room', 'Kitchan']
        },
        {
          img: img8,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          id: 8,
          tags: ['Bed Room', 'Living Area']
        }
      ],
      tags: [
        "Bathroom",
        "Bed Room",
        "Kitchan",
        "Living Area"
      ],
      providedTag: "",
      currentPage: 1,
    };
  },
  methods: {
    setProvidedTag(tag) {
      if (tag === this.providedTag) {
        this.providedTag = "";
      } else {
        this.providedTag = tag;
      }
    },
    setCurrentPage(page) {
      this.currentPage = page;
    }
  },
  computed: {
    totalPages() {
      return Math.ceil((this.showedProjects.length) / 8)
    },
    mockProjects() {
      const mock = [];
      let j = 0;
      for (let i = 0; i < 4; i++) {
        this.projects.forEach(project => {
          mock.push({
            ...project,
            id: j++,
          })
        })
      }
      return mock;
    },
    showedProjects() {
      if (!this.providedTag) {
        return this.mockProjects;
      }
      return this.mockProjects.filter(project => project.tags.includes(this.providedTag));
    },
    renderedProjects() {
      return this.showedProjects.slice((this.currentPage - 1) * 8, this.currentPage * 8);
    }
  },
  components: { PaginationButtons, ProjectsList, ProjectTags, PageHeader }
};
</script>

<template>
  <div class="project">
    <section class="top__blog top__project">
      <div class="wrapper__blog">
        <h1 class=" heading heading__blog">Our Project</h1>
        <p class="breadcrumbs__blog">Home / Project</p>
      </div>
    </section>
    <div class="project__container">
      <ProjectTags :tags="tags" :action="setProvidedTag" :provided-tag="providedTag" />
      <div class="project__list">
        <ProjectsList :projects="renderedProjects" />
      </div>
      <PaginationButtons :total="totalPages" :current="currentPage" :action="setCurrentPage" />
    </div>
  </div>
</template>

<style>
.top__project {
  background-image: url(../assets/img/top__project.jpg);
}
</style>
