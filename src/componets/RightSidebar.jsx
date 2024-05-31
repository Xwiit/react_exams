import StudentDetail from "../pages/StudentDetail";
import { useSelector, useDispatch } from "react-redux";
import { setRightSideDisplay } from "../feature/uiOperationSlice";

function RightSidebar() {
  const displayStudentDetails = useSelector(
    (state) => state.uiOperation.rightSideDisplay
  );
  const dispatch = useDispatch();

  function handleMobileRightView() {
    dispatch(setRightSideDisplay(false));
  }
  return (
    <>
      {/* DESKTOP VIEW */}
      <div
        className={
          displayStudentDetails
            ? "bg-forecolor hidden sm:block absolute right-0 sm:relative  h-screen w-[70%] sm:w-[30%] flex flex-col justify-between sm:flex Sm:flex-col sm:justify-between px-2"
            : "hidden"
        }
      >
        {displayStudentDetails && <StudentDetail />}
      </div>

      {/* MOBILE  VIEW */}
      <div
        // modal background
        className={
          displayStudentDetails ? "sm:hidden w-full h-screen bg-gray-500 " : ""
        }
      >
        <div
          className={
            displayStudentDetails
              ? "bg-semiForeColor block sm:hidden absolute right-0  h-screen w-[70%] flex flex-col transition-all"
              : "hidden"
          }
        >
          <div className="flex justify-end px-4 py-2 h-auto ">
            <button
              className="text-gray-200 bg-btn p-2 text-2xl"
              onClick={handleMobileRightView}
            >
              X
            </button>
          </div>
          {displayStudentDetails && <StudentDetail />}
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
