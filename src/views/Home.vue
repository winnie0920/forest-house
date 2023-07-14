<script setup>
const showWeb = reactive({
  middle: false,
  feature: false,
});
const middleRef = ref(null);
const featureRef = ref(null);
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
  ElementScroll(middleRef, "middle", 150);
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
      <div class="middle-container">
        <h3 class="middle-h3">
          旅行是種滌洗 <br />
          也是一種探索
        </h3>
        <p class="middle-p">
          去旅行每個人都有自己的定義，不願被困在籠中，<br />
          迷戀在路上的感覺，遠方有著讓人難以抵擋的誘惑，所以，我們旅行。
        </p>
        <p class="middle-p">
          不去旅行的藉口更是不同，沒有多餘的精力和時間，<br />
          旅行的費用不足林林總總。
        </p>
        <p class="middle-p">旅行也是不斷學習的過程，讓自己活得更自由。</p>
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
      <div class="feature-middle">
        <div class="feature-circle">
          <span class="feature-circle-number">01</span>
          <font-awesome-icon class="feature-icon" :icon="['fas', 'house']" />
          <span class="feature-circle-title">Environment</span>
        </div>
        <div class="feature-item">
          <h3>住宿環境</h3>
          <p>
            一棟具有電梯設備且全新的合法民宿，潔淨清幽的住宿品質，適合各個年齡層入住
            在溫馨舒適的客廳與客房之中，心情隨咖啡的香氣起舞。
          </p>
        </div>
        <div class="feature-circle">
          <span class="feature-circle-number">01</span>
          <font-awesome-icon class="feature-icon" :icon="['fas', 'house']" />
          <span class="feature-circle-title">Environment</span>
        </div>
        <div class="feature-item">
          <h3>住宿環境</h3>
          <p>
            一棟具有電梯設備且全新的合法民宿，潔淨清幽的住宿品質，適合各個年齡層入住
            在溫馨舒適的客廳與客房之中，心情隨咖啡的香氣起舞。
          </p>
        </div>
        <div class="feature-circle">
          <span class="feature-circle-number">01</span>
          <font-awesome-icon class="feature-icon" :icon="['fas', 'house']" />
          <span class="feature-circle-title">Environment</span>
        </div>
        <div class="feature-item">
          <h3>住宿環境</h3>
          <p>
            一棟具有電梯設備且全新的合法民宿，潔淨清幽的住宿品質，適合各個年齡層入住
          </p>
        </div>
      </div>
      <div class="feature-floor">
        <img src="../assets/img/img03.jpg" alt="" class="feature-floor-img" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
</style>
