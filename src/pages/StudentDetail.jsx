import Button from "../componets/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  // setStudentList,
  setShowResult,
  setShowExamForm,
  setEditModal,
} from "../feature/uiOperationSlice";
import { useNavigate } from "react-router-dom";

// import { fetchResult } from "../feature/fetchResultSlices/firstTerm/fetchFirstTerm";
import { Link } from "react-router-dom";
// import { fetchPsychomotor } from "../feature/fetchResultSlices/firstTerm/fetchPsychomotor";
import { fetchResults } from "../feature/fetchResultSlices/firstTerm/fetchFirstTerm";
import { useEffect, useState } from "react";
import { getStduent } from "../feature/service";
// import { subjects } from "../feature/subjects";

function StudentDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stdDetails, setStdDetails] = useState(null);

  useEffect(() => {
    //   const rawStudent = localStorage.getItem("student");
    //   const student = JSON.parse(rawStudent);
    //   const currentStudent = student;
    setStdDetails(getStduent());
  }, []);
  // const stdDetails = getStduent();

  // this variable fetches the current student from the Student Detail Slice
  // const currentStudent = useSelector((state) => state.studentDetail.stdData);

  //This function changes the state of the exam form in the uiOperationslice from false to true
  function handleShowExamForm() {
    dispatch(setShowExamForm(true));
  }

  //this function sends the curent student id to the fetchResult Async Thunk in the fetchResultSlice aslo setting the show result component state to true.
  // function fetchPsychomotor() {
  //   dispatch(fetchResult(currentStudent.id));
  // }
  function handleFetchResult() {
    // dispatch(fetchPsychomotor(currentStudent.id));
    // dispatch(fetchResults(currentStudent.id));
    // fetchPsychomotor();
    dispatch(setShowResult(true));
  }

  function handleEditExamScores() {
    dispatch(fetchResults(stdDetails.id));
    dispatch(setEditModal(true));
  }

  // This variable accepts student data from the async function below

  return (
    <div className="w-full mt-8">
      <div className="flex flex-col items-center  justify-center">
        <img
          src={`https://strapi-176070-0.cloudclusters.net${stdDetails?.attributes?.passport?.data.map(
            (passport) => passport?.attributes?.url
          )}`}
          alt={stdDetails?.attributes?.name}
          className="rounded h-[8rem] w-[8rem] object-cover m-auto"
        />
        <table className="studentDetailsTable">
          <thead>
            <tr>
              <td className="text-center" colSpan="2">
                Personal Details
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>{stdDetails?.attributes?.name}</td>
            </tr>
            <tr>
              <td>Admission No</td>
              <td>{stdDetails?.attributes?.admissionNo}</td>
            </tr>
          </tbody>
        </table>

        <div className="p-2">
          <div className="mb-4 border-b-2 flex flex-wrap">
            <Link
              to="/first-term-exam"
              className="desicionBtn  bg-background"
              onClick={handleShowExamForm}
            >
              Compute 1st Term
            </Link>
            <Link
              to="/first-term-result"
              className="desicionBtn bg-background"
              onClick={handleFetchResult}
            >
              View Result
            </Link>
            <Link
              to="/edit-first-term-result"
              onClick={handleEditExamScores}
              className="desicionBtn  bg-background"
            >
              Edit
            </Link>
            <Link
              to="/delete-first-term-result"
              className="desicionBtn bg-delete"
            >
              Delete
            </Link>
            <Link
              to="/first-term-affective-psy"
              className="desicionBtn bg-background"
            >
              Psy. & Aff.
            </Link>
            <Link to="/remarks" className="desicionBtn bg-background">
              Remarks
            </Link>
            <small className="desicionBtn  bg-background">Share</small>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default StudentDetail;
