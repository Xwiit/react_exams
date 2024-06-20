import { Outlet } from "react-router-dom";
import LeftSidebar from "../componets/LeftSidebar";
import RightSidebar from "../componets/RightSidebar";
import {
  setRightSideDisplay,
  setLeftSideDisplay,
} from "../feature/uiOperationSlice";
import { useDispatch, useSelector } from "react-redux";
// import { getStduent } from "../feature/service";

function AppLayout() {
  const currentStudent = useSelector((state) => state.studentDetail.stdData);
  const dispatch = useDispatch();
  function handleMobileRightView() {
    dispatch(setRightSideDisplay(true));
  }
  function handleLeftSideview() {
    dispatch(setLeftSideDisplay(true));
  }

  return (
    <div className=" h-8 flex  justify-between w-full sm:h-screen fixed">
      <LeftSidebar />
      <main className="w-full mb-4 h-screen bg-background">
        <div className="sm:hidden flex items-center justify-between h-[5%] bg-forecolor">
          <button
            onClick={handleLeftSideview}
            className="p-2 text-gray-200 bg-forecolor1 "
          >
            ✏️
          </button>
          <span className="text-gray-200">
            {currentStudent?.attributes?.name}
          </span>
          <button
            className="p-2 text-gray-200 bg-forecolor1 "
            onClick={handleMobileRightView}
          >
            🧑‍🎓
          </button>
        </div>
        <Outlet />
      </main>
      <RightSidebar />
    </div>
  );
}

export default AppLayout;
