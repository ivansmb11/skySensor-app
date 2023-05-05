<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton  
} from '@ionic/vue';
import { useAuth } from '@/hooks/useAuth';
import { useUi } from '@/hooks/useUi';
import LogInRequest from '@/models/auth/LogInRequest';
const { loginUser } = useAuth();
const { setAlertMessage } = useUi();
const router = useRouter();
const logInRequest = ref({
  username: '',
  password: ''
} as LogInRequest);
const onSubmit = async() => {
  const { ok, message } = await loginUser( logInRequest.value );
  if( !ok ) {
    setAlertMessage( message );
    return;
  }
  router.push({ name: 'todo' });
};
</script>
<template>
  <ion-grid>
    <form @submit.prevent="onSubmit">
      <ion-row>
        <ion-col size="12">
          <ion-item>
            <ion-label position="floating">Usuario</ion-label>
            <ion-input type="text" required v-model="logInRequest.username" placeholder="Ingresa tu usuario"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12">
          <ion-item>
            <ion-label position="floating">Contraseña</ion-label>
            <ion-input required v-model="logInRequest.password" placeholder="Ingresa tu contraseña" type="password"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-margin-top">
        <ion-col size="12" class="center">
          <ion-button type="submit" expand="block">
            Ingresar
          </ion-button>
        </ion-col>
      </ion-row>
    </form>
  </ion-grid>
</template>