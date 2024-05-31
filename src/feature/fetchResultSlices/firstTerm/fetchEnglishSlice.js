import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEnglishResult = createAsyncThunk(
  "fetch/resultSlice",
  async function getResult(stdID) {
    console.log(stdID);
    try {
      const url = `http://localhost:1337/api/englishes?filters[stdID][$eq]=${stdID}`;
      const response = await axios.get(url);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  english: [],
  message: "",
};

const fetchEnglishSlice = createSlice({
  name: "studentResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnglishResult.pending, (state) => {
        state.message = "Pending";
      })
      .addCase(fetchEnglishResult.fulfilled, (state, action) => {
        state.english = action.payload;
        state.message = "Successful";
        console.log(state.english);
      })
      .addCase(fetchEnglishResult.rejected, (state) => {
        state.message = "Rejected";
      });
  },
});

export default fetchEnglishSlice.reducer;
