import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  math: {
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
    setMath(state, action) {
      state.math.scores = action.payload;
      const { firstCA, secondCA, exam } = state.math.scores;
      state.math.total = firstCA + secondCA + exam;
      state.math.average = Math.round(state.math.total / 3);
      if (state.math.total >= 80) {
        state.math.grade = "A";
      } else if (state.math.total >= 60 && state.math.total <= 70) {
        state.math.grade = "B";
      } else if (state.math.total >= 55 && state.math.total <= 59) {
        state.math.grade = "C";
      } else if (state.math.total >= 45 && state.math.total <= 54) {
        state.math.grade = "D";
      } else if (state.math.total >= 0 && state.math.total <= 44) {
        state.math.grade = "F";
      }
      console.log(state.math.grade, state.math.total, state.math.average);
    },
  },
});
export const { setMath } = gradingSlice.actions;
export default gradingSlice.reducer;
