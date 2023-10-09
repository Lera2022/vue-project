// import HomePage from "@pages/HomePage.vue";
// import {createRouter, createWebHistory} from "vue-router";
// import ProjectPage from "@pages/ProjectPage.vue";
// import ProjectDetailsPage from "@pages/ProjectDetailsPage.vue";
// import BlogPage from "@pages/BlogPage.vue";
// import BlogDetailsPage from "@pages/BlogDetailsPage.vue";
// import NotFoundPage from "@pages/NotFoundPage.vue";

// const routes = [
//   {path: "", component: HomePage},
//   {path: "/", component: HomePage},
//   {path: "/home", redirect: "/"},
//   {path: "/index", redirect: "/"},
//   {path: "/:pathMatch(.*)*", component: NotFoundPage},
//   {path: "/project", component: ProjectPage},
//   {path: "/project/:projectId", component: ProjectDetailsPage},
//   {path: "/blog", component: BlogPage,},
//   {path: "/blog/:blogId", component: BlogDetailsPage},
// ];

// export const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// import Vue from 'vue'
// import Router from 'vue-router'
// import DashBoard from '@/pages/DashBoard.vue'
// import AboutContent from '@/pages/AboutContent.vue'
// import NotFound from '@/pages/NotFound.vue'
import Vue from 'vue'
import Router from 'vue-router'
import BlogDetailsPage from '../pages/BlogDetailsPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import HomePage from '../pages/HomePage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import ProjectDetailsPage from '../pages/ProjectDetailsPage.vue'
import ProjectPage from '../pages/ProjectPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: "", component: HomePage },
        { path: "/", component: HomePage },
        { path: "/home", redirect: "/" },
        { path: "/index", redirect: "/" },
        { path: "/:pathMatch(.*)*", component: NotFoundPage },
        { path: "/project", component: ProjectPage },
        { path: "/project/:projectId", component: ProjectDetailsPage },
        { path: "/blog", component: BlogPage, },
        { path: "/blog/:blogId", component: BlogDetailsPage },
    ]
})