import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstTerm: {
    subjects: {},
    math: { total: 0, average: 0, grade: 0 },
    english: { total: 0, average: 0, grade: 0 },
  },
  math: {
    scores: {},
    total: 0,
    average: 0,
    grade: "",
  },
  english: {
    scores: {},
    total: 0,
    average: 0,
    grade: "",
  },
};

const gradingSlice = createSlice({
  name: "studentGrade",
  initialState,
  reducers: {
    setFirstTerm(state, action) {
      state.firstTerm.subjects = action.payload;
      const { math, english } = state.firstTerm.subjects;

      //computing for mathematics
      state.firstTerm.math.total = math.firstCA + math.secondCA + math.exam;
      state.firstTerm.math.average = Math.round(state.firstTerm.math.total / 3);
      if (state.firstTerm.math.total >= 80) {
        state.firstTerm.math.grade = "A";
      } else if (
        state.firstTerm.math.total >= 60 &&
        state.firstTerm.math.total <= 79
      ) {
        state.firstTerm.math.grade = "B";
      } else if (
        state.firstTerm.math.total >= 55 &&
        state.firstTerm.math.total <= 59
      ) {
        state.firstTerm.math.grade = "C";
      } else if (
        state.firstTerm.math.total >= 45 &&
        state.firstTerm.math.total <= 54
      ) {
        state.firstTerm.math.grade = "D";
      } else if (
        state.firstTerm.math.total >= 0 &&
        state.firstTerm.math.total <= 44
      ) {
        state.firstTerm.math.grade = "E";
      }

      //computing for english
      state.firstTerm.english.total =
        english.firstCA + english.secondCA + english.exam;
      state.firstTerm.english.average = Math.round(
        state.firstTerm.english.total / 3
      );
      if (state.firstTerm.english.total >= 80) {
        state.firstTerm.english.grade = "A";
      } else if (
        state.firstTerm.english.total >= 60 &&
        state.firstTerm.english.total <= 79
      ) {
        state.firstTerm.english.grade = "B";
      } else if (
        state.firstTerm.english.total >= 55 &&
        state.firstTerm.english.total <= 59
      ) {
        state.firstTerm.english.grade = "C";
      } else if (
        state.firstTerm.english.total >= 45 &&
        state.firstTerm.english.total <= 54
      ) {
        state.firstTerm.english.grade = "D";
      } else if (
        state.firstTerm.english.total >= 0 &&
        state.firstTerm.english.total <= 44
      ) {
        state.firstTerm.english.grade = "E";
      }
    },
  },
});
export const { setMath, setEnglish, setFirstTerm } = gradingSlice.actions;
export default gradingSlice.reducer;
