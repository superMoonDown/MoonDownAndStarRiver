<script setup>
import { ref, reactive } from "vue";
import Card from "../../components/card.vue";
import headerMobile from '../headerMobile.vue';
</script>
<template>
  <headerMobile/>

  <main class="main4 p-lr-250" id="a1">
    <section>
      <div class="article-title text-center" style="padding-top: 20px">{{ $t('hardwareModule') }}</div>
    </section>
    <section>
      <img src="../../assets/y1.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('laptopsModule') }}</div>
     <p>{{ $t('laptopsInfo') }}</p>
    </section>
  </main>

  <main class="main5 p-lr-250" id="a2">
    <section>
      <img src="../../assets/y2.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('posModule') }}</div>
     <p>{{ $t('posInfo') }}</p>
    </section>
  </main>

  <main class="main4 p-lr-250" id="a3">
    <section>
      <img src="../../assets/y3.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('theDeviceOnVehicleModule') }}</div>
     <p>{{ $t('theDeviceOnVehicleInfo') }}</p>
    </section>
  </main>

  <main class="main5 p-lr-250" id="a4">
    <section>
      <img src="../../assets/y4.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('intelligentDevicesModule') }}</div>
     <p>{{ $t('intelligentDevicesInfo') }}</p>
    </section>
  </main>
</template>
<style scoped>
*:not(.logos):not(ul li) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main {
  padding: 0 10px;
}

img:not(.logo):not(.card-img) {
   margin: 20px 0;
}

img:not(.logo) {
  width: 255px;
  height: 152px;
  border-radius: 4px;
}

.main1 {
  background: url(../../assets/head_bg.jpg) center center;
  background-size: cover;
}

.article-title {
  font-size: 20px;
  font-weight: 500;
}

.article-title-1 {
    font-size: 18px;
font-weight: 400;
}

.white {
  color: white;
}

.main2 {
  padding: 10px 0;
}

.main4 {
  background: rgba(233, 243, 248, 1);
}

.main5 {
  background: rgba(244, 248, 250, 1);
}

.card {
    width: 264px;
height: 205px;
}

section {
  width: 222px;
}

ul {
  display: flex;
  align-items: flex-start !important;
  width: 100%;
  padding: 0;
}
</style>