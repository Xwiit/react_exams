import { useSelector } from "react-redux";
import logo from "../images/logo.jpg";
import { getStduent, getResult } from "../feature/service";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ResultPreview from "../componets/ResultPreview";

function StudentDashboard() {
  const student = getStduent();
  const navigate = useNavigate();
  const [isResultReady, setIsResultReady] = useState(false);

  // const result = getResult();

  // if (result === null) {
  //   setIsResultReady(false);
  //   return;
  // } else {
  //   setIsResultReady(true);
  // }
  // const authToken =
  //   "d3727bee94080f3fc878c1047247791e86df67c49c932d7d4b1851d07e22c4f4fd9690804377fe96663d22f59986599466950bd2739c3115e96bdd9cb801fcde070371b5dcbed867b6fb576d5bf7a9997756b60699e206ae25972ff933f17057fa8df5c0ec0676bc9722516bf0f2ef5e0ad12e72bbbecdf3cc93d799bd1ed0ad";

  // const selector = useSelector();
  // const student = useSelector((state) => state.studentResult.studentDetails);
  const stdID = student.id;
  console.log("id", stdID);
  const serverUrl = "https://strapi-176070-0.cloudclusters.net";

  const authToken = import.meta.env.VITE_ACCESS_TOKEN;
  useEffect(() => {
    async function getStdResults() {
      const url1 = `${serverUrl}/api/first-term-exams?filters[stdID][$eq]=${stdID}`;
      const url2 = `${serverUrl}/api/psychomotors?filters[stdID][$eq]=${stdID}`;
      const url3 = `${serverUrl}/api/affective-skills?filters[stdID][$eq]=${stdID}`;
      const url4 = `${serverUrl}/api/sessions`;
      const url5 = `${serverUrl}/api/remarks?filters[stdID][$eq]=${stdID}`;

      try {
        const [result, psychomotor, affective, session, remarks] =
          await Promise.all([
            axios.get(url1, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }),
            axios.get(url2, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }),
            axios.get(url3, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }),
            axios.get(url4, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }),
            axios.get(url5, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }),
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

    getStdResults();
  }, [authToken, stdID, serverUrl]);

  function handleResultLogout() {
    localStorage.removeItem("examinationNo");
    localStorage.removeItem("resultCheckStudent");
    // localStorage.removeItem("teacher");
    localStorage.removeItem("session");
    // localStorage.removeItem("student");
    localStorage.removeItem("remarks");
    localStorage.removeItem("affectiveSkills");
    localStorage.removeItem("psychomotor");
    localStorage.removeItem("result");
    // localStorage.removeItem("allStudents");
    navigate("/");
  }

  return (
    <div
      className="bg-background w-full h-screen flex justify-center  scrollbar-thin 
scrollbar-webkit overflow-y-scroll
    "
    >
      <div className="w-[90%] sm:w-[70%] h-[55rem] rounded-lg my-[2rem] sm:mb-0 sm:rounded-none bg-gray-200">
        <div className="bg-forecolor sm:px-[2rem] text-gray-200 w-full items-center m-2rem h-[40%] sm:h-[30%] sm:flex sm:flex-row flex-col p-2 sm:justify-between">
          <div className="w-full flex justify-center items-center  sm:w-[20%]">
            <img
              // src={`http://localhost:1337/${student?.attributes?.passport?.data?.attributes?.url}`}
              src={`https://strapi-176070-0.cloudclusters.net${student?.attributes?.passport?.data.map(
                (passport) => passport?.attributes?.url
              )}`}
              // src={logo}
              alt="student image"
              className="w-full h-[12rem] sm:h-[8rem] rounded-xl"
            />
          </div>

          <div className="w-full sm:w-[60%] p-2  flex flex-col ">
            <h1 className="text-xl uppercase sm:text-2xl">
              {student?.attributes?.name}
            </h1>
            <div className="flex uppercase flex-col text-xl justify-between">
              <small>Examniation No: {student?.attributes?.admissionNo}</small>
            </div>
            {isResultReady === false ? (
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setIsResultReady(true);
                  }}
                >
                  View Result
                </button>
              </div>
            ) : null}
          </div>

          <div className="w-[10%]">
            {isResultReady && (
              <small
                onClick={handleResultLogout}
                className="cursor-pointer p-2 text-background bg-gray-300 rounded"
              >
                Logout
              </small>
            )}
          </div>
        </div>
        {isResultReady && <div>{<ResultPreview />}</div>}
      </div>
    </div>
  );
}

export default StudentDashboard;
