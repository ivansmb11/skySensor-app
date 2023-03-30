<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonText
} from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
const APP_NAME = "SkySensor"
const route = useRoute();
const router = useRouter();
</script>
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ APP_NAME }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ APP_NAME }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <router-view />
    </ion-content>
    <ion-footer class="ion-no-border">
      <div>
        <ion-text class="ion-text-center">
          <p>Powered by <a href="https://ososuna.dev" target="_blank"> <img style="width: 2.5rem;" src="../../assets/ososuna.jpg" alt="ososuna"> </a> </p>
        </ion-text>
      </div>
      <ion-toolbar>
        <ion-title size="small">
          <ion-text v-if="route.name==='log-in'">
            Don't have an account?
            <ion-text color="primary" @click="router.push({ name: 'sign-up' })">
              Sign up
            </ion-text>
          </ion-text>
          <ion-text v-else-if="route.name==='sign-up'">
            Already have an account?
            <ion-text color="primary" @click="router.push({ name: 'log-in' })">
              Log in
            </ion-text>
          </ion-text>
        </ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>