<script setup>
import { ref, onMounted } from "vue";
import { useWindowSizeStore } from "../store/size";
import { useLangStore } from "../store/lang";
import { useI18n } from "vue-i18n";
const { locale } = useI18n()
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useWindowSizeStore();
let activeBtn = ref(0)
//锚点跳转
function goAnchor(selector, index) {
  activeBtn.value = index;
  let anchorElementHeight = document.querySelector(selector).offsetTop;
  let navBar = 85;
  window.scrollTo({
    top: anchorElementHeight - navBar,
    behavior: "smooth"
  });
}
const storeLang = useLangStore()
let lang = ref(storeLang.lang)
locale.value = lang.value
const url = ref('https://m.busmanage.com/#/login?lang=en_GB')
function changeLang (e) {
  localStorage.setItem('lang_sale_ticket_website', e)
  locale.value = e
  storeLang.lang = e
  url.value = `https://m.busmanage.com/#/login?lang=${e}`
}

onMounted (()=> function() {
  lang = ref(storeLang.lang)
  locale.value = lang.value
})

const items = ref([
  {id: 'en_GB', name: 'English'},
  {id: 'es_ES', name: 'Español'},
  {id: 'fr_FR', name: 'Français'},
  {id: 'pt_PT', name: 'Português'},
  {id: 'zh_CN', name: '简体中文'},
  {id: 'zh_TW', name: '繁体中文'}
])
</script>
<template>
  <header
    class="d-flex-between"
    style="padding: 0 58px;position: sticky;top: 0;background-color: white;"
  >
    <a href="#/" class="d-center">
      <img src="../assets/logo.png" style="height: 53px" />
      <img src="../assets/proName.webp" style="height: 24px;margin-left: 8px" />
    </a>
    <div class="d-flex-center menu">
      <a href="#/">{{ $t('introduction') }}</a>
      <a href="#/software">{{ $t('software') }}</a>
      <a href="#/hardware">{{ $t('hardware') }}</a>
      <a href="#/linkMe">{{ $t('linkMe') }}</a>
    </div>
    <div class="d-flex-center">
      <a href="#/Down">
        <img
          src="../assets/dowload.webp"
          style="height: 24px;vertical-align: -6px;padding-right: 8px"
        />{{ $t('down') }}
      </a>
      <div style="padding: 0 8px">|</div>
      <a :href="url" target="open">{{ $t('login') }}</a>
      <div style="padding: 0 8px">|</div>
      <div class="d-flex align-center">
        <img
          src="../assets/earth.webp"
          style="height: 24px;vertical-align: -6px;padding-right: 8px"
        />
        <v-select
          item-title="name"
          item-value="id"
          :items="items"
          @update:modelValue="changeLang"
          v-model="lang"
          variant="underlined"
          style="width: 110px"
        ></v-select>
      </div>
    </div>
  </header>
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
  bottom: 24px;
}

header,
header *:not(.v-input) {
  height: 85px;
  line-height: 85px;
  color: rgba(107, 114, 130, 1);
  font-size: 16px;
  font-weight: 400;
}

:deep(.v-field__outline) {
  opacity: 0;
}

:deep(.v-field__append-inner) {
  padding-top: 20px !important
}

a {
  padding: 0 8px;
  text-decoration: none;
}

a:hover {
  color: #6bb843;
}
</style>