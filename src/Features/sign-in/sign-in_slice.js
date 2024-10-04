import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSignInFormDropdown: false,
};

const signInSlice = createSlice({
  name: 'sign-in',
  initialState,
  reducers: {
    setShowSignInFormDropdown: (state, action) => {
      state.showSignInFormDropdown = action.payload;
    },
  },
});
export const { setShowSignInFormDropdown } = signInSlice.actions;
export default signInSlice.reducer;
