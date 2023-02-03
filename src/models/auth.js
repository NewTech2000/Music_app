import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPersistor} from '@rematch/persist';

import env from '../config/config';

export default {
  // Initial state
  state: {
    user: {},
    error: false,
    errorMessage: '',
    success: false,
    successMessage: '',
    authenticated: false,
    loginEmail: '',
  },

  /**
   * Reducers
   */
  reducers: {
    setLoginEmail(state, payload) {
      return {
        ...state,
        loginEmail: payload,
      };
    },
    setAuthUser(state, payload) {
      return {
        ...state,
        user: payload,
      };
    },
    setAuthStatus(state, payload) {
      return {
        ...state,
        authenticated: payload,
      };
    },
    resetAuth() {
      return {};
    },
    setError(state, payload) {
      return {
        ...state,
        error: true,
        errorMessage: payload,
      };
    },
    setSuccess(state, payload) {
      return {
        ...state,
        success: true,
        successMessage: payload,
      };
    },
    clearError(state, payload) {
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    },
    clearSuccess(state, payload) {
      return {
        ...state,
        success: false,
        successMessage: '',
      };
    },
  },

  /**
   * Effects/Actions
   */
  effects: dispatch => ({
    /**
     * Get User
     */
    async fetchDefaultUser(payload) {
      try {
      } catch (error) {
        console.log('Something went wrong!', error);
      }
    },

    /**
     * Logout User
     */
    async logOutUser() {
      let {setAuthUser, setAuthStatus} = dispatch.auth;
      try {
        await AsyncStorage.clear();
        setAuthUser({});
        setAuthStatus(false);
      } catch (error) {
        console.log('Logout', error);
      }
    },
  }),
};
