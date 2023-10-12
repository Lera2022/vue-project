<script>
export default {
  name: "BlogTags",
  props: {
    tags: Array,
    providedTag: String,
  },
  emits: ["provide-tag"]
};
</script>

<template>
  <div class="tags">
    <h3 class="tags__title">Tags</h3>
    <div class="tags__actions">
      <button class="tags__btn" :class="{ active: tag === providedTag }" v-for="tag in tags"
        @click="$emit('provide-tag', tag)">{{ tag }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tags__title {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
  margin-bottom: 24px;
}

.tags__actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

}

.tags__btn {
  padding: 9px 30px;
  border-radius: 10px;
  border: none;
  background: #F4F0EC;

  &:first-child {
    background-color: black;
    color: white;
  }
}
</style>
