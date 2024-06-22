import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teacherLogin } from "../feature/teacherLoginSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setTeacherLoggedIn } from "../feature/uiOperationSlice";

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

  //with this dispatch the teacher data is been sent to the teacherLoginSlice
  function handleSubmitLogin(e) {
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

  function handleTeacherLoggedIn() {
    dispatch(setTeacherLoggedIn(true));
  }
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      {teacherLoggedIn && (
        <div className="w-[20rem] h-[18rem] bg-forecolor rounded-md p-4">
          <h2 className="text-xl p-2 text-gray-300">Login</h2>
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
            <button onClick={handleSubmitLogin} className="btn">
              {message === "Loading" ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      )}
      {/* Student login form below */}
      {studentLoggedIn && (
        <div>
          <form>
            <input
              name="examPin"
              value={teacherLoginData.password}
              className="input"
              type="text"
              placeholder="Enter your examination pin"
              onChange={handleLogin}
            />
            <button onClick={handleSubmitLogin} className="btn">
              Check Result
            </button>
          </form>
        </div>
      )}
      <h3 className="text-gray-200 mt-2" onClick={handleTeacherLoggedIn}>
        Teacher Login
      </h3>
    </div>
  );
}

export default Login;
