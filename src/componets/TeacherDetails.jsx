import { Link } from "react-router-dom";
import getTeacher from "../feature/service";
import { useDispatch, useSelector } from "react-redux";

function TeacherDetails() {
  const dispatch = useDispatch();
  //This function helps to get the teacher details from the local storage
  const teacher = getTeacher();
  // console.log(teacher);
  const { username, email, classTaking } = teacher.user;

  return (
    <>
      <ul className=" w-full p-2   ">
        <li className="leftSideLink">
          <span>👲</span>
          <span>{username}</span>
        </li>
        <li className="leftSideLink">
          <span>📩</span>
          <span>{email}</span>
        </li>
        <li className="leftSideLink">
          <span>🖊️</span>
          <span className="uppercase">{classTaking}</span>
        </li>
      </ul>
      <ul className="w-full p-2">
        <Link onClick={() => dispatch({ studentList: true })} to="/dashboard">
          <li className="leftSideLink">
            <span>Dashboard</span>
          </li>
        </Link>
        <Link onClick={() => dispatch({ studentList: true })} to="/session">
          <li className="leftSideLink">
            <span>Session</span>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default TeacherDetails;
