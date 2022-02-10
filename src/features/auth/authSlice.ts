import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
    token: null,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp(state, action) {
            console.log('[Slice] Signup Dispatch');
            state.token = action.payload;
          },
        signOut(state, action) {
            console.log('[Slice] SignOut Dispatch');
            state.token = null;
          },
    }
});

export const { signUp, signOut } = authSlice.actions

export default authSlice.reducer