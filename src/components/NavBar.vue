<script setup>
const navbarColor = ref(false);
const SlideScroll = () => {
  navbarColor.value = window.scrollY !== 0;
};
const navbarList = reactive({
  list: [
    { id: "home", name: "館別介紹" },
    { id: "introduce", name: "館別特色" },
    { id: 3, name: "活動資訊" },
    { id: 4, name: "聯絡資訊" },
    { id: 5, name: "立即訂房" },
  ],
});

const scrollToSection = (scroll, path) => {
  if (path) {
    router.push({ name: path });
  } else {
    const element = document.getElementById(scroll);
    if (element) {
      //這裡設置自定義滾動行為
      //behavior屬性用於指定滾動的行為類型，smooth指為平滑的
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", SlideScroll);
  SlideScroll();
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", SlideScroll);
});
</script>

<template>
  <div class="navbar_header">
    <div class="navbar_inner" :class="{ scrolling: navbarColor }">
      <div class="navbar_container">
        <div class="navbar-logo">
          <p class="navbar-logo_ch">森林小屋</p>
          <p class="navbar-logo_en">Forest cabin</p>
        </div>

        <ul class="navbar-list">
          <li
            class="navbar-list_title"
            v-for="l in navbarList.list"
            :key="l.id"
          >
            <div>
              <span @click="scrollToSection(l.id, l.path)">
                {{ l.name }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
.navbar {
  &_header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    font-size: 1.2rem;
    color: $theme-white-color;
  }
  &_inner {
    position: relative;
    transition: all 0.5s;
    padding: 0.6rem 1.2rem;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      transform: translateY(-100%);
      transition: all 0.5s;
    }
    &.scrolling {
      color: $theme-darker-gray;
      &:before {
        backdrop-filter: blur(10px);
        background-color: rgb(255, 255, 255, 50%);
        transform: translateY(0%);
      }
      .navbar-list_title a {
        color: $theme-darker-gray;
      }
    }
  }
  &_container {
    display: flex;
    align-items: center;
    list-style: none;
    position: relative;
    z-index: 20;
  }
  &-logo {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_ch {
      font-size: 1.7rem;
      font-weight: $font-weight-normal;
    }
    &_en {
      font-weight: $font-weight-normal;
      font-size: $font-p-small;
      text-transform: uppercase;
    }
  }
  &-list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    &_title {
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
}
</style>
