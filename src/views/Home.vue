<script setup>
const showWeb = reactive({
  middle: false,
  feature: false,
});
const middleRef = ref(null);
const featureRef = ref(null);
const homeContent = reactive({
  middle: [
    {
      h3: [
        { style: "margin-bottom:0rem;", text: "旅行是種滌洗" },
        { text: "也是一種探索" },
      ],
      p: [
        "去旅行每個人都有自己的定義，不願被困在籠中，",
        "迷戀在路上的感覺，遠方有著讓人難以抵擋的誘惑，所以，我們旅行。",
        "不去旅行的藉口更是不同，沒有多餘的精力和時間，",
        "旅行的費用不足林林總總。",
        "旅行也是不斷學習的過程，讓自己活得更自由",
      ],
    },
  ],
  feature: [
    {
      id: 1,
      h3: "住宿環境",
      p: " 一棟具有電梯設備且全新的合法民宿，潔淨清幽的住宿品質，適合各個年齡層入住，在溫馨舒適的客廳與客房之中，心情隨咖啡的香氣起舞。",
      number: "01",
      title: "Environment",
      icon: ["fas", "house"],
    },
    {
      id: 2,
      h3: "住宿環境",
      p: " 一棟具有電梯設備且全新的合法民宿，潔淨清幽的住宿品質，適合各個年齡層入住，在溫馨舒適的客廳與客房之中，心情隨咖啡的香氣起舞。",
      number: "02",
      title: "Environment",
      icon: ["fas", "house"],
    },
    {
      id: 3,
      h3: "住宿環境",
      p: " 一棟具有電梯設備且全新的合法民宿，潔淨清幽的住宿品質，適合各個年齡層入住，在溫馨舒適的客廳與客房之中，心情隨咖啡的香氣起舞。",
      number: "03",
      title: "Environment",
      icon: ["fas", "house"],
    },
  ],
});
const useScroll = () => {
  //使用 window.scrollY 可以直接獲取到滾動條的垂直滾動距離，等於文檔顶部的滾動距離。
  //但在舊版有些不支援,最好搭配下面兩項;
  const scrollTop = window.scrollY;

  function ElementScroll(ref, show, number) {
    if (scrollTop >= ref.value.offsetTop - number) {
      //offsetTop是指相對於父元素的距離
      showWeb[show] = true;
    }
  }
  ElementScroll(middleRef, "middle", 100);
  ElementScroll(featureRef, "feature", 200);
};
onMounted(() => {
  window.addEventListener("scroll", useScroll);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", useScroll);
});
</script>

<template>
  <div class="g-container">
    <section class="header" id="home">
      <div class="header-content">
        <div class="header-describe">
          <h2 class="header-title">在森林小屋，享受自然沐浴。</h2>
          <div class="header-title02">
            <span class="header-p">From now on, in this hotel</span>
          </div>
        </div>
      </div>
    </section>
    <section
      :class="{ middle: true, webOpacity: showWeb.middle }"
      ref="middleRef"
    >
      <div class="middle-container" :key="m.id" v-for="m in homeContent.middle">
        <h3 class="middle-h3" v-for="h in m.h3" :style="h.style">
          {{ h.text }}
        </h3>
        <p class="middle-p" v-for="p in m.p">{{ p }}</p>
      </div>
      <div class="middle-img"></div>
    </section>
    <section
      :class="{ feature: true, webOpacity: showWeb.feature }"
      id="introduce"
      ref="featureRef"
    >
      <div class="feature-top">
        <h3 class="">館別特色</h3>
        <p class="">Hotel Features</p>
      </div>
      <div
        class="feature-middle"
        :style="{
          gridRow: `${f.id + 1} / ${f.id + 2}`,
        }"
        :key="f.id"
        v-for="f in homeContent.feature"
      >
        <div class="feature-circle">
          <span class="feature-circle-number">{{ f.number }}</span>
          <font-awesome-icon class="feature-icon" :icon="f.icon" />
          <span class="feature-circle-title">{{ f.title }}</span>
        </div>
        <div class="feature-item">
          <h3>{{ f.h3 }}</h3>
          <p>
            {{ f.p }}
          </p>
        </div>
      </div>
      <div class="feature-floor">
        <img src="../assets/img/img03.jpg" alt="" class="feature-floor-img" />
      </div>
      <div class="room-content">
        <div class="room-card">
          <a href="">
            <img src="" alt="" />
            <div class="room-text">
              <h3></h3>
              <p></p>
              <ul>
                <li></li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
</style>
