import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* this asynthunk function will allow teachers to login, the teacherLogin 
function will be dispatch from the login page,it will collect the teacher's 
login data and pass it to the login function*/
export const teacherLogin = createAsyncThunk(
  "teacher/Login",
  async function login(data) {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      const response = await axios.post(url, data);
      if (response.data.jwt) {
        localStorage.setItem("teacher", JSON.stringify(response.data));
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  message: "",
  isLoggedIn: false,
  isTeacher: false,
};

const teacherSlice = createSlice({
  name: "teacherLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(teacherLogin.pending, (state) => {
        state.loading = true;
        state.message = "Loading";
      })
      .addCase(teacherLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.message = "Successful";
        state.isLoggedIn = true;
        state.isTeacher = true;
      })
      .addCase(teacherLogin.rejected, (state) => {
        state.loading = false;
        state.message = "Rejected";
      });
  },
});
export default teacherSlice.reducer;
