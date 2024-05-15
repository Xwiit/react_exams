import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: true,
  math: false,
};

const uiOperationSlice = createSlice({
  name: "uiOperation",
  initialState,
  reducers: {
    setStudentList(state) {
      state.studentList = true;
      state.math = false;
    },
    setMath(state, action) {
      state.studentList = false;
      state.math = action.payload;
    },
  },
});

export const { setStudentList, setMath } = uiOperationSlice.actions;
export default uiOperationSlice.reducer;
