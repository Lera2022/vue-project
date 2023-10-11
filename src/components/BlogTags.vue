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

<style scoped lang="scss"></style>
