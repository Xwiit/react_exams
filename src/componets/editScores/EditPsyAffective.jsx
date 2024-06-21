import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import axios from "axios";
import {
  getAffectiveSkills,
  getPsychomotor,
  getSession,
  getStduent,
} from "../../feature/service";
// import { current } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

function EditPsyAffective() {
  //   const dispatch = useDispatch();
  //   const { id } = useParams();
  //   const [scoreID, setScoreID] = useState(0);
  const authToken = import.meta.env.VITE_ACCESS_TOKEN;

  // I fetch the student data from the service file
  const studentData = getStduent();
  const { name } = studentData.attributes;

  // I fetch the student Affective skills from the service file
  const rawAffectiveSkills = getAffectiveSkills();
  const affectiveSkills = rawAffectiveSkills?.data?.data;

  // I fetch the student Psychomotor skills from the service file
  const rawPsy = getPsychomotor();
  const psychomotor = rawPsy?.data?.data;

  const [affectiveFormData, setAffectiveFormData] = useState({
    stdID: studentData.id,
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
    stdID: studentData.id,
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
      className="overflow-y-scroll w-[100%] p-8 h-screen flex flex-col items-center justify-evenly pb-16 sm:flex-row sm:justify-between sm:flex scrollbar-thin
    scrollbar-webkit"
    >
      <div className="w-[90%] sm:w-[45%] h-auto p-4  bg-gray-500 rounded-md my-[1rem]">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-800">
            {`Edit ${name ? name : null}'s: Affective Skills`}
          </h2>
        </div>
        {affectiveSkills.map((skill) => {
          console.log(skill);
          return (
            <>
              <form onSubmit={handleAffectiveSubmit}>
                <input
                  type="number"
                  name="id"
                  placeholder="id"
                  required
                  className="input"
                  value={Number(skill.attributes.stdID)}
                  onChange={handleAffectiveChange}
                  disabled
                />

                {/* mathematics */}
                <div className="mb-2">
                  <input
                    type="number"
                    name="puntuality"
                    placeholder="puntuality"
                    required
                    className="input"
                    value={skill.attributes.puntuality}
                    onChange={handleAffectiveChange}
                  />
                  <input
                    type="number"
                    name="politeness"
                    value={skill.attributes.politeness}
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
                    value={skill.attributes.neatness}
                    required
                    onChange={handleAffectiveChange}
                  />
                  <input
                    className="input"
                    type="number"
                    name="honesty"
                    placeholder="honesty"
                    value={skill.attributes.honesty}
                    required
                    onChange={handleAffectiveChange}
                  />
                  <input
                    className="input"
                    type="number"
                    name="leadership"
                    placeholder="leadership"
                    value={skill.attributes.leadership}
                    required
                    onChange={handleAffectiveChange}
                  />
                  <input
                    className="input"
                    type="number"
                    name="cooperation"
                    placeholder="cooperation"
                    value={skill.attributes.cooperation}
                    required
                    onChange={handleAffectiveChange}
                  />
                  <input
                    className="input"
                    type="number"
                    name="attentiveness"
                    placeholder="attentiveness"
                    value={skill.attributes.attentiveness}
                    required
                    onChange={handleAffectiveChange}
                  />
                  <input
                    className="input"
                    type="number"
                    name="perserverance"
                    placeholder="perserverance"
                    value={skill.attributes.perserverance}
                    required
                    onChange={handleAffectiveChange}
                  />
                  <input
                    className="input"
                    type="number"
                    name="attitude"
                    placeholder="attitude"
                    value={skill.attributes.attitude}
                    required
                    onChange={handleAffectiveChange}
                  />
                </div>
                <button className="bg-forecolor cursor-pointer text-2xl, p-2 rounded-full w-full mt-2 text-gray-200">
                  Submit
                </button>
              </form>
            </>
          );
        })}
      </div>

      {/* pyschomotor inputation  */}
      <div className="w-[90%] sm:w-[45%] h-auto p-4  bg-gray-500 rounded-md">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-800">
            {`${name}'s: Psychomotor`}
          </h2>
        </div>
        {psychomotor.map((psy) => {
          <form onSubmit={handlePsychomotorSubmit}>
            <input
              type="number"
              name="id"
              placeholder="id"
              required
              className="input"
              value={Number(psy.attributes.stdID)}
              onChange={handlePsycomotorChange}
              disabled
            />
            <div className="mb-2">
              <input
                type="number"
                name="handwriting"
                placeholder="handwriting"
                required
                className="input"
                value={psy.attributes.handwriting}
                onChange={handlePsycomotorChange}
              />
              <input
                type="number"
                name="verbalFluency"
                value={psy.attributes.verbalFluency}
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
                value={psy.attributes.sport}
                required
                onChange={handlePsycomotorChange}
              />
              <input
                className="input"
                type="number"
                name="handlingTools"
                placeholder="handling tools"
                value={psy.attributes.handlingTools}
                required
                onChange={handlePsycomotorChange}
              />
              <input
                className="input"
                type="number"
                name="drawing"
                placeholder="drawing"
                value={psy.attributes.drawing}
                required
                onChange={handlePsycomotorChange}
              />
            </div>
            <button className="bg-forecolor cursor-pointer text-2xl, p-2 rounded-full w-full mt-2 text-gray-200">
              Submit
            </button>
          </form>;
        })}
        <div className="w-full sm:hidden p-2 h-2">{/* <Footer /> */}</div>
      </div>
    </div>
  );
}

export default EditPsyAffective;
