<script setup>
import { useWindowSizeStore } from '../store/size'
const store = useWindowSizeStore()
</script>
<template>
  <footer class="white" v-if="store.width == 2">
    <img src="../assets/logo.png" />
    <div style="max-width: 351px;">Bus ticketing systems offer a number of benefits to both passengers and bus operators. For passengers, bus ticketing systems make it easy and convenient to purchase tickets.</div>
    <div style="max-width: 174px;">Bus ticketing systems offer a number of benefits to both passengers and</div>
    <div>
        <div style="color: rgba(145, 255, 206, 1);">SUPORTE</div>
        <div>(11)93210-9845</div>
        <div>contato@zapvenda.com.br</div>
        <img src="../assets/footer-icon.webp" style="height:19.58px;"/>
    </div>
  </footer>
  <footer class="white" v-else>
    <v-row class="ma-3">
        <v-col cols="12" class="d-flex justify-center">
            <img src="../assets/logo.png" />
        </v-col>
        <v-col cols="12" class="text-center">
            Bus ticketing systems offer a number of benefits to both passengers and bus operators. For passengers, bus ticketing systems make it easy and convenient to purchase tickets.
        </v-col>
        <v-col cols="12" class="text-center">
            Bus ticketing systems offer a number of benefits to both passengers and
        </v-col>
        <v-col cols="12" class="d-flex justify-center flex-wrap d-flex flex-column align-center">
            <div style="color: rgba(145, 255, 206, 1);">SUPORTE</div>
            <div>(11)93210-9845</div>
            <div>contato@zapvenda.com.br</div>
        </v-col>
    </v-row>
  </footer>
</template>
<style scoped>
.white {
    color: white
}

footer {
    min-height: 292px;
    background: rgba(102, 123, 160, 1);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

footer > * {
    padding: 12px;
}

footer img {
    width: 88px;
    height: 91px;
}
</style>