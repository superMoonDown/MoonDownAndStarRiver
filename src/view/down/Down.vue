<script setup lang="ts">
import Card from "../../components/card.vue";
import headerMobile from '../headerMobile.vue';
import { useWindowSizeStore } from '../../store/size'
const store = useWindowSizeStore()
</script>
<template>
  <main class="main2 d-center-column" id="r2"  v-if="store.width == 2">
    <div class="d-center-column" style="width: 100%">
      <div class="d-center" style="width: 100%">
        <card class="d-center-column card">
          <img class="img1" src="../../assets/qrcode.png" />
          <p>Scan QR code to download mobile client</p>
          <p>Support for Android system and Apple mobile devices</p>
        </card>
        <card class="d-center-column card">
          <img class="img1" src="../../assets/qrcode.png" />
          <p>Scan QR code to download mobile client</p>
          <p>Support for Android system and Apple mobile devices</p>
        </card>
      </div>
    </div>
    <div class="d-center-column article-title" style="padding: 100px 0px">
      Go to the app market to download
    </div>
    <div class="d-center-column" style="width: 100%">
      <div class="d-center" style="width: 100%">
        <card class="d-center card-down link-btn white-color">
            <img class="login-img" src="../../assets/apple.png"/>
                <div>
                <div style="font-size: 12px">{{ $t('appDown') }}</div>
                <div>Apple Store</div>
                </div>
        </card>
        <card class="d-center card-down link-btn white-color">
            <img class="login-img" src="../../assets/google.png"/>
                <div>
                <div>{{ $t('windowDown1') }}</div>
                <div style="font-size: 12px">{{ $t('windowDown2') }}</div>
                </div>
        </card>
      </div>
    </div>
  </main>
  <v-row v-else>
    <headerMobile/>
    <v-col cols="12" class="d-flex justify-center align-center">
      <card class="d-center-column card">
        <img class="img1" src="../../assets/qrcode.png"/>
        <p>Scan QR code to download mobile client</p>
        <p>Support for Android system and Apple mobile devices</p>
      </card>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
      <card class="d-center-column card">
        <img class="img1" src="../../assets/qrcode.png"/>
        <p>Scan QR code to download mobile client</p>
        <p>Support for Android system and Apple mobile devices</p>
      </card>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
      Go to the app market to download
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
      <card class="d-center card-down link-btn white-color">
            <img class="login-img" src="../../assets/apple.png"/>
                <div>
                <div style="font-size: 12px">{{ $t('appDown') }}</div>
                <div>Apple Store</div>
                </div>
        </card>
    </v-col>
    <v-col cols="12" class="d-flex justify-center align-center">
      <card class="d-center card-down link-btn white-color">
            <img class="login-img" src="../../assets/google.png"/>
                <div>
                <div>{{ $t('windowDown1') }}</div>
                <div style="font-size: 12px">{{ $t('windowDown2') }}</div>
                </div>
        </card>
    </v-col>
  </v-row>
</template>
<style scoped>
.article-title {
  font-size: 32px;
  font-weight: 700;
}

.main2 {
  padding: 60px 0;
}

.img1 {
  width: 190px;
  height: 190px;
}

.card {
    width: 380px;
height: 480px;
}

p {
    padding: 0 50px;
    text-align: center;
}

.card-down {
    width: 222px;
    height: 72px;
}

.login-img {
    height: 45px;
  width: 45px;
  margin: 0 12px;
}

.link-btn {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  cursor: pointer;
}

.white-color {
    font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
</style>