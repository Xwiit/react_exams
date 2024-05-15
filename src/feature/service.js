//This function helps to get the teacher details from the local storage
function getTeacher() {
  let teacher = localStorage.getItem("teacher");
  if (teacher) {
    return JSON.parse(teacher);
  } else {
    return null;
  }
}
export default getTeacher;
