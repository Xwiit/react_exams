import { useSelector, useDispatch } from "react-redux";
import getTeacher from "../feature/service";
import { fetchStudent } from "../feature/fetchStudentSlice";
import { Link } from "react-router-dom";

function StudentList() {
  const dispatch = useDispatch();

  //   function handleStudentDetail(studentId) {
  //     dispatch(fetchStudent(studentId));
  //   }
  // allStudents is getting the students from the redux thunk in the fetchStudent.js file
  const allStudents = useSelector((state) => state.fetchStudent.data);
  //   here i get the teacher details from the localstorage by colling the function that actually gets the the teacher details from the localstorage
  const teacher = getTeacher();
  return (
    <div className="flex">
      {allStudents &&
        allStudents?.map((student) => {
          if (student.attributes.stdclass === teacher.user.classTaking) {
            // console.log(student);
            return (
              <Link
                to={`/dashboard/studentDetails/${student.id}`}
                key={student.id}
              >
                <div
                  //   here i sent the student id to the fetchStudent funcion in fetchStudentSlice to get the student details on the Rightsidebar
                  onClick={() => dispatch(fetchStudent(student.id))}
                  className="w-[8rem] bg-forecolor m-4 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      className="relative w-full object-cover"
                      src={`http://localhost:1337${student?.attributes?.passport?.data?.attributes?.url}`}
                    />
                  </div>
                  <small className="text-gray-200 p-2 hover:bg-lightColor hover:text-background text-center block uppercase w-full">
                    {student.attributes.name.substring(0, 10)}...
                  </small>
                </div>
              </Link>
            );
          }
        })}
    </div>
  );
}

export default StudentList;
