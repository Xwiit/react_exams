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
import { Protector } from "./feature/service";
import ExamForm from "./componets/exams/FirstTermExamForm";
import AppLayout from "./pages/AppLayout";
import ResultPreview from "./componets/ResultPreview";
import EditFirstTerm from "./componets/editScores/EditFirstTerm";
import DeleteFirstTermResult from "./componets/delete/DeleteFirstTermResult";
import PsyAffective from "./componets/psyAffective/firstTermPsyAffective";
import TermSession from "./componets/Session";
import Remarks from "./componets/remark/Remarks";
import EditPsyAffective from "./componets/editScores/EditPsyAffective";
import EditRemark from "./componets/editScores/EditRemark";

function App() {
  const router = Router([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Protector Component={<Dashboard />} />,
        },
        {
          path: "/first-term-exam",
          element: <Protector Component={<ExamForm />} />,
        },
        {
          path: "/first-term-result",
          element: <Protector Component={<ResultPreview />} />,
        },
        {
          path: "/edit-first-term-result",
          element: <Protector Component={<EditFirstTerm />} />,
        },
        {
          path: "/delete-first-term-result",
          element: <Protector Component={<DeleteFirstTermResult />} />,
        },
        {
          path: "/first-term-affective-psy",
          element: <Protector Component={<PsyAffective />} />,
        },
        {
          path: "/session",
          element: <Protector Component={<TermSession />} />,
        },
        {
          path: "/remarks",
          element: <Protector Component={<Remarks />} />,
        },
        {
          path: "/edit-psycomotor-affective-skills",
          element: <Protector Component={<EditPsyAffective />} />,
        },
        {
          path: "/edit-remark",
          element: <Protector Component={<EditRemark />} />,
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
