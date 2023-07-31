<script setup>
const props = defineProps({ data: { type: Object, default: null } });
const PositionStyle = computed(() => {
  return props.data.position || "bottom";
});

const getImageUrl = (id) => {
  return new URL(`../assets/img/img0${id}.jpg`, import.meta.url).href;
};
</script>
<template>
  <div class="g-container">
    <section
      class="new-header"
      :style="{
        backgroundImage: `url(${getImageUrl(props.data.image)})`,
        backgroundPosition: props.data.position
          ? props.data.position
          : 'bottom',
      }"
    >
      <div class="new-describe">
        <h3 class="new-title">{{ props.data.title }}</h3>
      </div>
    </section>
    <slot name="main"></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
.g-container {
  grid-template-rows: 60vh max-content;
  @media only screen and (max-width: $bp-medium) {
    grid-template-rows: 50vh max-content;
  }
  @media only screen and (max-width: $bp-small) {
    grid-template-rows: 40vh max-content;
  }
}
</style>
