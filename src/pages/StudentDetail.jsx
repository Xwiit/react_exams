import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../componets/Button";
import { useDispatch, useSelector } from "react-redux";
import { setStudentList, setMath } from "../feature/uiOperationSlice";
// import { subjects } from "../feature/subjects";

function StudentDetail() {
  const dispatch = useDispatch();

  //This function changes the state of the math in the uiOperationslice from false to true
  function handleSetMath() {
    dispatch(setMath(true));
  }
  //This function changes the state of the english in the uiOperationslice from false to true
  function handleSetEnglish() {
    dispatch(setMath(true));
  }

  // this variable accepts the studentId from the url as an object so i distructure and rename it as id
  const { id } = useParams();

  // This variable accepts student data from the async function below
  const [student, setStudent] = useState();

  // this useEffect function will fetch the student data from the server and set it to the state variable student
  useEffect(() => {
    async function getStudent() {
      try {
        const url = `http://localhost:1337/api/students/${Number(
          id
        )}?populate=*`;
        const response = await axios.get(url);

        setStudent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getStudent();
  }, [id]);

  console.log(student);
  return (
    <div className="w-full mt-8">
      <div className="flex flex-col items-center  justify-center">
        <img
          src={`http://localhost:1337${student?.attributes?.passport?.data?.attributes?.url}`}
          alt={student?.attributes?.name}
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
              <td>{student?.attributes?.name}</td>
            </tr>
            <tr>
              <td>Admission No</td>
              <td>{student?.attributes?.admissionNo}</td>
            </tr>
          </tbody>
        </table>

        <div className="p-2">
          <h1 className="text-gray-200 p-2">Compute CA and Exam Results</h1>
          <Button onClick={handleSetMath}>Mathematics</Button>
          <Button onClick={handleSetEnglish}>English</Button>
          <Button onClick={handleSetEnglish}>Agric Sc</Button>
          <Button onClick={handleSetEnglish}>Biologyh</Button>
          <Button onClick={handleSetEnglish}>Fine Art</Button>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default StudentDetail;
