import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from './slice/characterSlice  '

export const store=configureStore({
    reducer:{
        characters:charactersSlice,
    },
})