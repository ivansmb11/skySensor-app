<script setup lang="ts">
import { ref } from 'vue';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/hooks/useAuth';
import { useUi } from '@/hooks/useUi';
import Role from '@/models/auth/Role';
import SignUpRequest from '@/models/auth/SignUpRequest';

const { createUser } = useAuth();
const { setAlertMessage } = useUi();
const router = useRouter();

const signUpRequest = ref({
  firstName: '',
  lastName:  '',
  username:  '',
  password:  '',
  role: Role.User
} as SignUpRequest);

const onSubmit = async() => {
  const { ok, message } = await createUser(signUpRequest.value);
  if (!ok) {
    setAlertMessage(message);
    return;
  }
  router.push({ name: 'todo' });
}

</script>
<template>
  <ion-grid>
    <form @submit.prevent="onSubmit">
      <ion-row>
        <ion-col size="12">
          <ion-item>
            <ion-label position="floating">Usuario</ion-label>
            <ion-input
              required
              v-model="signUpRequest.username"          
              placeholder="Ingresa tu usuario"
              type="text"
            >
            </ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input required v-model="signUpRequest.firstName" placeholder="Ingresa tu nombre"></ion-input>
          </ion-item>
        </ion-col>
        <ion-col size="6">
          <ion-item>
            <ion-label position="floating">Apellido(s)</ion-label>
            <ion-input required v-model="signUpRequest.lastName" placeholder="Ingresa tus apellido(s)"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12">
          <ion-item>
            <ion-label position="floating">Contraseña</ion-label>
            <ion-input required v-model="signUpRequest.password" placeholder="Ingresa tu contraseña" type="password"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="ion-margin-top">
        <ion-col size="12" class="center">
          <ion-button type="submit" expand="block">Crear cuenta</ion-button>
        </ion-col>
      </ion-row>
    </form>
  </ion-grid>
</template>
