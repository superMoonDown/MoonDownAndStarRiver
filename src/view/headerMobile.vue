<script setup>
import { ref, reactive } from "vue";
let drawer = ref(false)
let items = reactive([
    {
      title:$t('introduction'),
      value: '#/',
    },
    {
      title:$t('software'),
      value: '#/software',
    },
    {
      title:$t('hardware'),
      value: '#/hardware',
    },
    {
      title:$t('linkMe'),
      value: '#/linkMe',
    },
    {
      title:$t('down'),
      value: '#/Down',
    },
    {
      title:$t('login'),
      value: 'https://m.busmanage.com',
    },
    {
      title:$t('lang'),
      value: 'select',
    },
  ])
import { useI18n } from "vue-i18n";
const { locale } = useI18n()
import { useLangStore } from "../store/lang";
const storeLang = useLangStore()
let lang = ref(storeLang.lang)
locale.value = lang.value
function changeLang () {
  localStorage.setItem('lang_sale_ticket_website', lang.value)
  locale.value = lang.value
  storeLang.lang = lang.value
  items[5].value = `https://m.busmanage.com/#/login?lang=${lang.value}`
}
</script>
<template>
    <main class="main1 white p-lr-250">
    <header class="d-flex-between logos" style="height: 80px;width: 100%">
      <v-layout>
        <v-app-bar
          temporary
        >
          <a href="#/">
            <img class="logo" src="../assets/logo.png" style="height: 53px" />
          </a>
          <img class="logo" src="../assets/list.webp" style="height: 33px" @click.stop="drawer = !drawer"/>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          location="left"
          temporary
        >
          <v-list
            :items="items"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
            >
              <select v-if="item.value == 'select'" @change="changeLang" v-model="lang">
                <option value="en_GB">English</option>
                <option value="es_ES">Español</option>
                <option value="fr_FR">Français</option>
                <option value="pt_PT">Português</option>
                <option value="zh_CN">简体中文</option>
                <option value="zh_TW">繁体中文</option>
              </select>
              <a v-else :href="item.value" :target="i == 5 ? 'open' : '_self'"><v-list-item-title v-text="item.title"></v-list-item-title></a>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </header>
    <div class="p-lr-250" id="r1">
      <section>
        <div class="article-title text-center">{{$t('title') }}</div>
        <p>{{$t('systemIntroduction') }}</p>
      </section>
    </div>
  </main>
</template>
<style scoped>
main {
  padding: 10px !important;
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

.white {
  color: white;
}

.main1 section {
  padding: 0 50px;
}

:deep(.v-toolbar) {
  z-index: unset !important;
  box-shadow: none !important;
  background: unset !important;
  position: unset !important
}

:deep(.v-toolbar__content) {
  justify-content: space-between;
  padding: 0px 12px;
}

:deep(.v-navigation-drawer) {
  top: 0px !important;
  height: 100vh !important;
}

:deep(.v-list-item) {
  width: 100%;
}

a {
  text-decoration: none;
}
</style>