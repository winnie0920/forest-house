<script setup>
const navbarColor = ref(false);
const checkNavBox = ref(false);
const SlideScroll = () => {
  navbarColor.value = window.scrollY !== 0;
};
const navbarList = reactive({
  list: [
    { id: "home", name: "館別介紹" },
    { id: "introduce", name: "館別特色" },
    { id: "information", name: "聯絡資訊" },
    { id: 4, name: "活動資訊" },
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
  checkNavBox.value = false;
};
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

watch(checkNavBox, (n) => {
  if (n) {
    checkNavBox.value = true;
  } else {
    checkNavBox.value = false;
  }
});

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
    <div
      class="navbar_inner"
      :class="{ scrolling: navbarColor, checkNav: checkNavBox }"
    >
      <div class="navbar_container">
        <div class="navbar-logo" @click="scrollTop()">
          <p class="navbar-logo_ch">森林小屋</p>
          <p class="navbar-logo_en">Forest cabin</p>
        </div>
        <input
          v-model="checkNavBox"
          type="checkbox"
          class="navbar-checkbox"
          id="nav-toggle"
        />
        <label for="nav-toggle" class="navbar-open"
          ><span class="icon-open">&nbsp;</span></label
        >
        <div class="navbar-background">
          <label for="nav-toggle" class="navbar-close">
            <span class="icon-close">&nbsp;</span>
          </label>
        </div>

        <nav class="navbar-nav">
          <ul class="navbar-list">
            <li
              class="navbar-list_title"
              v-for="l in navbarList.list"
              :key="l.id"
            >
              <div>
                <span
                  class="navbar-item"
                  @click="scrollToSection(l.id, l.path)"
                >
                  {{ l.name }}
                </span>
              </div>
            </li>
          </ul>
        </nav>
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
    font-size: $font-p;
    color: $theme-white-color;
    @media only screen and (max-width: $bp-medium) {
      font-size: $font-p-small;
    }
  }
  &_inner {
    position: relative;
    transition: all 0.5s;
    padding: 0.6rem 1.2rem;
    @media only screen and (max-width: $bp-large) {
      padding: 0;
    }
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
  }
  &_container {
    display: flex;
    align-items: end;
    list-style: none;
    position: relative;
    z-index: 20;
  }
  &-logo {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    @media only screen and (max-width: $bp-large) {
      padding: 0.6rem 1.2rem;
    }

    &_ch {
      font-size: 1.7rem;
      font-weight: $font-weight-normal;
      @media only screen and (max-width: $bp-medium) {
        font-size: 1.5rem;
      }
    }
    &_en {
      font-weight: $font-weight-normal;
      font-size: $font-p-small;
      text-transform: uppercase;
      @media only screen and (max-width: $bp-medium) {
        font-size: 0.6rem;
      }
    }
  }
  &-nav {
    @media only screen and (max-width: $bp-large) {
      position: fixed;
      opacity: 1;
      width: 100%;
      top: 50%;
      right: 0;
      z-index: 150;
    }
  }
  &-checkbox {
    display: none;
  }
  &-list {
    display: flex;
    align-items: center;
    list-style: none;
    @media only screen and (max-width: $bp-large) {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      flex-direction: column;
      transform: translate(50%, -50%);
      transition: all 0.8s ease-in-out;
    }
    &_title {
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 2rem;
      }
      @media only screen and (max-width: $bp-large) {
        position: relative;
        font-size: 2rem;
        font-weight: 500;
        margin: 1rem;
        color: $theme-darker-gray;
        &::after {
          content: "";
          position: absolute;
          right: 50%;
          left: 50%;
          bottom: -5px;
          border-bottom: 0.1rem solid $theme-darker-gray;
          transition: 0.3s;
        }
        &:hover::after {
          right: 0%;
          left: 0%;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
  &-background {
    display: none;
    @media only screen and (max-width: $bp-large) {
      display: block;
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      transform: translateX(100%);
      background-color: $theme-white-color;
      z-index: 100;
      transition: all 0.8s ease-in-out;
    }
  }
  &-open {
    display: none;
    @media only screen and (max-width: $bp-large) {
      cursor: pointer;
      display: block;
      height: 4.5rem;
      width: 6.5rem;
      position: fixed;
      top: 0;
      right: 0.5rem;
      z-index: 100;
      background-color: transparent;
      text-align: center;
    }
  }
  &-close {
    @media only screen and (max-width: $bp-large) {
      cursor: pointer;
      height: 4.5rem;
      width: 6.5rem;
      position: fixed;
      top: 0;
      right: 0.5rem;
      z-index: 200;
      background-color: transparent;
      text-align: center;
    }
  }
  &-item {
    position: relative;
    transition: all 0.4s;
    &::before {
      opacity: 0;
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform-origin: bottom right;
      background-color: $theme-white-color;
      transition: 0.4s;
    }
    &:hover {
      &::before {
        opacity: 1;
        transition: 0.4s;
        transform-origin: bottom left;
        transform: translateX(-50%) scaleX(1);
      }
    }
  }
}
.icon-open {
  display: none;
  @media only screen and (max-width: $bp-large) {
    position: relative;
    margin-top: 2.5rem;
    &,
    &::after,
    &::before {
      width: 3rem;
      height: 2px;
      background-color: $theme-white-color;
      display: inline-block;
    }
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
    }
    &::after {
      top: 1rem;
    }
    &::before {
      top: -1rem;
    }
  }
}
.icon-close {
  position: relative;
  margin-top: 2.5rem;
  top: 50%;
  right: 0%;
  &::after,
  &::before {
    content: "";
    width: 3rem;
    height: 2px;
    background-color: $theme-darker-gray;
    display: inline-block;
    position: absolute;
    transition: 0.8s cubic-bezier(0.25, 0.6, 0.36, 1);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover {
    &::after {
      transform: translate(-50%, -50%) rotate(225deg);
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-225deg);
    }
  }
}
.checkNav {
  .navbar-background {
    @media only screen and (max-width: $bp-large) {
      transform: translateX(-0%);
    }
  }
  .navbar-list {
    @media only screen and (max-width: $bp-large) {
      transform: translate(-50%, -50%);
    }
  }
  .navbar-item {
    &::before {
      display: none;
    }
  }
}

.scrolling {
  color: $theme-darker-gray;
  &:before {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgb(255, 255, 255, 50%);
    transform: translateY(0%);
  }
  .navbar-list_title a {
    color: $theme-darker-gray;
  }
  .icon-open {
    &,
    &::after,
    &::before {
      background-color: $theme-darker-gray;
    }
  }
  .navbar-item {
    &::before {
      background-color: $theme-darker-gray;
      @media only screen and (max-width: $bp-large) {
        display: none;
      }
    }
  }
}
</style>
