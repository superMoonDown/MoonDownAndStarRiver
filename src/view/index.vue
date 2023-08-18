<script setup>
import { ref, onMounted, watch } from 'vue';
import { RouterView } from 'vue-router'
import Header from './Header.vue';
import Footer from './Footer.vue';
import { useWindowSizeStore } from "../store/size";
const store = useWindowSizeStore();
</script>
<template>
  <Header v-if="store.width == 2"/>
  <router-view/>
  <Footer/>
</template>