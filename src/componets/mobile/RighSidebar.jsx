import StudentDetail from "../pages/StudentDetail";
import { useSelector } from "react-redux";

function RightSidebar() {
  const displayStudentDetails = useSelector(
    (state) => state.uiOperation.rightSideDisplay
  );
  return (
    <div className="bg-gray-500/60  h-screen w-full flex flex-col items-end">
      <div className="bg-forecolor w-[80%]">
        {displayStudentDetails && <StudentDetail />}
      </div>
    </div>
  );
}

export default RightSidebar;
