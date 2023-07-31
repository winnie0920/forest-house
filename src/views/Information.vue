<script setup>
const data = reactive({
  image: "4",
  title: "活動資訊",
});
const informationData = reactive([
  { id: 1, p: "媒體報導" },
  { id: 2, p: "展覽" },
  { id: 3, p: "公告" },
]);

const getImageUrl = (id) => {
  return new URL(`../assets/img/information0${id}.jpg`, import.meta.url).href;
};
</script>
<template>
  <NewPage :data="data">
    <template #main>
      <div class="new-container">
        <div class="new-card" :key="i.id" v-for="i in informationData">
          <a href="#">
            <div class="new-img">
              <img :src="getImageUrl(i.id)" />
            </div>
            <p>{{ i.p }}</p>
          </a>
        </div>
      </div>
    </template>
  </NewPage>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
.new-img {
  height: 10rem;
  @media only screen and (max-width: $bp-largest) {
    height: 15rem;
  }
}
</style>
