import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: true,
  math: false,
  english: false,
  showResult: false,
  editModal: false,
  rightSideDisplay: false,
  deleteModal: false,
  examForm: false,
  leftSideDisplay: false,
  teacherLogin: false,
  studentLogin: true,
};

const uiOperationSlice = createSlice({
  name: "uiOperation",
  initialState,
  reducers: {
    setStudentList(state, action) {
      state.studentList = action.payload;
      state.math = false;
      state.english = false;
    },
    setMath(state, action) {
      state.studentList = false;
      state.showResult = false;
      state.math = action.payload;
      state.english = false;
      state.examForm = false;
    },
    setEnglish(state, action) {
      state.studentList = false;
      state.showResult = false;
      state.english = action.payload;
      state.math = false;
    },
    setShowResult(state, action) {
      state.showResult = action.payload;
      state.studentList = false;
      state.math = false;
      state.english = false;
      state.examForm = false;
    },
    setEditModal(state, action) {
      state.editModal = action.payload;
      state.deleteModal = false;
      state.english = false;
      state.math = false;
    },
    setRightSideDisplay(state, action) {
      state.rightSideDisplay = action.payload;
      state.english = false;
      state.math = false;
      state.leftSideDisplay = false;
    },
    setDeleteModal(state, action) {
      state.deleteModal = action.payload;
      state.editModal = false;
      state.english = false;
      state.math = false;
    },
    setShowExamForm(state, action) {
      state.examForm = action.payload;
      state.editModal = false;
      state.english = false;
      state.math = false;
      state.studentList = false;
      state.showResult = false;
    },
    setLeftSideDisplay(state, action) {
      state.leftSideDisplay = action.payload;
      // state.english = false;
      // state.math = false;
      // state.studentList = false;
      // state.showResult = false;
      // state.examForm = false;
      // state.editModal = false;
      // state.deleteModal = false;
      state.rightSideDisplay = false;
    },
    setTeacherLoggedIn(state, action) {
      state.teacherLogin = action.payload;
      state.studentLogin = false;
    },
    setStudentLoggedIn(state, action) {
      state.studentLogin = action.payload;
      state.teacherLogin = false;
    },
  },
});

export const {
  setStudentList,
  setMath,
  setEnglish,
  setShowResult,
  setEditModal,
  setRightSideDisplay,
  setDeleteModal,
  setShowExamForm,
  setLeftSideDisplay,
  setTeacherLoggedIn,
  setStudentLoggedIn,
} = uiOperationSlice.actions;
export default uiOperationSlice.reducer;
