import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchRandomNumber = createAsyncThunk(
      "counter/fetchrandomnumber",
      async(value, thunkAPI) =>{
            const response = await fetch("http://localhost:3000/api/fetchRandomNumber",
            
            );
            const data = await response.json()
            return data ;
      }
) ;

  
 const CounterReducer = createSlice({
    name: "Counter",
    initialState : {
          count: 0,
          isLoading: false,
          error:""
    },
    reducers:{
          increment:(state) =>{
                state.count++
          },
          decrement:(state) =>{
                state.count--
          },
          incrementbyamount:(state, action) =>{
                state.count+=action.payload
          }
          
    },
    extraReducers:{
          [fetchRandomNumber.fulfilled]:(state,action)=>{
                state.count+=action.payload;
                state.isLoading = false;
          },
          [fetchRandomNumber.pending]:(state)=>{
                state.isLoading = true;
          },
          [fetchRandomNumber.rejected]:(state,action)=>{
                console.log("rejection", action)
                state.isLoading = false;
                state.error = "there was an error"
          }
    }
       
     
  
 })
 export const {decrement,increment,incrementbyamount} = CounterReducer.actions
export default CounterReducer.reducer;