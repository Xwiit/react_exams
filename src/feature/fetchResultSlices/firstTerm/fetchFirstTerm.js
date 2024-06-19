import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetch the results
export const fetchResults = createAsyncThunk(
  "fetch/resultSlice",

  async function getStdResults(stdID) {
    const url1 = `https://strapi-176070-0.cloudclusters.net/api/first-term-exams?filters[stdID][$eq]=${stdID}`;
    const url2 = `https://strapi-176070-0.cloudclusters.net/api/psychomotors?filters[stdID][$eq]=${stdID}`;
    const url3 = `https://strapi-176070-0.cloudclusters.net/api/affective-skills?filters[stdID][$eq]=${stdID}`;
    const url4 = `https://strapi-176070-0.cloudclusters.net/api/sessions`;
    const url5 = `https://strapi-176070-0.cloudclusters.net/api/remarks?filters[stdID][$eq]=${stdID}`;

    try {
      const [result, psychomotor, affective, session, remarks] =
        await Promise.all([
          axios.get(url1),
          axios.get(url2),
          axios.get(url3),
          axios.get(url4),
          axios.get(url5),
        ]);
      // console.log(result.data), console.log(psychomotor.data);
      localStorage.setItem("result", JSON.stringify(result));
      localStorage.setItem("psychomotor", JSON.stringify(psychomotor));
      localStorage.setItem("affectiveSkills", JSON.stringify(affective));
      localStorage.setItem("session", JSON.stringify(session));
      localStorage.setItem("remarks", JSON.stringify(remarks));
      return {
        data1: result.data,
        data2: psychomotor.data,
        data3: affective.data,
        data4: session.data,
        data5: remarks.data,
      };
    } catch (error) {
      // return rejectWithValue(error);
    }
  }
);

const initialState = {
  result: null,
  psychomotor: null,
  affective: null,
  session: null,
  message: "",
};

const fetchResultSlice = createSlice({
  name: "studentResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.message = "Pending";
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.result = action.payload.data1;
        state.psychomotor = action.payload.data2;
        state.affective = action.payload.data3;
        state.session = action.payload.data4;
        state.message = "Successful";
      })
      .addCase(fetchResults.rejected, (state) => {
        state.message = "Rejected";
      });
  },
});

export default fetchResultSlice.reducer;
