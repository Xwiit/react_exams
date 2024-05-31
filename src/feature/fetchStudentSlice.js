import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudent = createAsyncThunk(
  "fetch/studenDetailtSlice",
  async function getStudent() {
    try {
      const url = `http://localhost:1337/api/students?populate=*`;
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
  message: "",
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.pending, (state) => {
        state.message = "Pending";
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchStudent.rejected, (state) => {
        state.message = "Rejected";
      });
  },
});

export default studentSlice.reducer;
