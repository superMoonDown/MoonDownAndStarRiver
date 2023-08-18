<script setup>
import { ref, reactive } from "vue";
import Card from "../components/card.vue";
import headerMobile from './headerMobile.vue';
</script>
<template>
  <headerMobile/>
  <main class="main2" id="r2">
    <div style="padding-bottom: 20px">
      <div class="article-title text-center" style="padding-bottom: 20px">{{ $t('businessType') }}</div>
      <div>{{ $t('businessTypeInfo') }}</div>
    </div>
    <div style="width: 100%">
      <card>
        <img class="card-img" src="../assets/1.png" />
        <p>{{ $t('businessType1') }}</p>
      </card>
      <card>
        <img class="card-img" src="../assets/2.png" />
        <p>{{ $t('businessType2') }}</p>
      </card>
    </div>
  </main>

  <main class="main4 p-lr-250" id="a1">
    <section>
      <div class="article-title" style="padding-top: 20px">{{ $t('moduleIntroduction') }}</div>
    </section>
    <section>
      <img src="../assets/3.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('lineManageModule') }}</div>
      <p>{{ $t('lineInfo') }}</p>
      <ul>
        <li>{{ $t('lineInfo1') }}</li>
        <li>{{ $t('lineInfo2') }}</li>
        <li>{{ $t('lineInfo3') }}</li>
      </ul>
    </section>
  </main>

  <main class="main5 p-lr-250" id="a2">
    <section>
      <img src="../assets/4.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('carManageModule') }}</div>
      <p>{{ $t('carInfo') }}</p>
      <ul>
        <li>{{ $t('carInfo1') }}</li>
        <li>{{ $t('carInfo2') }}</li>
      </ul>
    </section>
  </main>

  <main class="main4 p-lr-250" id="a3">
    <section>
      <img src="../assets/5.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('carControlModule') }}</div>
      <p>{{ $t('carControlInfo') }}</p>
      <ul>
        <li>{{ $t('carControlInfo1') }}</li>
        <li>{{ $t('carControlInfo2') }}</li>
      </ul>
    </section>
  </main>

  <main class="main5 p-lr-250" id="a4">
    <section>
      <img src="../assets/6.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('staffManageModule') }}</div>
      <ul>
        <li>{{ $t('staffInfo1') }}</li>
        <li>{{ $t('staffInfo2') }}</li>
        <li>{{ $t('staffInfo3') }}</li>
      </ul>
    </section>
  </main>

  <main class="main4 p-lr-250" id="a5">
    <section>
      <img src="../assets/7.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('stationSaleTicketModule') }}</div>
      <p>{{ $t('stationSaleInfo') }}</p>
      <ul>
        <li>{{ $t('stationSaleInfo1') }}</li>
        <li>{{ $t('stationSaleInfo2') }}</li>
        <li>{{ $t('stationSaleInfo3') }}</li>
      </ul>
    </section>
  </main>

  <main class="main5 p-lr-250" id="a6">
    <section>
      <img src="../assets/8.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('webSaleTicketModule') }}</div>
      <p>{{ $t('webSaleInfo') }}</p>
      <ul>
        <li>{{ $t('webSaleInfo1') }}</li>
        <li>{{ $t('webSaleInfo2') }}</li>
      </ul>
    </section>
  </main>

  <main class="main4 p-lr-250" id="a7">
    <section>
      <img src="../assets/9.png" />
    </section>
    <section>
      <div class="article-title-1">{{ $t('financialManageModule') }}</div>
      <p>{{ $t('financialInfo') }}</p>
      <ul>
        <li>{{ $t('financialInfo1') }}</li>
        <li>{{ $t('financialInfo2') }}</li>
      </ul>
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
  background: url(../assets/head_bg.jpg) center center;
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

.main1 section,
.main4 section,
.main5 section {
  padding: 0 50px;
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