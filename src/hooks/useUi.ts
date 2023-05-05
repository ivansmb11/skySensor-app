import { computed } from 'vue';
import { actionSheetController } from '@ionic/vue';
import { useStore } from 'vuex';

export const useUi = () => {

  const store = useStore();
  
  const openConfirmModal = async(message: string) => {
    const actionSheet = await actionSheetController.create({
      header: message,
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });
    actionSheet.present();
    const { role } = await actionSheet.onWillDismiss();
    return role === 'confirm';
  }

  const setAlertMessage = ( message: string ) => {
    store.dispatch( 'ui/setAlertMessage', message );
  }

  const setLoading = ( show: boolean, message: string ) => {
    store.dispatch( 'ui/setLoading', { show, message } );
  }

  return {
    openConfirmModal,
    setAlertMessage,
    setLoading,
    alert: computed(() => store.getters['ui/getAlert']),
    loading: computed(() => store.getters['ui/getLoading'])
  }
}