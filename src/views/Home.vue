<script setup>
const showWeb = reactive({
  middle: false,
  feature: false,
  room: false,
  image: false,
  activity: false,
});
const middleRef = ref(null);
const featureRef = ref(null);
const roomRef = ref(null);
const imageRef = ref(null);
const activityRef = ref(null);

const homeContent = reactive({
  middle: [
    {
      h3: [
        { style: "margin-bottom:0rem;", text: "旅行是種滌洗" },
        { text: "也是一種探索" },
      ],
      p: [
        "去旅行每個人都有自己的定義，不願被困在籠中，<br/>迷戀在路上的感覺，遠方有著讓人難以抵擋的誘惑，所以，我們旅行。<br/>不去旅行的藉口更是不同，沒有多餘的精力和時間，<br/>旅行的費用不足林林總總。<br/>旅行也是不斷學習的過程，讓自己活得更自由",
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
      style: "true",
    },
  ],
  rooms: [
    {
      id: 1,
      h3: "二樓日式塌塌米四人房",
      p: "適合情侶朋友，也很適合親子同遊",
      li: ["日式", "親子"],
    },
    {
      id: 2,
      h3: "標準雙人房",
      p: "每房皆有陽台，此房型無浴缸",
      li: ["雙人", "現代"],
    },
    {
      id: 3,
      h3: "精緻雙人房",
      p: "每房皆有陽台，此房型有浴缸",
      li: ["雙人", "現代"],
    },
    {
      id: 4,
      h3: "海景VIP雙人房",
      p: "每房皆有陽台，此房型有浴缸",
      li: ["雙人", "現代"],
    },
    {
      id: 5,
      h3: "森林選香",
      p: "精選香氛備品，讓沐浴成為一種味道的旅行",
      li: ["芳香"],
    },
    {
      id: 6,
      h3: "森林餐廳",
      p: "享用朝食或晚宴，都有截然不同的恬靜",
      li: ["朝食", "晚宴"],
    },
  ],
  activity: [
    {
      id: 1,
      th: "聯繫我們",
      td: "森林小屋",
    },
    {
      id: 2,
      th: "訂房專線",
      td: "+886-87965032",
      a: "tel:+886-87965032",
    },
    {
      id: 3,
      th: "客服信箱",
      td: "service@gmail.com",
      a: "service@gmail.com",
    },
    {
      id: 4,
      th: "服務時間",
      td: "09:30~12:00 / 13:00~18:30",
    },
    {
      id: 5,
      th: "住宿位置",
      td: "新北市蘆洲區民族路1111號",
    },
  ],
});
const featureStyle = (f) => {
  if (f.style) {
    return {
      gridRow: `${f.id + 1} / ${f.id + 2}`,
      paddingBottom: "3rem",
    };
  } else {
    return {
      gridRow: `${f.id + 1} / ${f.id + 2}`,
    };
  }
};

const useScroll = () => {
  //使用 window.scrollY 可以直接獲取到滾動條的垂直滾動距離，等於文檔顶部的滾動距離。
  //但在舊版有些不支援,最好搭配下面兩項;
  const scrollTop = window.scrollY;

  function ElementScroll(ref, show, number) {
    const refValue = unref(ref);
    if (refValue && scrollTop >= refValue.offsetTop - number) {
      //offsetTop是指相對於父元素的距離
      showWeb[show] = true;
    }
  }
  ElementScroll(middleRef, "middle", 300);
  ElementScroll(featureRef, "feature", 200);
  ElementScroll(roomRef, "room", 150);
  ElementScroll(imageRef, "image", 200);
  ElementScroll(activityRef, "activity", 300);
};

const getImageUrl = (id) => {
  return new URL(`../assets/img/introduce0${id}.jpg`, import.meta.url).href;
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
        <p class="middle-p" v-html="m.p"></p>
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
        :style="featureStyle(f)"
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
    </section>
    <section :class="{ room: true, webOpacity: showWeb.room }" ref="roomRef">
      <div :style="r.style" :key="r.id" v-for="r in homeContent.rooms">
        <a href="#" class="room-card">
          <div class="room-img">
            <img :src="getImageUrl(r.id)" />
          </div>
          <div class="room-text">
            <h4>{{ r.h3 }}</h4>
            <p>{{ r.p }}</p>
            <ul>
              <li v-for="i in r.li">#{{ i }}</li>
            </ul>
          </div>
        </a>
      </div>
      <div class="single-view">
        <div class="single-btn">
          <a href="" class="single-a"> View All </a>
        </div>
      </div>
    </section>
    <section
      :class="{ image: true, webOpacity: showWeb.image }"
      ref="imageRef"
    ></section>
    <section
      :class="{ activity: true, webOpacity: showWeb.activity }"
      ref="activityRef"
      id="information"
    >
      <div class="activity-top">
        <h3 class="">聯絡資訊</h3>
        <p class="">Hotel Features</p>
      </div>
      <div class="activity-middle">
        <div class="activity-middle-left">
          <div class="activity-middle-text">
            <h4>森林靜謐之旅</h4>
            <h4>值得你期待的森林小屋</h4>
          </div>
        </div>
        <div class="activity-middle-right">
          <p>
            我們的迷人森林小屋期待著您的光臨。來這裡，讓自己與自然融為一體，感受大自然的魅力，回歸純真的美好。同時也注重保持原始的自然氛圍，讓您在這片寧靜中感受到最純粹的愜意。
          </p>
        </div>
        <div class="activity-middle-left">
          <div class="activity-middle-img"></div>
        </div>
        <div class="activity-middle-right">
          <table>
            <tr v-for="t in homeContent.activity" :key="t.id">
              <th>{{ t.th }}</th>
              <td v-if="t.a">
                <a :href="t.a">{{ t.td }}</a>
              </td>
              <td v-else="t.a">
                {{ t.td }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/css/_variable.scss";
</style>
