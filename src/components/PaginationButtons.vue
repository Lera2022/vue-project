<script>
export default {
  name: "PaginationButtons",
  props: {
    total: Number,
    current: Number,
    action: Function,
  },
  methods: {
    nextPage() {
      this.action(this.current + 1);
    },
    prevPage() {
      this.action(this.current - 1);
    }
  }
};
</script>

<template>
  <div class="pagination">
    <button class="pagination__btn" v-if="current > 1" @click="prevPage">
      <i class="arrow left"></i>
    </button>
    <button class="pagination__btn" v-for="page in total" @click="action(page)" :disabled="page === current">{{ page > 10
      ?
      page : `0${page}` }}</button>
    <button class="pagination__btn" v-if="current < total" @click="nextPage">
      <i class="arrow right"></i>
    </button>
  </div>
</template>

<style>
.pagination__btn {
  padding: 14px 17px;
  border-radius: 50%;
  border-color: #CDA274;
}
</style>
