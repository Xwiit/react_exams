import LeftSidebar from "./LeftSidebar";
import Footer from "./Footer";
import TeacherDetails from "./TeacherDetails";
import { setLeftSideDisplay } from "../feature/uiOperationSlice";
import { useDispatch, useSelector } from "react-redux";
/*This isLogged variable helps me to decide who is logged in, if the teacher is logged, then i get the teacher from the local storage, if the studen is logged in then i get the student from the local storage */
const isLoggedIn = localStorage.getItem("teacher");

function Header() {
  const leftSideDisplay = useSelector(
    (state) => state.uiOperation.leftSideDisplay
  );
  const dispatch = useDispatch();
  function handleLeftSideClose() {
    dispatch(setLeftSideDisplay(false));
  }

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="bg-forecolor hidden  h-screen w-[20%] flex flex-col justify-between sm:block sm:flex Sm:flex-col sm:justify-between ">
        <div>
          <h1 className="w-full p-2 bg-forecolor1 text-gray-200 text-2xl text-center">
            {isLoggedIn ? "Teacher" : "Student"}
          </h1>
          <TeacherDetails />
        </div>

        <div className="w-full p-2">
          <Footer />
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div
        className={
          leftSideDisplay
            ? "bg-forecolor block sm:hidden absolute left-0  h-screen pb-30 w-[70%] flex flex-col transition-all z-10 flex flex-col justify-between"
            : "hidden"
        }
      >
        <div>
          <h1 className="w-full p-2 flex justify-between bg-forecolor1 text-gray-200 text-2xl text-center">
            <span onClick={handleLeftSideClose}>X</span>

            {isLoggedIn ? "Teacher" : "Student"}
          </h1>
          <TeacherDetails />
        </div>

        <div className="w-full p-2">
          <Footer />
        </div>
        <div className="w-full sm:hidden p-2 h-2">{/* <Footer /> */}</div>
      </div>
    </>
  );
}

export default Header;
