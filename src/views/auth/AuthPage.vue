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
const APP_NAME = process.env.VUE_APP_NAME;
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
      <ion-toolbar>
        <ion-title size="small">
          <ion-text v-if="route.name==='log-in'">
            ¿No tienes una cuenta?
            <ion-text color="primary" @click="router.push({ name: 'sign-up' })">
              Registrarse
            </ion-text>
          </ion-text>
          <ion-text v-else-if="route.name==='sign-up'">
            ¿Ya tienes una cuenta?
            <ion-text color="primary" @click="router.push({ name: 'log-in' })">
              Ingresa
            </ion-text>
          </ion-text>
        </ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>