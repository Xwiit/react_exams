import { useSelector } from "react-redux";

function StudentDashboard() {
  // const selector = useSelector();
  const student = useSelector((state) => state.studentResult.studentDetails);
  const stdID = student.id;
  return (
    <div className="bg-background w-full h-screen flex justify-center">
      <div
        className="w-[90%] sm:w-[70%] h-auto overflow-y-scroll scrollbar-thin 
scrollbar-webkit bg-gray-200"
      >
        <div className="bg-forecolor w-full m-4rem h-[20%] flex justify-center items-center">
          <div className="w-[20%]">
            <img
              // src={`http://localhost:5173/${student?.attributes?.url}`}
              alt="student image"
              className="w-full"
            />
          </div>
          <div className="">
            <h1>{student?.attributes?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
