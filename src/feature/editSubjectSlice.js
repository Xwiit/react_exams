import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: {
    subject: {},
    performance: { total: 0, average: 0, grade: "" },
  },
};

const editSubjectSlice = createSlice({
  name: "editSubject",
  initialState,
  reducers: {
    setEdithSubject(state, action) {
      state.subject.subject = action.payload;
      const { firstCA, secondCA, exam } = state.subject.subject.subject;
      //computing for performace
      state.subject.performance.total = firstCA + secondCA + exam;
      state.subject.performance.average = Math.round(
        state.subject.performance.total / 3
      );
      if (state.subject.performance.total >= 80) {
        state.subject.performance.grade = "A";
      } else if (
        state.subject.performance.total >= 60 &&
        state.subject.performance.total <= 79
      ) {
        state.subject.performance.grade = "B";
      } else if (
        state.subject.performance.total >= 55 &&
        state.subject.performance.total <= 59
      ) {
        state.subject.performance.grade = "C";
      } else if (
        state.subject.performance.total >= 45 &&
        state.subject.performance.total <= 54
      ) {
        state.subject.performance.grade = "D";
      } else if (
        state.subject.performance.total >= 0 &&
        state.subject.performance.total <= 44
      ) {
        state.subject.performance.grade = "E";
      }
      console.log(
        state.subject.subject,
        state.subject.performance.grade,
        state.subject.performance.average
      );
    },
  },
});
export const { setEdithSubject } = editSubjectSlice.actions;
export default editSubjectSlice.reducer;
