import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchResults } from "../../feature/fetchResultSlices/firstTerm/fetchFirstTerm";
import { getResult } from "../../feature/service";

function FetchFirstTerm() {
  const result = getResult();
  const stdResult = result?.data?.data;

  return (
    <>
      {/* {mathScores.length > 0 && */}
      {stdResult
        ? stdResult.map((score) => {
            return (
              <React.Fragment key={score?.id}>
                <tr className="resultTable-td-bg">
                  <td>{score?.attributes?.mathematics?.subject}</td>
                  <td>{score?.attributes?.mathematics?.firstCA}</td>
                  <td>{score?.attributes?.mathematics?.secondCA}</td>
                  <td>{score?.attributes?.mathematics?.exam}</td>
                  <td>{score?.attributes?.mathematics?.average}</td>
                  <td>{score?.attributes?.mathematics?.total}</td>
                  <td>{score?.attributes?.mathematics?.grade}</td>
                </tr>
                <tr className="resultTable-td">
                  <td>{score?.attributes?.english?.subject}</td>
                  <td>{score?.attributes?.english?.firstCA}</td>
                  <td>{score?.attributes?.english?.secondCA}</td>
                  <td>{score?.attributes?.english?.exam}</td>
                  <td>{score?.attributes?.english?.average}</td>
                  <td>{score?.attributes?.english?.total}</td>
                  <td>{score?.attributes?.english?.grade}</td>
                </tr>
                <tr className="resultTable-td-bg">
                  <td>{score?.attributes?.agric?.subject}</td>
                  <td>{score?.attributes?.agric?.firstCA}</td>
                  <td>{score?.attributes?.agric?.secondCA}</td>
                  <td>{score?.attributes?.agric?.exam}</td>
                  <td>{score?.attributes?.agric?.average}</td>
                  <td>{score?.attributes?.agric?.total}</td>
                  <td>{score?.attributes?.agric?.grade}</td>
                </tr>
                <tr className="resultTable-td">
                  <td>{score?.attributes?.biology?.subject}</td>
                  <td>{score?.attributes?.biology?.firstCA}</td>
                  <td>{score?.attributes?.biology?.secondCA}</td>
                  <td>{score?.attributes?.biology?.exam}</td>
                  <td>{score?.attributes?.biology?.average}</td>
                  <td>{score?.attributes?.biology?.total}</td>
                  <td>{score?.attributes?.biology?.grade}</td>
                </tr>
                <tr className="resultTable-td-bg">
                  <td>{score?.attributes?.computer?.subject}</td>
                  <td>{score?.attributes?.computer?.firstCA}</td>
                  <td>{score?.attributes?.computer?.secondCA}</td>
                  <td>{score?.attributes?.computer?.exam}</td>
                  <td>{score?.attributes?.computer?.average}</td>
                  <td>{score?.attributes?.computer?.total}</td>
                  <td>{score?.attributes?.computer?.grade}</td>
                </tr>
                <tr className="resultTable-td">
                  <td>{score?.attributes?.economics?.subject}</td>
                  <td>{score?.attributes?.economics?.firstCA}</td>
                  <td>{score?.attributes?.economics?.secondCA}</td>
                  <td>{score?.attributes?.economics?.exam}</td>
                  <td>{score?.attributes?.economics?.average}</td>
                  <td>{score?.attributes?.economics?.total}</td>
                  <td>{score?.attributes?.economics?.grade}</td>
                </tr>
              </React.Fragment>
            );
          })
        : "No Result"}
    </>
  );
}

export default FetchFirstTerm;
