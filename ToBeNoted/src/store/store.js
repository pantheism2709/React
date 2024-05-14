import {configureStore} from '@reduxjs/toolkit'


import authSlice from './AuthSlice'

const store = configureStore({

    reducer:{ 
         // here we can add multiple slice as reducers 
        auth:authSlice,
    }

  
});


export default store;