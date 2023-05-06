import { createStore } from 'vuex';
import auth from '@/store/auth';
import ui from '@/store/ui';

const store = createStore({
  modules: {
    auth,
    ui
  }
});

export default store;