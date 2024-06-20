import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import axios from "axios";
import { getSession } from "../feature/service";

function TermSession() {
  const navigate = useNavigate();

  const [session, setSession] = useState({
    term: "",
    academicSession: "",
    resumptionDate: "",
    daysInTerm: "",
  });

  //function handling the change of psychomotor
  function handleSessionChange(e) {
    setSession({ ...session, [e.target.name]: e.target.value });
  }

  //this function handles the submission of the Psychomotor
  async function handleSessionSubmit(e) {
    e.preventDefault();
    if (session.term === "Select Term") {
      toast.error("Kindly Select The Academic Term", { autoClose: 1000 });
      return;
    }
    const sessionID = getSession();
    const { id } = sessionID.data.data.attributes;
    const data = session;
    // console.log(data);
    const authToken = import.meta.env.VITE_ACCESS_TOKEN;
    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/sessions/${id}`;
      await axios
        .put(
          url,
          { data },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        .then((response) => {
          toast.success("Successfull", { autoClose: 1000 });
          console.log(response.data.data);
        })
        .catch((err) => {
          console.log(err);
          if (
            err.response.data.error.message === "This attribute must be unique"
          ) {
            toast.error(
              "You have computed this student Psychomotor, kindly edit, or delete.",
              { autoClose: 2000 }
            );
            console.log(err);
          }
        });
    } catch (error) {
      console.log(error);
    }
    navigate("/dashboard");
  }

  //   // I want to get the ID of the exam scores of the current student matching it with the current student id.
  //   useEffect(() => {
  //     fetchScores.map((score) => setScoreID(score.id));
  //   }, [fetchScores]); //

  return (
    <div className=" w-[100%] p-8 h-screen flex flex-col items-center justify-evenly ">
      {/*Term Session */}
      <div className="w-[90%] sm:w-[50%] h-auto p-4  bg-gray-500 rounded-md">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-200">
            Academic Session Details
          </h2>
        </div>
        <form onSubmit={handleSessionSubmit}>
          <div className="mb-2">
            <select
              className="p-2 w-full rounded-lg outline-none text-textColor1"
              name="term"
              required
              value={session.term}
              onChange={handleSessionChange}
            >
              <option>Select Term</option>
              <option value="First Term">First Term</option>
              <option value="Second Term">Second Term</option>
              <option value="Third Term">Third Term</option>
            </select>
            <input
              type="text"
              name="academicSession"
              placeholder="Academic Session"
              required
              className="input"
              value={session.academicSession}
              onChange={handleSessionChange}
            />
            <label className="text-gray-200">Resumtion Date</label>
            <input
              type="date"
              name="resumptionDate"
              value={session.resumptionDate}
              placeholder="verbal fluency"
              required
              className="input"
              onChange={handleSessionChange}
            />
            <input
              className="input"
              type="number"
              name="daysInTerm"
              placeholder="Total  Days in Term"
              value={session.daysInTerm}
              required
              onChange={handleSessionChange}
            />
          </div>
          <button className="bg-forecolor cursor-pointer text-2xl, p-2 rounded-full w-full mt-2 text-gray-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TermSession;
