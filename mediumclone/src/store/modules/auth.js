import authApi from '@/api/auth';
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLogedIn: null,
};
const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLogedIn = true;
  },
  registerFailure(state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
    //state.isLogedIn = false;
  },
};

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then(response => {
          context.commit('registerSuccess', response.data.user);
          setItem('accessTocen', response.data.user.token)
          resolve(response.data.user)

        })
        .catch(result => {
          context.commit('registerFailure', result.response.data.errors)
          console.log('result errors', result);
        });
    });
    // setTimeout(() => {
    //   context.commit('registerStart');
    // }, 1000);
  }
};

export default {
  state,
  mutations,
  actions
};
