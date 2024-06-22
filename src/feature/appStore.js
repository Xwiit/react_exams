import { configureStore } from "@reduxjs/toolkit";
import gradeSlice from "./gradeSlice";
import teacherSlice from "./teacherLoginSlice";
import studentSlice from "./fetchStudentSlice";
import studentDetailSlice from "./studentDetailSlice";
import uiOperationSlice from "./uiOperationSlice";

import editSubjectSlice from "./editSubjectSlice";
// import fetchPsychomotorSlice from "./fetchResultSlices/firstTerm/fetchPsychomotor";
import fetchResultSlice from "./fetchResultSlices/firstTerm/fetchFirstTerm";

import studentResultSlice from "./studentResultSlice";

const store = configureStore({
  reducer: {
    teacherLoginDetails: teacherSlice,
    fetchStudent: studentSlice,
    studentDetail: studentDetailSlice,
    uiOperation: uiOperationSlice,
    studentGrade: gradeSlice,
    editScores: editSubjectSlice,
    firstTermResult: fetchResultSlice,
    // psychomtor: fetchPsychomotorSlice,
    studentResult: studentResultSlice,
  },
});

export default store;
