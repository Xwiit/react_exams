import { configureStore } from "@reduxjs/toolkit";
import gradeSlice from "./gradeSlice";
import teacherSlice from "./teacherLoginSlice";
import studentSlice from "./fetchStudentSlice";
import studentDetailSlice from "./studentDetailSlice";
import uiOperationSlice from "./uiOperationSlice";

const store = configureStore({
  reducer: {
    teacherLoginDetails: teacherSlice,
    fetchStudent: studentSlice,
    studentDetail: studentDetailSlice,
    uiOperation: uiOperationSlice,
    studentGrade: gradeSlice,
  },
});

export default store;
