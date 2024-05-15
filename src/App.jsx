import "./App.css";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
// import Navbar from "./componets/Navbar";
// import Sidebar from "./componets/Sidebar";
import Dashboard from "./pages/Dashboard";
// import Footer from "./componets/Footer";
import Login from "./pages/Login";
import StudentDetails from "./pages/StudentDetail";

function App() {
  const router = Router([
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "studentDetails/:id",
          element: <StudentDetails />,
        },
      ],
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
