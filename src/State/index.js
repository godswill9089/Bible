import { configureStore } from '@reduxjs/toolkit';
import signInReducer from '../Features/sign-in/sign-in_slice';

const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});

export default store;
