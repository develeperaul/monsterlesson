import authApi from '@/api/auth';

import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isLoading: false,
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLogedIn: null,
};

export const mutationTypes = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSuccess',
  registerFailure: '[auth] registerFailure',

  loginStart: '[auth] loginStart',
  loginSuccess: '[auth] loginSuccess',
  loginFailure: '[auth] loginFailure',

  getCurrentUserStart: '[auth] getCurrentUserStart',
  getCurrentUserSuccess: '[auth] getCurrentUserSuccess',
  getCurrentUserFailure: '[auth] getCurrentUserFailure',
};

export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
  getCurrentUser: '[auth] getCurrentUser'
}

export const getterTypes = {
  currentUser: '[auth] currentUser',
  isLogedIn: '[auth] isLogedIn',
  isAnonymous: '[auth] isAnonymous'
 }

const getters = {
  [getterTypes.currentUser]: state => {
    return state.currentUser;
  },

  [getterTypes.isLogedIn]: state => {
    return Boolean(state.isLogedIn);
  },

  [getterTypes.isAnonymous]: state => {
    return state.isLogedIn === false;
  },
  
}

const mutations = {
  [mutationTypes.registerStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [mutationTypes.registerSuccess](state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLogedIn = true;
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },

  [mutationTypes.loginStart](state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLogedIn = true;
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },

  [mutationTypes.getCurrentUserStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getCurrentUserSuccess](state, payload) {
    state.isLoading = false;
    state.currentUser = payload;
    state.isLogedIn = true;
  },
  [mutationTypes.getCurrentUserFailure](state) {
    state.isLoading = false,
    state.isLogedIn = false,
    state.currentUser = null
  },

};

const actions = {
  [actionTypes.register](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationTypes.registerStart)
      authApi
        .register(credentials)
        .then(response => {
          context.commit(mutationTypes.registerSuccess, response.data.user);
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)

        })
        .catch(result => {
          context.commit(mutationTypes.registerFailure, result.response.data.errors)
          console.log('result errors', result);
        });
    });

    // setTimeout(() => {
    //   context.commit('registerStart');
    // }, 1000);
  },
  [actionTypes.login](context, credentials){
    return new Promise(resolve =>{
      context.commit(mutationTypes.loginStart)
      authApi
        .login(credentials)
        .then(response =>{
          context.commit(mutationTypes.loginSuccess, response.data.user);
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result=>{
          context.commit(mutationTypes.loginFailure, result.response.data.errors)
          console.log('result errors', result);
        })
    })
  },

  [actionTypes.getCurrentUser](context){
    return new Promise(resolve =>{
      context.commit(mutationTypes.getCurrentUserStart)
      authApi
        .getCurrentUser()
        .then(response =>{
          context.commit(mutationTypes.getCurrentUserSuccess, response.data.user);
          resolve(response.data.user)
        })
        .catch(()=>{
          context.commit(mutationTypes.getCurrentUserFailure)
        })
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
