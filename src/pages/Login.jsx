import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teacherLogin } from "../feature/teacherLoginSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  setStudentLoggedIn,
  setTeacherLoggedIn,
} from "../feature/uiOperationSlice";

function Login() {
  const navigate = useNavigate();
  //this selector help to access the state variables in the teacherLoginSlice
  const message = useSelector((state) => state.teacherLoginDetails.message);
  const teacherLoggedIn = useSelector(
    (state) => state.uiOperation.teacherLogin
  );
  const studentLoggedIn = useSelector(
    (state) => state.uiOperation.studentLogin
  );

  const dispatch = useDispatch();

  // this state variable holds the initial state of the teacher login details
  const [teacherLoginData, setTeacherLoginData] = useState({
    identifier: "",
    password: "",
  });

  // ---------------------------student login ---------------------------
  const [studentLoginData, setStudentLoginData] = useState({
    examPin: "",
  });
  console.log("student exam Pin", studentLoginData);

  function handleStudentSubmit(e) {
    e.preventDefault();
    localStorage.setItem(
      "examinationNo",
      JSON.stringify(studentLoginData.examPin)
    );
    navigate("/validate-student-pin");
    // // dispatch(teacherLogin(teacherLoginData)).then((result) => {
    // //   if (result.payload) {
    // //     toast.success("Login Successful");
    // //     navigate("/dashboard");
    // //   } else {
    // //     toast.error("Login Failed");
    // //   }
    // });
  }

  //with this dispatch the teacher data is been sent to the teacherLoginSlice
  function handleTeacherSubmit(e) {
    e.preventDefault();
    dispatch(teacherLogin(teacherLoginData)).then((result) => {
      if (result.payload) {
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        toast.error("Login Failed");
      }
    });
  }
  //   dispatch(teacherLogin(teacherLoginData));

  //   This function is collecting the data from the form and setting teachers value
  function handleLogin(e) {
    e.preventDefault();
    setTeacherLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  //making the student login form controllable
  function handleStudentChange(e) {
    e.preventDefault();
    setStudentLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleTeacherLoggedIn() {
    dispatch(setTeacherLoggedIn(true));
  }
  function handleStudentLoggedIn() {
    dispatch(setStudentLoggedIn(true));
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background">
      <div className="w-[20rem] h-auto bg-forecolor rounded-md p-4">
        {teacherLoggedIn && (
          <div>
            <h2 className="text-xl p-2 text-gray-300">Teacher Login</h2>
            <form>
              <input
                name="identifier"
                value={teacherLoginData.identifier}
                className="input"
                type="email"
                placeholder="Email"
                onChange={handleLogin}
              />
              <input
                name="password"
                value={teacherLoginData.password}
                className="input"
                type="password"
                placeholder="Password"
                onChange={handleLogin}
              />
              <button onClick={handleTeacherSubmit} className="btn">
                {message === "Loading" ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        )}
        {/* Student login form below */}
        {studentLoggedIn && (
          <div>
            <h2 className="text-xl p-2 text-gray-300">Check Student Result</h2>
            <form onSubmit={handleStudentSubmit}>
              <input
                name="examPin"
                value={studentLoginData.examPin}
                className="input"
                type="text"
                placeholder="Enter your examination pin"
                onChange={handleStudentChange}
              />
              <button className="btn">Check Result</button>
            </form>
          </div>
        )}
        <div className="text-center w-full">
          {studentLoggedIn && (
            <small
              className="text-gray-200 mt-6 cursor-pointer"
              onClick={handleTeacherLoggedIn}
            >
              Teacher Login
            </small>
          )}
          {teacherLoggedIn && (
            <small
              className="text-gray-200 mt-6 cursor-pointer"
              onClick={handleStudentLoggedIn}
            >
              Check Results
            </small>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
