import { Commit } from 'vuex';

export const setLoading = ( { commit }: { commit: Commit }, { show = false, message = '' } ) => {
  commit( 'setLoading', { show, message } );
}

export const setAlertMessage = ( { commit }: { commit: Commit }, message = '',) => {
  commit( 'setAlertMessage', message);
}