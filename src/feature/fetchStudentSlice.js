import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authToken = import.meta.env.VITE_ACCESS_TOKEN;
export const fetchStudent = createAsyncThunk(
  "fetch/studenDetailtSlice",
  async function getStudent() {
    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/students?populate=*`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      localStorage.setItem("allStudents", JSON.stringify(response.data.data));
      console.log(response.data.data);
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
