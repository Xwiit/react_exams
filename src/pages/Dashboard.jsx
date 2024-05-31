import LeftSidebar from "../componets/LeftSidebar";
import Footer from "../componets/Footer";
import { useEffect } from "react";
import { fetchStudent } from "../feature/fetchStudentSlice";
import { useDispatch, useSelector } from "react-redux";
import StudentList from "../componets/StudentList";

// import { useParams } from "react-router-dom";

function Dashboard() {
  // const { id } = useParams();

  const dispatch = useDispatch();

  //This useEffect called, loads all the student as the component is rendered
  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);

  return (
    <div className=" w-full h-screen">
      <StudentList />;
    </div>
  );
}

export default Dashboard;
