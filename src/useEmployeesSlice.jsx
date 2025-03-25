import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const employFetch = createAsyncThunk("employ/employFetch", async () => {
  const res = await axios.get(
    "https://reqres.in/api/unknown"
  );
  return res.data;
});
export const employAdd=createAsyncThunk('employ/employAdd',async(data)=>{
  console.log(data);
  
  const res = await axios.post(
    "https://reqres.in/api/users",data
  );
  return res.data;
})
const employSlice = createSlice({
  name: "employ",
  initialState: { employ: [], loading: false, error: null },
  // reducers:{},
  extraReducers: (builder) => {
    //
    builder
      .addCase(employFetch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(employFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.employ = action.payload;
      })
      .addCase(employFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "error occured";
      });

      // insert data
      builder.addCase(employAdd.pending,(state,action)=>{
       state.loading =true
      }).addCase(employAdd.fulfilled,(state,action)=>{
        state.loading =false
        state.employ.data.push({...action.payload,id:nanoid()})
      }).addCase(employAdd.rejected,(state, action)=>{
        state.loading =false
        state.error = action.payload || "error occured"
      })
  },
});

export default employSlice.reducer;
