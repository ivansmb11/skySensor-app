import UiState from '@/models/ui/UiState';

export const setLoading = ( state: UiState, { show = false, message = '' } ) => {
  state.loading = { show, message };
}

export const setAlertMessage = ( state: UiState, message = '' ) => {
  state.alert = {
    show: true,
    message
  }
  setTimeout(() => {
    state.alert = {
      show: false,
      message: ''
    }
  }, 2000);
}