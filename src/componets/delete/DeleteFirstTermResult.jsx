import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFirstTerm } from "../../feature/gradeSlice";
import { toast } from "react-toastify";
import { setEditModal } from "../../feature/uiOperationSlice";
import axios from "axios";
import { setEdithSubject } from "../../feature/editSubjectSlice";

function DeleteFirstTermResult() {
  const [scoreID, setScoreID] = useState(0);

  //fetching the exam record of the current student so i can get its id for editting
  const fetchScores = useSelector((state) => state.firstTermResult.result);
  console.log(fetchScores.data);

  // I fetch the current student here to get his name on the edit form
  const currentStudent = useSelector((state) => state.studentDetail.stdData);
  const { name } = currentStudent.attributes;

  // I want to get the ID of the exam scores of the current student matching it with the current student id.
  useEffect(() => {
    fetchScores.data.map((score) => setScoreID(score.id));
  }, [fetchScores]); //

  async function handleDeleteFirstTerm(e) {
    e.preventDefault();

    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/first-term-exams/${scoreID}`;
      console.log(scoreID);
      await axios
        .delete(url)
        .then((response) => {
          toast.success("Deleted", { autoClose: 1000 });
          console.log(response.data.data);
        })
        .catch((err) => {
          toast.error(err.response.data.message, { autoClose: 1000 });
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[100%] h-screen flex items-center justify-center">
      <div className="w-[60%] h-auto p-4  bg-gray-500 rounded-md">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-200">
            Delete {name} Examination Result
          </h2>
        </div>
        <form onSubmit={handleDeleteFirstTerm}>
          {/* <input
            type="number"
            name="id"
            placeholder="id"
            required
            className="input"
            value={Number(formData.id)}
            onChange={handleChange}
            hidden
          /> */}
          {/* subject selection*/}

          <button
            type="submit"
            className="w-full text-gray-200 bg-delete text-sm p-2 rounded-full uppercase"
            // onClick={handleEditFirstTerm}
          >
            Confirm!!!
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteFirstTermResult;
