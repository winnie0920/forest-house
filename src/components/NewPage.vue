<script setup>
const props = defineProps({ data: { type: Object, default: null } });
const PositionStyle = computed(() => {
  return props.data.position || "bottom";
});
</script>
<template>
  <div class="g-container">
    <section
      class="new-header"
      :style="{
        backgroundImage: 'url(' + props.data.image + ')',
        backgroundPosition: PositionStyle,
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
