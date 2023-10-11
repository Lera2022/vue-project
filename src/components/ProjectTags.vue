<script>
export default {
  name: "ProjectTags",
  props: {
    tags: Array,
    action: Function,
    providedTag: String,
  },
};
</script>

<template>
  <div class="tags">
    <button class="tags__btn" :class="{ active: tag === providedTag }" v-for="tag in tags" @click="action(tag)">{{ tag }}
    </button>
  </div>
</template>

<style lang="scss">
.tags {
  margin: 0 auto;
  width: 880px;
  justify-content: center;
  display: flex;
  gap: 96px;
  border-radius: 18px;
  border: 1px solid #CDA274;

  &__btn {
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
    border: none;
    padding: 26px 0;
  }
}
</style>
