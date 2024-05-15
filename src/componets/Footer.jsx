// import { useNavigate } from "react-router-dom";

function handleLogout() {
  localStorage.removeItem("teacher");
  window.location.href = "/";
}

function Footer() {
  return (
    <>
      <button onClick={handleLogout} className="btn">
        Logout
      </button>
      <h3 className="text-gray-200 mt-2">Powered by XwiitTech</h3>
    </>
  );
}

export default Footer;
