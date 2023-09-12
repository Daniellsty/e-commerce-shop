import {createSlice} from "@reduxjs/toolkit";


const storeAuthToLocalStorage = () => {
    let auth = localStorage.getItem('auth');
    if(auth){
        return JSON.parse(localStorage.getItem('auth'));
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('auth', JSON.stringify(data));
}

const initialState = {
    auths: storeAuthToLocalStorage(),
  
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (state, action) => {

            console.log(action.payload);
           
            state.auths = action.payload;
            storeInLocalStorage(state.auths);

          
        },

       

      


    }
});

export const {addAuth} = authSlice.actions;
export const getAuthData = (state) => state.auth.auths;  
export default authSlice.reducer;