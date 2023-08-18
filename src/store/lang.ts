import { defineStore } from 'pinia'
import {ref} from 'vue';

export const useLangStore = defineStore('lang', () => {
    let lang = ref(localStorage.getItem('lang_sale_ticket_website') || 'en_GB')
    console.log(1, lang.value)
    return { lang }
})