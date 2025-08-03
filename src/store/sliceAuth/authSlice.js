import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // to save  {email, role, permissions}
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});
export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
