import { defineStore } from 'pinia'
import {ref} from 'vue';

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useWindowSizeStore = defineStore('windowSize', () => {
    let size = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    let type = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 1 : 2
    let width = ref((size < 768 || type == 1) ? 1 : 2)
    
    window.onresize = function(){
        size = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        width.value = (size < 768 || type == 1) ? 1 : 2
    }
    return { width }
})