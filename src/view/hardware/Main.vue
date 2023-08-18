<script setup>
import Card from "../../components/card.vue";
import MainMobile from './MainMobile.vue';
import { ref, onMounted, onUnmounted } from "vue";
import { useWindowSizeStore } from '../../store/size'
const store = useWindowSizeStore()
let activeBtn = ref(0)
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
  } else {
    activeBtn.value = 4;
  }
};
//页面加载
onMounted(() => {
  goAnchor('#a1', 0)
  window.addEventListener("scroll", onScroll);
});
//页面卸载
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
<template>
  <div v-if="store.width == 2">
    <main class="main3 d-center" id="r2" style="position: sticky;top: 85px;background-color: white;">
      <section class="d-center-column">
        <div class="article-title">{{ $t('hardwareModule') }}</div>
        <div class="d-flex sub-menu">
          <div
            @click="goAnchor('#a1', 0)"
            :class="activeBtn == 0 ? 'active-btn' : ''"
          >{{ $t('laptops') }}</div>
          <div
            @click="goAnchor('#a2', 1)"
            :class="activeBtn == 1 ? 'active-btn' : ''"
          >{{ $t('pos') }}</div>
          <div
            @click="goAnchor('#a3', 2)"
            :class="activeBtn == 2 ? 'active-btn' : ''"
          >{{ $t('theDeviceOnVehicle') }}</div>
          <div
            @click="goAnchor('#a4', 3)"
            :class="activeBtn == 3 ? 'active-btn' : ''"
          >{{ $t('intelligentDevices') }}</div>
        </div>
      </section>
    </main>

    <main class="main4 p-lr-250 d-center scroll-item" id="a1">
      <section>
        <div class="article-title">{{ $t('laptopsModule') }}</div>
       <p>{{ $t('laptopsInfo') }}</p>
      </section>
      <section>
        <img src="../../assets/y1.png" style="width: 400px;height: 308px;" />
      </section>
    </main>

    <main class="main5 p-lr-250 d-center scroll-item" id="a2">
      <section>
        <div class="article-title">{{ $t('posModule') }}</div>
       <p>{{ $t('posInfo') }}</p>
      </section>
      <section>
        <img src="../../assets/y2.png" style="width: 400px;height: 308px;" />
      </section>
    </main>

    <main class="main4 p-lr-250 d-center scroll-item" id="a3">
      <section>
        <div class="article-title">{{ $t('theDeviceOnVehicleModule') }}</div>
       <p>{{ $t('theDeviceOnVehicleInfo') }}</p>
      </section>
      <section>
        <img src="../../assets/y3.png" style="width: 400px;height: 308px;" />
      </section>
    </main>

    <main class="main5 p-lr-250 d-center scroll-item" id="a4">
      <section>
        <div class="article-title">{{ $t('intelligentDevicesModule') }}</div>
       <p>{{ $t('intelligentDevicesInfo') }}</p>
      </section>
      <section>
        <img src="../../assets/y4.png" style="width: 400px;height: 308px;" />
      </section>
    </main>
  </div>
  <MainMobile v-else/>
</template>
<style scoped>
.active-btn {
  color: rgba(64, 104, 207, 1) !important
}
.active-btn::after {
  content: '';
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