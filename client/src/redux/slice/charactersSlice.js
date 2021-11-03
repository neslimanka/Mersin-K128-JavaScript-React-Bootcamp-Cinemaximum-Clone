import  { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters=createAsyncThunk('characters/getCharacters',async () => { 
    const res=await axios(`http://localhost:5001/cinema`);
    return res.data;
})


export const charactersSlice=createSlice({
    name:'character',
    initialState:{
        items:[],
    },

    reducers:{},
    extraReducers:{
        [fetchCharacters.fulfilled]:(state,action) => {
            console.log(action.payload)
        }
    }
})

export default charactersSlice.reducer;