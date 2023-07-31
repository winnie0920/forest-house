<script setup>
const data = reactive({
  image: "src/assets/img/img05.jpg",
  title: "立即訂房",
  position: "center",
});
const bookingData = reactive([
  {
    h3: "森林民宿",
    content: [
      { id: 1, p: "森林大阪" },
      { id: 2, p: "森林九州" },
      { id: 3, p: "森林北海道" },
    ],
  },
  {
    h3: "另類森林民宿",
    content: [
      { id: 4, p: "秘境花蓮" },
      { id: 5, p: "尋找台東" },
    ],
  },
]);
const getImageUrl = (id) => {
  return new URL(`../assets/img/booking0${id}.jpg`, import.meta.url).href;
};
</script>

<template>
  <NewPage :data="data">
    <template #main>
      <div class="new-container" v-for="b in bookingData">
        <h3>{{ b.h3 }}</h3>
        <div class="new-card" :key="c.id" v-for="c in b.content">
          <a href="#">
            <div class="new-img">
              <img :src="getImageUrl(c.id)" />
            </div>
            <p>{{ c.p }}</p>
          </a>
        </div>
      </div>
    </template>
  </NewPage>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
.new-container {
  width: 100%;
}
</style>
