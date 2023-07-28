<script setup>
const cursor = ref(null);
const cursorActive = ref(false);
const floorContent = reactive({
  list: [
    {
      id: 1,
      text: "Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．",
    },
    {
      id: 2,
      text: "Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．",
    },
    {
      id: 3,
      text: "Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．",
    },
    {
      id: 4,
      text: "Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．Contact Us ．",
    },
  ],
  content: [
    {
      h1: "contact",
      h4: "聯絡我們",
      span: "建議使用CHROME、FIREFOX、SAFARI最新版本瀏覽",
      list: [
        {
          id: 1,
          th: "訂房專線",
          td: "+886-87965032",
          a: "tel:+886-87965032",
        },
        {
          id: 2,
          th: "客服信箱",
          td: "service@gmail.com",
          a: "service@gmail.com",
        },
        {
          id: 3,
          th: "服務時間",
          td: "09:30~12:00 / 13:00~18:30",
        },
      ],
      community: [
        {
          id: 1,
          icon: ["fab", "line"],
          p: "官方LINE",
        },
        {
          id: 2,
          icon: ["fab", "facebook-f"],
          p: "森林小屋社群",
        },
      ],
    },
  ],
});
const pos = reactive({ x: 0, y: 0 });
const mouse = reactive({ x: pos.x, y: pos.y });
const speed = 0.8;

//這裡取得滑鼠移動位置
const MouseMove = (event) => {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
};

const curserMouse = () => {
  const dt = 1.0 - Math.pow(1.0 - speed, 0.08); //速度控制
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  cursor.value.style.left = pos.x + "px";
  cursor.value.style.top = pos.y + "px";
  requestAnimationFrame(curserMouse);
};
requestAnimationFrame(curserMouse);

onMounted(() => {
  cursor.value = document.getElementById("cursor");
  document.addEventListener("mousemove", MouseMove);
});
</script>
<template>
  <div
    id="cursor"
    class="floor-cursor"
    :class="{ 'is-active': cursorActive }"
    ref="cursor"
  ></div>
  <div class="g-container">
    <section class="floor">
      <a
        href=""
        class="floor-a"
        @mouseenter="cursorActive = true"
        @mouseleave="cursorActive = false"
      >
        <img class="floor-img" src="../assets/img/floor01.jpg" alt="" />
        <div class="floor-title">
          <div class="floor-title-scroll">
            <p v-for="l in floorContent.list" :key="l.id">{{ l.text }}</p>
          </div>
        </div>
      </a>
    </section>
    <section class="contact" v-for="f in floorContent.content">
      <div class="contact-title">
        <h1>{{ f.h1 }}</h1>
      </div>
      <div class="contact-touch">
        <h4>{{ f.h4 }}</h4>
        <ul>
          <li v-for="l in f.list">
            <span>{{ l.th }}</span>
            <a v-if="l.a" :href="l.a">{{ l.td }}</a>
            <span v-else>{{ l.td }}</span>
          </li>
        </ul>
      </div>
      <div class="contact-community">
        <a href="#" v-for="c in f.community">
          <font-awesome-icon :icon="c.icon" />
          {{ c.p }}
        </a>
      </div>
      <span class="contact-span">{{ f.span }}</span>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
.g-container {
  overflow: hidden;
  grid-template-rows: 60vh 1fr;
  padding-top: $title-padding;
  @media only screen and (max-width: $bp-medium) {
    grid-template-rows: max-content max-content;
  }
  &.is-active {
    cursor: none;
  }
}
.floor {
  grid-column: full-start / full-end;

  @media only screen and (max-width: $bp-largest) {
    padding-top: $title-padding-small;
  }
  @media only screen and (max-width: $bp-medium) {
    padding-top: 0;
  }
  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    @media only screen and (max-width: $bp-medium) {
      height: 25rem;
    }
  }
  &-a {
    position: relative;
  }
  &-cursor {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1000;
    background-color: $theme-white-color;
    transition: transform linear 0.4s, width ease 0.1s, height ease 0.1s;
    opacity: 0.7;
    @media only screen and (max-width: $bp-medium) {
      display: none;
    }
    &::before {
      opacity: 0;
      position: absolute;
      content: "Click";
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: $font-p;
      color: $theme-light-blue;
    }
    &.is-active {
      width: 7rem;
      height: 7rem;
      &::before {
        opacity: 1;
      }
    }
  }
  &-title {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    @media only screen and (max-width: $bp-small) {
      transform: translateY(-30%);
    }
    &-scroll {
      display: flex;
      width: max-content;
      animation: 100s wordsLoop linear infinite;
      p {
        text-align: left;
        white-space: nowrap;
        font-size: $font-icon;
        color: $theme-lighter-blue;
        text-shadow: 0.1rem 0.1rem 0.8rem $theme-gray;
        @media only screen and (max-width: $bp-small) {
          text-shadow: none;
        }
      }
    }
  }
}
.contact {
  padding-top: $title-padding;
  grid-column: col-start / col-end;
  display: grid;
  grid-template-columns: 10% 60% 30%;
  grid-template-rows: repeat(2, max-content);
  grid-column-gap: 3rem;
  @media only screen and (max-width: $bp-medium) {
    grid-template-rows: repeat(2, max-content) 1fr;
    grid-template-columns: 70% 30%;
    grid-column-gap: 0rem;
    padding-top: $title-padding-small;
  }
  @media only screen and (max-width: $bp-small) {
    grid-template-rows: repeat(3, max-content) 1fr;
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
  }
  &-title {
    border-right: 0.05rem solid $theme-gray;
    @media only screen and (max-width: $bp-medium) {
      border-right: none;
    }

    h1 {
      text-transform: uppercase;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
      @media only screen and (max-width: $bp-medium) {
        -webkit-writing-mode: inherit;
        writing-mode: inherit;
      }
    }
  }
  &-touch {
    @media only screen and (max-width: $bp-medium) {
      margin-top: 1rem;
      grid-row: 2/3;
    }
    ul {
      margin: 0;
    }
    h4 {
      font-size: 1.75rem;
      line-height: $line-high;
      margin-bottom: 2rem;
      @media only screen and (max-width: $bp-medium) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
    span {
      display: inline-block;
      font-size: $font-p;
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
      &:first-child {
        padding-right: 2rem;
        @media only screen and (max-width: $bp-medium) {
          padding-right: 1rem;
        }
      }
    }
    a {
      font-size: $font-p;
      color: $theme-darker-gray;
      transition: all 0.5s;
      &:hover {
        color: $theme-dark-gray;
      }
    }
  }
  &-community {
    display: flex;
    justify-content: center;
    @media only screen and (max-width: $bp-medium) {
      margin-top: 1rem;
      grid-row: 2/3;
    }
    @media only screen and (max-width: $bp-small) {
      margin-top: 1rem;
      grid-row: 3/4;
      flex-direction: column;
    }
    a {
      align-items: center;
      display: flex;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
      color: $theme-darker-gray;
      transition: all 0.5s;
      line-height: 2.3;
      @media only screen and (max-width: $bp-small) {
        -webkit-writing-mode: inherit;
        writing-mode: inherit;
      }
      &:hover {
        color: $theme-dark-gray;
      }
    }
    p {
      display: inline-block;
      font-size: $font-p;
    }
    svg {
      display: inline-block;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      @media only screen and (max-width: $bp-small) {
        margin-bottom: 0rem;
        margin-right: 1rem;
        width: 20px;
      }
    }
  }
  &-span {
    margin: 3rem 0;
    grid-column: 1/-1;
    font-size: 0.8rem;
    @media only screen and (max-width: $bp-medium) {
      margin: 1rem 0;
    }
  }
}
</style>
