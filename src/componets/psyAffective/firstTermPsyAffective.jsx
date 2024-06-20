import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import axios from "axios";
import { getStduent } from "../../feature/service";
import { current } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

function PsyAffective() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [scoreID, setScoreID] = useState(0);
  const authToken = import.meta.env.VITE_ACCESS_TOKEN;

  //   //fetching the exam record of the current student so i can get its id for editting
  //   const fetchScores = useSelector((state) => state.firstTermResult.result);

  //   //fecting the current editted scores from the editScoreSlice
  //   const stdID = useSelector((state) => state.editScores.subject.id);
  //   const subject = useSelector(
  //     (state) => state?.editScores?.subject?.subject?.subject?.subject
  //   );
  //   const firstCA = useSelector(
  //     (state) => state?.editScores?.subject?.subject?.subject?.firstCA
  //   );
  //   const secondCA = useSelector(
  //     (state) => state?.editScores?.subject?.subject?.subject?.secondCA
  //   );
  //   const exam = useSelector(
  //     (state) => state?.editScores?.subject?.subject?.subject?.exam
  //   );
  //   const total = useSelector(
  //     (state) => state?.editScores?.subject?.performance?.total
  //   );
  //   const average = useSelector(
  //     (state) => state?.editScores?.subject?.performance?.average
  //   );
  //   const grade = useSelector(
  //     (state) => state?.editScores?.subject?.performance?.grade
  //   );

  // I fetch the current student here to get his name on the edit form
  // const currentStudent = useSelector((state) => state.studentDetail.stdData);

  const stdData = getStduent();
  console.log(stdData);
  const currentStudent = stdData.attributes;
  const { name } = currentStudent;
  //initialling the formData with empty objects
  const [affectiveFormData, setAffectiveFormData] = useState({
    stdID: id,
    puntuality: "",
    politeness: "",
    neatness: "",
    honesty: "",
    leadership: "",
    cooperation: "",
    attentiveness: "",
    perserverance: "",
    attitude: "",
  });
  const [psyFormData, setPsyFormData] = useState({
    stdID: id,
    handwriting: "",
    verbalFluency: "",
    sport: "",
    handlingTools: "",
    drawing: "",
  });

  //function handling the change of Affective skills
  function handleAffectiveChange(e) {
    setAffectiveFormData({
      ...affectiveFormData,
      [e.target.name]: Number(e.target.value),
    });
  }

  //function handling the change of psychomotor
  function handlePsycomotorChange(e) {
    setPsyFormData({ ...psyFormData, [e.target.name]: Number(e.target.value) });
  }

  //this function handles the submission of the affective skills
  async function handleAffectiveSubmit(e) {
    e.preventDefault();
    const data = affectiveFormData;
    console.log("Afective skills", data);

    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/affective-skills`;
      await axios
        .post(
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
          }
        });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }

  //this function handles the submission of the Psychomotor
  async function handlePsychomotorSubmit(e) {
    e.preventDefault();
    const data = psyFormData;
    console.log("pyschomotor", data);
    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/psychomotors`;
      await axios
        .post(
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
    console.log(data);
  }

  //   // I want to get the ID of the exam scores of the current student matching it with the current student id.
  //   useEffect(() => {
  //     fetchScores.map((score) => setScoreID(score.id));
  //   }, [fetchScores]); //

  return (
    <div
      className="overflow-y-scroll w-[100%] p-8 h-screen flex flex-col items-center justify-evenly sm:flex-row sm:justify-between sm:flex scrollbar-thin
    scrollbar-webkit"
    >
      <div className="w-[90%] sm:w-[45%] h-auto p-4  bg-gray-500 rounded-md mb-[1rem]">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-200">
            {`${name}'s: Affective Skills`}
          </h2>
        </div>
        <form onSubmit={handleAffectiveSubmit}>
          <input
            type="number"
            name="id"
            placeholder="id"
            required
            className="input"
            value={Number(affectiveFormData.stdID)}
            onChange={handleAffectiveChange}
            hidden
          />

          {/* mathematics */}
          <div className="mb-2">
            <input
              type="number"
              name="puntuality"
              placeholder="puntuality"
              required
              className="input"
              value={affectiveFormData.puntuality}
              onChange={handleAffectiveChange}
            />
            <input
              type="number"
              name="politeness"
              value={affectiveFormData.politeness}
              placeholder="politeness"
              required
              className="input"
              onChange={handleAffectiveChange}
            />
            <input
              className="input"
              type="number"
              name="neatness"
              placeholder="neatness"
              value={affectiveFormData.neatness}
              required
              onChange={handleAffectiveChange}
            />
            <input
              className="input"
              type="number"
              name="honesty"
              placeholder="honesty"
              value={affectiveFormData.honesty}
              required
              onChange={handleAffectiveChange}
            />
            <input
              className="input"
              type="number"
              name="leadership"
              placeholder="leadership"
              value={affectiveFormData.leadership}
              required
              onChange={handleAffectiveChange}
            />
            <input
              className="input"
              type="number"
              name="cooperation"
              placeholder="cooperation"
              value={affectiveFormData.cooperation}
              required
              onChange={handleAffectiveChange}
            />
            <input
              className="input"
              type="number"
              name="attentiveness"
              placeholder="attentiveness"
              value={affectiveFormData.attentiveness}
              required
              onChange={handleAffectiveChange}
            />
            <input
              className="input"
              type="number"
              name="perserverance"
              placeholder="perserverance"
              value={affectiveFormData.perserverance}
              required
              onChange={handleAffectiveChange}
            />
            <input
              className="input"
              type="number"
              name="attitude"
              placeholder="attitude"
              value={affectiveFormData.attitude}
              required
              onChange={handleAffectiveChange}
            />
          </div>
          <button className="bg-forecolor cursor-pointer text-2xl, p-2 rounded-full w-full mt-2 text-gray-200">
            Submit
          </button>
        </form>
      </div>

      {/* pyschomotor inputation  */}
      <div className="w-[90%] sm:w-[45%] h-auto p-4  bg-gray-500 rounded-md">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-200">
            {`${name}'s: Psychomotor`}
          </h2>
        </div>
        <form onSubmit={handlePsychomotorSubmit}>
          <input
            type="number"
            name="id"
            placeholder="id"
            required
            className="input"
            value={Number(psyFormData.stdID)}
            onChange={handlePsycomotorChange}
            hidden
          />
          <div className="mb-2">
            <input
              type="number"
              name="handwriting"
              placeholder="handwriting"
              required
              className="input"
              value={psyFormData.handwriting}
              onChange={handlePsycomotorChange}
            />
            <input
              type="number"
              name="verbalFluency"
              value={psyFormData.verbalFluency}
              placeholder="verbal fluency"
              required
              className="input"
              onChange={handlePsycomotorChange}
            />
            <input
              className="input"
              type="number"
              name="sport"
              placeholder="sport"
              value={psyFormData.sport}
              required
              onChange={handlePsycomotorChange}
            />
            <input
              className="input"
              type="number"
              name="handlingTools"
              placeholder="handling tools"
              value={psyFormData.handlingTools}
              required
              onChange={handlePsycomotorChange}
            />
            <input
              className="input"
              type="number"
              name="drawing"
              placeholder="drawing"
              value={psyFormData.drawing}
              required
              onChange={handlePsycomotorChange}
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

export default PsyAffective;
