// import { useNavigate } from "react-router-dom";

function handleLogout() {
  localStorage.removeItem("teacher");
  localStorage.removeItem("session");
  localStorage.removeItem("student");
  localStorage.removeItem("remarks");
  localStorage.removeItem("affectiveSkills");
  localStorage.removeItem("psychomotor");
  localStorage.removeItem("result");
  localStorage.removeItem("allStudents");

  window.location.href = "/";
}

function Footer() {
  return (
    <>
      <button onClick={handleLogout} className="btn">
        Logout
      </button>
      <h3 className="text-gray-200 mt-2 text-center">Powered by XwiitTech</h3>
    </>
  );
}

export default Footer;
