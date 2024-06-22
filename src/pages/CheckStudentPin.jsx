import { useEffect, useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { getExamination } from "../feature/service";
import { setStudentDetails } from "../feature/studentResultSlice";
import { useDispatch } from "react-redux";

const authToken = import.meta.env.VITE_ACCESS_TOKEN;
const LOCALHOST_TOKEN =
  "d3727bee94080f3fc878c1047247791e86df67c49c932d7d4b1851d07e22c4f4fd9690804377fe96663d22f59986599466950bd2739c3115e96bdd9cb801fcde070371b5dcbed867b6fb576d5bf7a9997756b60699e206ae25972ff933f17057fa8df5c0ec0676bc9722516bf0f2ef5e0ad12e72bbbecdf3cc93d799bd1ed0ad";

function CheckStudentPin() {
  const navigate = useNavigate();
  const [students, setStudents] = useState({});
  const dispatch = useDispatch();
  const examinationNo = getExamination();

  async function handleGetAllStudent() {
    const url = `http://localhost:1337/api/students`;
    try {
      const students = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${LOCALHOST_TOKEN}`,
        },
      });
      //   console.log(students.data.data);
      const STUDENT = students.data.data.find((student) => {
        console.log(student);
        return student?.attributes?.admissionNo === examinationNo;
      });
      if (STUDENT) {
        setStudents(STUDENT);
        dispatch(setStudentDetails(STUDENT));
        navigate("/student-dashboard");
      } else {
        alert("Invalid Pin");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(students);
  }

  return (
    <div>
      <h1>Processing Pin</h1>
      <button onClick={handleGetAllStudent}>Proceed</button>
    </div>
  );
}

export default CheckStudentPin;
