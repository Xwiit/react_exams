import { useSelector, useDispatch } from "react-redux";
import getTeacher, { getAllStudents } from "../feature/service";
import { fetchStudentDetials } from "../feature/studentDetailSlice";
// import { Link } from "react-router-dom";
import { setRightSideDisplay } from "../feature/uiOperationSlice";
import { fetchResults } from "../feature/fetchResultSlices/firstTerm/fetchFirstTerm";
import { useEffect, useState } from "react";

function StudentList() {
  const dispatch = useDispatch();
  // const [allStudents, setAllStudents] = useState(null);

  const allStudents = useSelector((state) => state.fetchStudent.data);
  // const allStudents = getAllStudents();
  // useEffect(() => {
  //   setAllStudents(getAllStudents());
  // }, []);
  console.log("loging from studentListing", allStudents);
  //   here i get the teacher details from the localstorage by colling the function that actually gets the the teacher details from the localstorage
  const teacher = getTeacher();

  function handleRightSidebarDisplay(id, student) {
    dispatch(fetchResults(id));
    dispatch(setRightSideDisplay(true));
    localStorage.setItem("student", JSON.stringify(student));
    dispatch(fetchStudentDetials(id));
  }
  return (
    <div className="flex">
      {allStudents &&
        allStudents.map((student) => {
          if (student?.attributes?.stdClass === teacher?.user?.classTaking) {
            // console.log(student);
            return (
              <div
                key={student.id}
                onClick={() => handleRightSidebarDisplay(student.id, student)}
                className="w-[8rem] bg-forecolor m-4 cursor-pointer"
              >
                <div className="relative">
                  <img
                    className="relative w-full object-cover"
                    src={`https://strapi-176070-0.cloudclusters.net${student?.attributes?.passport?.data.map(
                      (passport) => passport?.attributes?.url
                    )}`}
                  />
                </div>
                <small className="text-gray-200 p-2 hover:bg-lightColor hover:text-background text-center block uppercase w-full">
                  {student?.attributes?.name.substring(0, 10)}...
                </small>
              </div>
              // </Link>
            );
          }
        })}
    </div>
  );
}

export default StudentList;
