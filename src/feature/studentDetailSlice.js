import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudentDetials = createAsyncThunk(
  "fetch/studentSlice",
  async function getStudent(studentId) {
    console.log(studentId);
    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/students/${studentId}?populate=*`;
      const response = await axios.get(url);
      return response.data.data;
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
      .addCase(fetchStudentDetials.pending, (state) => {
        state.message = "Pending";
      })
      .addCase(fetchStudentDetials.fulfilled, (state, action) => {
        state.message = "Successful";
        state.stdData = action.payload;
      })
      .addCase(fetchStudentDetials.rejected, (state) => {
        state.message = "Rejected";
      });
  },
});
export default studentDetailSlice.reducer;
