import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudent = createAsyncThunk(
  "fetch/studentSlice",
  async function getStudent(studentId) {
    console.log(studentId);
    try {
      const url = `http://localhost:1337/api/students/${studentId}?populate=*`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  stdData: [],
  message: "",
};

const studentDetailSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.pending, (state) => {
        state.message = "Pending";
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.message = "Successful";
        state.stdData = action.payload;
      })
      .addCase(fetchStudent.rejected, (state) => {
        state.message = "Rejected";
      });
  },
});
export default studentDetailSlice.reducer;
