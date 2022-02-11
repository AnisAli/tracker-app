import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import tracker from '../../api/tracker';
import { IAuthState } from '../../models/app,model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../navigationRef';


const initialState: IAuthState =  {
    token: null,
    error: null,
    status: 'idle'
}


// Thunk functions

  export const signUpUser = createAsyncThunk(
    'auth/signUp',
     async ({email, password}: any, thunkAPI) => {
      const response:any = await tracker.post('/signup', {email, password}).toPromise();
      thunkAPI.dispatch(storeToken(response.token));
      return response
    }
  )

  export const signInUser = createAsyncThunk(
    'auth/signIn',
     async ({email, password}: any, thunkAPI) => {
      const response:any = await tracker.post('/signin', {email, password}).toPromise();
      thunkAPI.dispatch(storeToken(response.token));
      return response
    }
  )

  export const storeToken = createAsyncThunk(
    'auth/storeToken',
     async (token: string) => {
        console.log('inside async thunk');
        await AsyncStorage.setItem('token', token);
    }
  )

  export const tryLocalSignIn = createAsyncThunk(
    'auth/tryLocalSignIn',
     async () => {
        const token = await AsyncStorage.getItem('token');
       if (!token) {
           navigate('Signin');
       }
        return token;
    }
  );

  export const signOutUser = createAsyncThunk(
    'auth/signOutUser',
     async () => {
        const token = await AsyncStorage.setItem('token', '');
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearErrorMessage(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state, action) =>{
            state.status = 'loading'
        })
        builder.addCase(signUpUser.rejected, (state, action:any) =>{
           // console.log(action);
            state.error = "Something wrong";
            state.status = 'idle'
            state.token = null
        })
        .addCase(signUpUser.fulfilled, (state, action: any) => {
            console.log('fulfilled');
            state.status = 'idle';
            state.error = null;
            state.token = action.payload.token;
        })
        .addCase(signInUser.rejected, (state, action:any) =>{
            // console.log(action);
             state.error = "Something wrong";
             state.status = 'idle'
             state.token = null             
         })
         .addCase(signInUser.fulfilled, (state, action: any) => {
             console.log('fulfilled');
             state.status = 'idle';
             state.error = null;
             state.token = action.payload.token;
         })
         .addCase(tryLocalSignIn.fulfilled, (state, action: any) => {
            console.log('fulfilled token loaded from async');
            state.status = 'idle';
            state.error = null;
            state.token = action.payload;
        })
        .addCase(signOutUser.fulfilled, (state, action: any) => {
            console.log('fulfilled token signOut');
            state.status = 'idle';
            state.error = null;
            state.token = null;
        })
    }
});

export const { clearErrorMessage } = authSlice.actions

export default authSlice.reducer