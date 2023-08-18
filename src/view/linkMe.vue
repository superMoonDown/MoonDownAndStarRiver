<script setup>
import { ref } from "vue";
let activeBtn = ref(0);
import { useWindowSizeStore } from "../store/size";
const store = useWindowSizeStore();
import headerMobile from "./headerMobile.vue";
</script>
<template>
  <div v-if="store.width == 2">
    <main
      class="main3 d-center"
      id="r2"
      style="position: sticky;top: 85px;background: rgba(244, 248, 250, 1);"
    >
      <section class="d-center-column">
        <div class="article-title">{{ $t('linkMeModule') }}</div>
        <div class="d-flex sub-menu">
          <div
            @click="goAnchor('#a1', 0)"
            :class="activeBtn == 0 ? 'active-btn' : ''"
          >{{ $t('linkMethodModule') }}</div>
        </div>
      </section>
    </main>
    <v-row
      class="ma-0"
      style="border-bottom: 1px solid rgba(223, 223, 223, 1);width: 70%;margin: auto !important;"
    >
      <v-col cols="4">
        <div>{{ $t("linkCityModule") }}</div>
        <div>{{ $t("linkAddrModule") }}</div>
      </v-col>
      <v-col cols="4">
        <div>{{ $t("linkTelModule") }}</div>
        <div>{{ $t("linkTelWorkTimeModule") }}</div>
      </v-col>
      <v-col cols="4">{{ $t("linkEmailModule") }}</v-col>
    </v-row>
    <v-row
      class="ma-0"
      style="border-bottom: 1px solid rgba(223, 223, 223, 1);width: 70%;margin: auto !important;"
    >
      <v-col cols="4">
        <div>{{ $t("linkCityModule") }}</div>
        <div>{{ $t("linkAddrModule") }}</div>
      </v-col>
      <v-col cols="4">
        <div>{{ $t("linkTelModule") }}</div>
        <div>{{ $t("linkTelWorkTimeModule") }}</div>
      </v-col>
      <v-col cols="4">{{ $t("linkEmailModule") }}</v-col>
    </v-row>
    <v-row
      class="ma-0"
      style="border-bottom: 1px solid rgba(223, 223, 223, 1);width: 70%;margin: auto !important;"
    >
      <v-col cols="4">
        <div>{{ $t("linkCityModule") }}</div>
        <div>{{ $t("linkAddrModule") }}</div>
      </v-col>
      <v-col cols="4">
        <div>{{ $t("linkTelModule") }}</div>
        <div>{{ $t("linkTelWorkTimeModule") }}</div>
      </v-col>
      <v-col cols="4">{{ $t("linkEmailModule") }}</v-col>
    </v-row>
    <v-row
      class="ma-0"
      style="border-bottom: 1px solid rgba(223, 223, 223, 1);width: 70%;margin: auto !important;"
    >
      <v-col cols="4">
        <div>{{ $t("linkCityModule") }}</div>
        <div>{{ $t("linkAddrModule") }}</div>
      </v-col>
      <v-col cols="4">
        <div>{{ $t("linkTelModule") }}</div>
        <div>{{ $t("linkTelWorkTimeModule") }}</div>
      </v-col>
      <v-col cols="4">{{ $t("linkEmailModule") }}</v-col>
    </v-row>
  </div>
  <div v-else>
    <headerMobile />

    <main class="main4 p-lr-250" id="a1">
      <section>
        <div class="article-title text-center" style="padding-top: 20px">{{ $t('linkMeModule') }}</div>
      </section>
    </main>
    <v-row
      v-for="item of items"
      class="ma-0"
      style="border-bottom: 1px solid rgba(223, 223, 223, 1);width: 70%;margin: auto !important;"
    >
      <v-col cols="12">
        <div>{{ item.city }}</div>
        <div>{{ item.addr }}</div>
      </v-col>
      <v-col cols="12">
        <div>{{ item.tel }}</div>
        <div>{{ item.telWorkTime }}</div>
      </v-col>
      <v-col cols="12">{{ item.email }}</v-col>
    </v-row>
  </div>
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

.article-title {
  font-size: 32px;
  font-weight: 700;
}

.sub-menu div {
  padding: 8px 16px;
  color: rgba(107, 114, 130, 1);
}

.sub-menu div:hover {
  color: #6bb843;
}
</style>