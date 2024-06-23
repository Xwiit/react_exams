import { useEffect, useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { getExamination } from "../feature/service";
import { setStudentDetails } from "../feature/studentResultSlice";
import { useDispatch } from "react-redux";
import schoolLogo from "../images/schoolLogo.jpg";

const authToken = import.meta.env.VITE_ACCESS_TOKEN;
// const LOCALHOST_TOKEN =
//   "d3727bee94080f3fc878c1047247791e86df67c49c932d7d4b1851d07e22c4f4fd9690804377fe96663d22f59986599466950bd2739c3115e96bdd9cb801fcde070371b5dcbed867b6fb576d5bf7a9997756b60699e206ae25972ff933f17057fa8df5c0ec0676bc9722516bf0f2ef5e0ad12e72bbbecdf3cc93d799bd1ed0ad";

function CheckStudentPin() {
  const navigate = useNavigate();
  const [students, setStudents] = useState({});
  const dispatch = useDispatch();
  const examinationNo = getExamination();
  const serverUrl = `https://strapi-176070-0.cloudclusters.net`;
  useEffect(() => {
    async function getStudent() {
      const url = `${serverUrl}/api/students?populate=*`;
      try {
        const students = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        //   console.log(students.data.data);

        const STUDENT = students.data.data.find((student) => {
          return student?.attributes?.admissionNo === examinationNo;
        });
        localStorage.setItem("student", JSON.stringify(STUDENT));
      } catch (error) {
        console.log(error);
      }
      // console.log(students);
    }
    getStudent();
  }, [examinationNo]);
  async function handleGetAllStudent() {
    const url = `http://localhost:1337/api/students?populate=*`;
    try {
      const students = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${LOCALHOST_TOKEN}`,
        },
      });
      //   console.log(students.data.data);

      const STUDENT = students.data.data.find((student) => {
        // localStorage.setItem("student",JSON.stringify(student.data.data))
        return student?.attributes?.admissionNo === examinationNo;
      });
      if (STUDENT) {
        // localStorage.setItem("student", JSON.stringify(STUDENT));

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
    <div className="bg-background flex flex-col w-full h-screen sm:flex-row justify-between">
      <div className="w-full sm:w-[30%] h-[30%] sm:h-screen flex flex-col justify-center items-center bg-background text-gray-200">
        <h1>Processing...</h1>
        <button
          className="w-[70%] rounded-xl p-4 uppercase bg-forecolor1"
          onClick={handleGetAllStudent}
        >
          Proceed to Dashboard
        </button>
      </div>
      <div className="w-full sm:w-[70%] h-screen">
        <img className="w-full h-full" src={schoolLogo} alt="" />
      </div>
    </div>
  );
}

export default CheckStudentPin;
