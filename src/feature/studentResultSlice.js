import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentDetails: {},
  message: "",
};

const studentResultSlice = createSlice({
  name: "studentResult",
  initialState,
  reducers: {
    setStudentDetails: (state, action) => {
      state.studentDetails = action.payload;
      state.message = "Successful";
    },
  },
});

export const { setStudentDetails } = studentResultSlice.actions;
export default studentResultSlice.reducer;
