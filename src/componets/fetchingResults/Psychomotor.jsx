import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
// import { fetchResult } from "../../feature/fetchResultSlices/firstTerm/fetchFirstTerm";

function FetchPsychomotor() {
  const rawPsychomotor = localStorage.getItem("psychomotor");
  const psychomotor = JSON.parse(rawPsychomotor);
  // console.log(psychomotor);
  const stdPsychomotor = psychomotor?.data?.data;

  return (
    <>
      {/* {mathScores.length > 0 && */}
      {stdPsychomotor
        ? stdPsychomotor.map((score) => {
            return (
              <React.Fragment key={score?.id}>
                <tr className="resultTable-td-bg">
                  <td>Drawing</td>
                  <td>{score?.attributes?.drawing}</td>
                </tr>
                <tr>
                  <td>Handling Tools</td>
                  <td>{score?.attributes?.handlingTools}</td>
                </tr>
                <tr>
                  <td>Sport</td>
                  <td>{score?.attributes?.sport}</td>
                </tr>
                <tr>
                  <td>Verbal Fluency</td>
                  <td>{score?.attributes?.verbalFluency}</td>
                </tr>
                <tr>
                  <td>Handwriting</td>
                  <td>{score?.attributes?.handwriting}</td>
                </tr>
              </React.Fragment>
            );
          })
        : "No Psychomotor"}
    </>
  );
}

export default FetchPsychomotor;
