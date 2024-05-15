import LeftSidebar from "../componets/LeftSidebar";
import Footer from "../componets/Footer";
import { useEffect } from "react";
import { fetchStudent } from "../feature/fetchStudentSlice";
import { useDispatch, useSelector } from "react-redux";
import StudentList from "../componets/StudentList";
import { Outlet } from "react-router-dom";
import MathExam from "../componets/subjects/MathExam";

function Dashboard() {
  const dispatch = useDispatch();

  /*this redux state variables are used to the state of the subjecs in the uiOperation 
  Slice with this variable i can the what to display on the dashboard, when a subject is click for exam computation*/
  const displayMathForm = useSelector((state) => state.uiOperation.math);
  const displayStudentList = useSelector(
    (state) => state.uiOperation.studentList
  );

  // console.log(allStudents);

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);

  const isLoggedIn = localStorage.getItem("teacher");
  return (
    // This section holds the leftsidebar component
    <div className=" h-8 flex justify-between">
      <div className="bg-forecolor hidden  h-screen w-[20%] flex flex-col justify-between sm:block sm:flex Sm:flex-col sm:justify-between ">
        <div>
          <h1 className="w-full p-2 bg-forecolor1 text-gray-200 text-2xl text-center">
            {isLoggedIn ? "Teacher" : "Student"}
          </h1>
          <LeftSidebar />
        </div>

        <div className="w-full p-2">
          <Footer />
        </div>
      </div>

      {/* This section holds the list of student in a class  */}
      <div className="bg-background w-[100%]  h-screen sm:w-[65%]">
        {/* student search  */}
        <div className="flex justify-center items-center px-12 bg-lightColor">
          <input
            className="w-8 input  "
            type="text"
            placeholder="Search Student"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[60%]">
            {displayStudentList && <StudentList />}
            {displayMathForm && <MathExam />}
          </div>
          <div>Showing Results</div>
        </div>
        {/* This short circuting decides what displays on the dashbard base on thier state in the uiOperationSlice */}
      </div>

      {/* This section holds each student details right sidebar */}
      <div className="bg-semiForeColor hidden sm:block h-screen w-[25%]">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
