import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstTerm: {
    subjects: {},
    math: { total: 0, average: 0, grade: 0 },
    english: { total: 0, average: 0, grade: 0 },
    agric: { total: 0, average: 0, grade: 0 },
    computer: { total: 0, average: 0, grade: 0 },
    biology: { total: 0, average: 0, grade: 0 },
    economics: { total: 0, average: 0, grade: 0 },
  },
};

const gradingSlice = createSlice({
  name: "studentGrade",
  initialState,
  reducers: {
    setFirstTerm(state, action) {
      state.firstTerm.subjects = action.payload;
      const { math, english, agric, computer, biology, economics } =
        state.firstTerm.subjects;

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

      //computing for agric
      state.firstTerm.agric.total = agric.firstCA + agric.secondCA + agric.exam;
      state.firstTerm.agric.average = Math.round(
        state.firstTerm.agric.total / 3
      );
      if (state.firstTerm.agric.total >= 80) {
        state.firstTerm.agric.grade = "A";
      } else if (
        state.firstTerm.agric.total >= 60 &&
        state.firstTerm.agric.total <= 79
      ) {
        state.firstTerm.agric.grade = "B";
      } else if (
        state.firstTerm.agric.total >= 55 &&
        state.firstTerm.agric.total <= 59
      ) {
        state.firstTerm.agric.grade = "C";
      } else if (
        state.firstTerm.agric.total >= 45 &&
        state.firstTerm.agric.total <= 54
      ) {
        state.firstTerm.agric.grade = "D";
      } else if (
        state.firstTerm.agric.total >= 0 &&
        state.firstTerm.agric.total <= 44
      ) {
        state.firstTerm.agric.grade = "E";
      }

      //computing for computer
      state.firstTerm.computer.total =
        computer.firstCA + computer.secondCA + computer.exam;
      state.firstTerm.computer.average = Math.round(
        state.firstTerm.computer.total / 3
      );
      if (state.firstTerm.computer.total >= 80) {
        state.firstTerm.computer.grade = "A";
      } else if (
        state.firstTerm.computer.total >= 60 &&
        state.firstTerm.computer.total <= 79
      ) {
        state.firstTerm.computer.grade = "B";
      } else if (
        state.firstTerm.computer.total >= 55 &&
        state.firstTerm.computer.total <= 59
      ) {
        state.firstTerm.computer.grade = "C";
      } else if (
        state.firstTerm.computer.total >= 45 &&
        state.firstTerm.computer.total <= 54
      ) {
        state.firstTerm.computer.grade = "D";
      } else if (
        state.firstTerm.computer.total >= 0 &&
        state.firstTerm.computer.total <= 44
      ) {
        state.firstTerm.computer.grade = "E";
      }

      //computing for biology
      state.firstTerm.biology.total =
        biology.firstCA + biology.secondCA + biology.exam;
      state.firstTerm.biology.average = Math.round(
        state.firstTerm.biology.total / 3
      );
      if (state.firstTerm.biology.total >= 80) {
        state.firstTerm.biology.grade = "A";
      } else if (
        state.firstTerm.biology.total >= 60 &&
        state.firstTerm.biology.total <= 79
      ) {
        state.firstTerm.biology.grade = "B";
      } else if (
        state.firstTerm.biology.total >= 55 &&
        state.firstTerm.biology.total <= 59
      ) {
        state.firstTerm.biology.grade = "C";
      } else if (
        state.firstTerm.biology.total >= 45 &&
        state.firstTerm.biology.total <= 54
      ) {
        state.firstTerm.biology.grade = "D";
      } else if (
        state.firstTerm.biology.total >= 0 &&
        state.firstTerm.biology.total <= 44
      ) {
        state.firstTerm.biology.grade = "E";
      }

      //computing for economics
      state.firstTerm.economics.total =
        economics.firstCA + economics.secondCA + economics.exam;
      state.firstTerm.economics.average = Math.round(
        state.firstTerm.economics.total / 3
      );
      if (state.firstTerm.economics.total >= 80) {
        state.firstTerm.economics.grade = "A";
      } else if (
        state.firstTerm.economics.total >= 60 &&
        state.firstTerm.economics.total <= 79
      ) {
        state.firstTerm.economics.grade = "B";
      } else if (
        state.firstTerm.economics.total >= 55 &&
        state.firstTerm.economics.total <= 59
      ) {
        state.firstTerm.economics.grade = "C";
      } else if (
        state.firstTerm.economics.total >= 45 &&
        state.firstTerm.economics.total <= 54
      ) {
        state.firstTerm.economics.grade = "D";
      } else if (
        state.firstTerm.economics.total >= 0 &&
        state.firstTerm.economics.total <= 44
      ) {
        state.firstTerm.economics.grade = "E";
      }
    },
    // setTermSumary(state) {
    //   state.termSummary.total =
    //     state.firstTerm.math.total +
    //     state.firstTerm.english.total +
    //     state.firstTerm.agric.total +
    //     state.firstTerm.computer.total +
    //     state.firstTerm.biology.total +
    //     state.firstTerm.economics.total;
    //   state.termSummary.average = state.termSummary.total / 600;
    //   if (state.termSummary.total >= 80) {
    //     state.termSummary.grade = "A";
    //   } else if (
    //     state.termSummary.total >= 60 &&
    //     state.termSummary.total <= 79
    //   ) {
    //     state.termSummary.grade = "B";
    //   } else if (
    //     state.termSummary.total >= 55 &&
    //     state.termSummary.total <= 59
    //   ) {
    //     state.termSummary.grade = "C";
    //   } else if (
    //     state.termSummary.total >= 45 &&
    //     state.termSummary.total <= 54
    //   ) {
    //     state.termSummary.grade = "D";
    //   } else if (
    //     state.termSummary.total >= 0 &&
    //     state.termSummary.total <= 44
    //   ) {
    //     state.termSummary.grade = "E";
    //   }
    //   console.log("termSummaryTotal:", state.termSummary.total);
    //   console.log("termSummaryGrade:", state.termSummary.grade);
    //   console.log("termSummaryAverage:", state.termSummary.average);
    // },
  },
});
export const { setMath, setEnglish, setFirstTerm, setTermSumary } =
  gradingSlice.actions;
export default gradingSlice.reducer;
