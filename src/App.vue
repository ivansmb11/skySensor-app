<script setup lang="ts">
import { watch } from 'vue';
import { IonApp, IonRouterOutlet, IonLoading, toastController } from '@ionic/vue';
import { useAuth } from '@/hooks/useAuth';
import { useUi } from '@/hooks/useUi';
const { checkAuth } = useAuth();
const { alert, loading } = useUi();
const presentToast = async (message: string) => {
  const toast = await toastController.create({
    message,
    duration: process.env.VUE_APP_ALERT_TIMEOUT,
    position: 'bottom'
  });
  await toast.present();
};
watch(alert, () => {
  if ( alert.value.show ) {
    presentToast(alert.value.message);
  }
});
checkAuth();
</script>
<template>
<ion-app>
  <ion-router-outlet id="main-content" />
    <ion-loading
      v-if="loading.show"
      :isOpen="loading.show"
      :message="loading.message"
    />
</ion-app>
</template>
