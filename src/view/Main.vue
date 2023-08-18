<script setup>
import Card from "../components/card.vue";
import MainMobile from "./MainMobile.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { useWindowSizeStore } from "../store/size";
const store = useWindowSizeStore();
let activeBtn = ref(0);
//锚点跳转
function goAnchor(selector, index) {
  activeBtn.value = index;
  let anchorElementHeight = document.querySelector(selector).offsetTop;
  let navBar = 85 + 101;
  window.scrollTo({
    top: anchorElementHeight - navBar,
    behavior: "smooth"
  });
}

let showImg = ref(false);
setTimeout(() => {
  showImg.value = true;
}, 10);

function onScroll (e) {
  let scrollItems = document.querySelectorAll(".scroll-item");
  const bodyTop = document.documentElement.scrollTop - 76
  if (bodyTop < scrollItems[0].offsetTop) {
    activeBtn.value = 0;
  }
  else if (scrollItems[0].offsetTop <= bodyTop && bodyTop < scrollItems[1].offsetTop) {
    activeBtn.value = 1;
  }
  else if (scrollItems[1].offsetTop <= bodyTop && bodyTop < scrollItems[2].offsetTop) {
    activeBtn.value = 2;
  }
  else if (scrollItems[2].offsetTop <= bodyTop && bodyTop < scrollItems[3].offsetTop) {
    activeBtn.value = 3;
  }
  else if (scrollItems[3].offsetTop <= bodyTop && bodyTop < scrollItems[4].offsetTop) {
    activeBtn.value = 4;
  }
  else if (scrollItems[4].offsetTop <= bodyTop && bodyTop < scrollItems[5].offsetTop) {
    activeBtn.value = 5;
  }
  else if (scrollItems[5].offsetTop <= bodyTop && bodyTop < scrollItems[6].offsetTop) {
    activeBtn.value = 6;
  } else {
    activeBtn.value = 6;
  }
};
//页面加载
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  window.addEventListener("scroll", onScroll);
});
//页面卸载
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
<template>
  <div v-if="store.width == 2" id="scroll">
    <main class="main1 white p-lr-250 d-center" id="r0">
      <section>
        <div class="article-title">{{ $t('title') }}</div>
        <p>{{ $t('systemIntroduction') }}</p>
      </section>
      <section>
        <div style="width: 400px;height: 308px;"></div>
      </section>
    </main>
    <main class="main2 d-center-column" id="r1">
      <div class="d-center-column" style="padding-bottom: 20px">
        <div class="article-title">{{ $t('businessType') }}</div>
        <div>{{ $t('businessTypeInfo') }}</div>
      </div>
      <div class="d-center-column" style="width: 100%">
        <div class="d-center" style="width: 100%">
          <card>
            <img class="img1" src="../assets/1.png" v-if="showImg" />
            <p class="img-bom-p">{{ $t('businessType1') }}</p>
          </card>
          <card>
            <img class="img1" src="../assets/2.png" v-if="showImg" />
            <p class="img-bom-p">{{ $t('businessType2') }}</p>
          </card>
        </div>
      </div>
    </main>

    <main
      class="main3 d-center"
      id="r2"
      style="position: sticky;top: 85px;background-color: white;"
    >
      <section class="d-center-column">
        <div class="article-title">{{ $t('moduleIntroduction') }}</div>
        <div class="d-flex sub-menu">
          <div
            @click="goAnchor('#a1', 0)"
            :class="activeBtn == 0 ? 'active-btn' : ''"
          >{{ $t('lineManage') }}</div>
          <div
            @click="goAnchor('#a2', 1)"
            :class="activeBtn == 1 ? 'active-btn' : ''"
          >{{ $t('carManage') }}</div>
          <div
            @click="goAnchor('#a3', 2)"
            :class="activeBtn == 2 ? 'active-btn' : ''"
          >{{ $t('carControl') }}</div>
          <div
            @click="goAnchor('#a4', 3)"
            :class="activeBtn == 3 ? 'active-btn' : ''"
          >{{ $t('staffManage') }}</div>
          <div
            @click="goAnchor('#a5', 4)"
            :class="activeBtn == 4 ? 'active-btn' : ''"
          >{{ $t('stationSaleTicket') }}</div>
          <div
            @click="goAnchor('#a6', 5)"
            :class="activeBtn == 5 ? 'active-btn' : ''"
          >{{ $t('webSaleTicket') }}</div>
          <div
            @click="goAnchor('#a7', 6)"
            :class="activeBtn == 6 ? 'active-btn' : ''"
          >{{ $t('financialManage') }}</div>
        </div>
      </section>
    </main>

    <main class="main4 p-lr-250 d-center scroll-item" id="a1">
      <section>
        <div class="article-title">{{ $t('lineManageModule') }}</div>
        <p>{{ $t('lineInfo') }}</p>
        <ul>
          <li>{{ $t('lineInfo1') }}</li>
          <li>{{ $t('lineInfo2') }}</li>
          <li>{{ $t('lineInfo3') }}</li>
        </ul>
      </section>
      <section>
        <img src="../assets/3.png" style="width: 400px;height: 308px;" v-if="showImg" />
      </section>
    </main>

    <main class="main5 p-lr-250 d-center scroll-item" id="a2">
      <section>
        <div class="article-title">{{ $t('carManageModule') }}</div>
        <p>{{ $t('carInfo') }}</p>
        <ul>
          <li>{{ $t('carInfo1') }}</li>
          <li>{{ $t('carInfo2') }}</li>
        </ul>
      </section>
      <section>
        <img src="../assets/4.png" style="width: 400px;height: 308px;" v-if="showImg" />
      </section>
    </main>

    <main class="main4 p-lr-250 d-center scroll-item" id="a3">
      <section>
        <div class="article-title">{{ $t('carControlModule') }}</div>
        <p>{{ $t('carControlInfo') }}</p>
        <ul>
          <li>{{ $t('carControlInfo1') }}</li>
          <li>{{ $t('carControlInfo2') }}</li>
        </ul>
      </section>
      <section>
        <img src="../assets/5.png" style="width: 400px;height: 308px;" v-if="showImg" />
      </section>
    </main>

    <main class="main5 p-lr-250 d-center scroll-item" id="a4">
      <section>
        <div class="article-title">{{ $t('staffManageModule') }}</div>
        <ul>
          <li>{{ $t('staffInfo1') }}</li>
          <li>{{ $t('staffInfo2') }}</li>
          <li>{{ $t('staffInfo3') }}</li>
        </ul>
      </section>
      <section>
        <img src="../assets/6.png" style="width: 400px;height: 308px;" v-if="showImg" />
      </section>
    </main>

    <main class="main4 p-lr-250 d-center scroll-item" id="a5">
      <section>
        <div class="article-title">{{ $t('stationSaleTicketModule') }}</div>
        <p>{{ $t('stationSaleInfo') }}</p>
        <ul>
          <li>{{ $t('stationSaleInfo1') }}</li>
          <li>{{ $t('stationSaleInfo2') }}</li>
          <li>{{ $t('stationSaleInfo3') }}</li>
        </ul>
      </section>
      <section>
        <img src="../assets/7.png" style="width: 400px;height: 308px;" v-if="showImg" />
      </section>
    </main>

    <main class="main5 p-lr-250 d-center scroll-item" id="a6">
      <section>
        <div class="article-title">{{ $t('webSaleTicketModule') }}</div>
        <p>{{ $t('webSaleInfo') }}</p>
        <ul>
          <li>{{ $t('webSaleInfo1') }}</li>
          <li>{{ $t('webSaleInfo2') }}</li>
        </ul>
      </section>
      <section>
        <img src="../assets/8.png" style="width: 400px;height: 308px;" v-if="showImg" />
      </section>
    </main>

    <main class="main4 p-lr-250 d-center scroll-item" id="a7">
      <section>
        <div class="article-title">{{ $t('financialManageModule') }}</div>
        <p>{{ $t('financialInfo') }}</p>
        <ul>
          <li>{{ $t('financialInfo1') }}</li>
          <li>{{ $t('financialInfo2') }}</li>
        </ul>
      </section>
      <section>
        <img src="../assets/9.png" style="width: 400px;height: 308px;" v-if="showImg" />
      </section>
    </main>
  </div>
  <MainMobile v-else />
</template>
<style scoped>
.active-btn {
  color: rgba(64, 104, 207, 1) !important;
}
.active-btn::after {
  content: "";
  border-bottom: 3px solid rgba(64, 104, 207, 1);
  display: block;
  position: relative;
  bottom: -7px;
}

a {
  padding: 0 8px;
  text-decoration: none;
}

a:hover {
  color: #6bb843;
}

.main1 {
  height: 455px;
  background: url(../assets/head_bg_all.png) center center;
  background-size: cover;
}

.article-title {
  font-size: 32px;
  font-weight: 700;
}

.white {
  color: white;
}

.main1 section,
.main4 section,
.main5 section {
  padding: 0px;
  width: 427px;
}

.main2 {
  padding: 60px 0;
}

.img1 {
  width: 540px;
  height: 359px;
}

.img-bom-p {
  padding-left: 16px;
}

.sub-menu div {
  padding: 8px 16px;
  color: rgba(107, 114, 130, 1);
}

.sub-menu div:hover {
  color: #6bb843;
}

.main4,
.main5 {
  height: 420px;
}

.main4 {
  background: rgba(233, 243, 248, 1);
}

.main5 {
  background: rgba(244, 248, 250, 1);
}
</style>