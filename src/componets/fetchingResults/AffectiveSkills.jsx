import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAffectiveSkills } from "../../feature/service";
// import { fetchResult } from "../../feature/fetchResultSlices/firstTerm/fetchFirstTerm";

function AffectiveSkills() {
  const affectiveSkills = getAffectiveSkills();
  // const rawAffectiveSkills = localStorage.getItem("affectiveSkills");
  // const affectiveSkills = JSON.parse(rawAffectiveSkills);
  // console.log(psychomotor);
  const stdAffectiveSkills = affectiveSkills?.data?.data;

  return (
    <>
      {/* {mathScores.length > 0 && */}
      {stdAffectiveSkills
        ? stdAffectiveSkills.map((score) => {
            return (
              <React.Fragment key={score?.id}>
                <tr className="resultTable-td-bg">
                  <td>Attentiveness</td>
                  <td>{score?.attributes?.attentiveness}</td>
                </tr>
                <tr>
                  <td>Attitude</td>
                  <td>{score?.attributes?.attitude}</td>
                </tr>
                <tr>
                  <td>Cooperation</td>
                  <td>{score?.attributes?.cooperation}</td>
                </tr>
                <tr>
                  <td>Honesty</td>
                  <td>{score?.attributes?.honesty}</td>
                </tr>
                <tr>
                  <td>Leadership</td>
                  <td>{score?.attributes?.leadership}</td>
                </tr>
                <tr>
                  <td>Neatness</td>
                  <td>{score?.attributes?.neatness}</td>
                </tr>
                <tr>
                  <td>Perseverance</td>
                  <td>{score?.attributes?.perserverance}</td>
                </tr>
                <tr>
                  <td>Puntuality</td>
                  <td>{score?.attributes?.puntuality}</td>
                </tr>
              </React.Fragment>
            );
          })
        : "No Affective Skills"}
    </>
  );
}

export default AffectiveSkills;
