import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import axios from "axios";
import { getStduent } from "../../feature/service";

function EditRemark() {
  const studentData = getStduent();
  const { name } = studentData.attributes;

  const [remark, setRemark] = useState({
    stdID: studentData.id,
    daysPresent: "",
    daysAbsent: "",
    teacherRemark: "",
    headTeacherRemark: "",
  });

  //function handling the change of psychomotor
  function handleRemark(e) {
    setRemark({ ...remark, [e.target.name]: e.target.value });
  }

  //this function handles the submission of the Psychomotor
  async function handleRemarkSubmit(e) {
    e.preventDefault();
    console.log(remark);
    const data = remark;
    // console.log(data);
    const authToken = import.meta.env.VITE_ACCESS_TOKEN;
    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/remarks`;
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
    <div className=" w-[100%] p-8 h-screen flex flex-col items-center justify-evenly ">
      {/*Term Session */}
      <div className="w-[90%] sm:w-[50%] h-auto p-4  bg-gray-500 rounded-md">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-200">
            {name}: Remarks
          </h2>
        </div>
        <form onSubmit={handleRemarkSubmit}>
          <div className="mb-2">
            <input
              type="number"
              name="id"
              placeholder="id"
              required
              className="input"
              value={Number(remark.stdID)}
              onChange={handleRemark}
              hidden
            />
            <input
              type="number"
              name="daysPresent"
              placeholder="Days Present"
              required
              className="input"
              value={remark.daysPresent}
              onChange={handleRemark}
            />
            <input
              type="number"
              name="daysAbsent"
              value={remark.daysAbsent}
              placeholder="Days Absent"
              required
              className="input"
              onChange={handleRemark}
            />

            <textarea
              className="w-full max-w-lg h-30 sm:h-48 p-4 border border-gray-300 rounded-lg text-lg resize-y bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Teacher's Remark..."
              name="teacherRemark"
              value={remark.teacherRemark}
              required
              onChange={handleRemark}
            ></textarea>
            <textarea
              className="w-full max-w-lg h-30 sm:h-48 p-4 border border-gray-300 rounded-lg text-lg resize-y bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Head Teacher's Remark..."
              name="headTeacherRemark"
              value={remark.headTeacherRemark}
              required
              onChange={handleRemark}
            ></textarea>
          </div>
          <button className="bg-forecolor cursor-pointer text-2xl, p-2 rounded-full w-full mt-2 text-gray-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditRemark;
