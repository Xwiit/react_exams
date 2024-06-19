import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFirstTerm } from "../../feature/gradeSlice";
import { toast } from "react-toastify";
import { setEditModal } from "../../feature/uiOperationSlice";
import axios from "axios";
import { setEdithSubject } from "../../feature/editSubjectSlice";
import { getResult } from "../../feature/service";

function EditFirstTerm() {
  const dispatch = useDispatch();
  const [scoreID, setScoreID] = useState(0);

  //fetching the exam record of the current student so i can get its id for editting

  const result = getResult();
  const stdResult = result.data.data;

  //fecting the current editted scores from the editScoreSlice
  const stdID = useSelector((state) => state.editScores.subject.id);
  const subject = useSelector(
    (state) => state?.editScores?.subject?.subject?.subject?.subject
  );
  const firstCA = useSelector(
    (state) => state?.editScores?.subject?.subject?.subject?.firstCA
  );
  const secondCA = useSelector(
    (state) => state?.editScores?.subject?.subject?.subject?.secondCA
  );
  const exam = useSelector(
    (state) => state?.editScores?.subject?.subject?.subject?.exam
  );
  const total = useSelector(
    (state) => state?.editScores?.subject?.performance?.total
  );
  const average = useSelector(
    (state) => state?.editScores?.subject?.performance?.average
  );
  const grade = useSelector(
    (state) => state?.editScores?.subject?.performance?.grade
  );

  // I fetch the current student here to get his name on the edit form
  const studentDataString = localStorage.getItem("student");
  const studentData = JSON.parse(studentDataString);

  const { name } = studentData.attributes;

  //initialling the formData with empty objects
  const [formData, setFormData] = useState({
    subject: { subject: "subject", firstCA: "", secondCA: "", exam: "" },
    id: studentData.id,
  });

  function handleChange(subject, field, value) {
    setFormData((prevData) => ({
      ...prevData,
      [subject]: { ...prevData[subject], [field]: value },
    }));
  }
  const authToken = import.meta.env.VITE_ACCESS_TOKEN;
  //this function handles dispatch the formData to the gradeSlice form computation
  function handleEditFirstTerm(e) {
    e.preventDefault();
    if (
      formData.subject.subject === "subject" ||
      formData.subject.subject === "select subject"
    ) {
      toast.error("Kindly Select A Subject");
      return;
    }
    dispatch(setEdithSubject(formData));
    console.log(formData);
    toast.success("Computation Successfull", {
      autoClose: 1000,
    });
  }

  // I want to get the ID of the exam scores of the current student matching it with the current student id.
  useEffect(() => {
    stdResult.map((score) => setScoreID(score.id));
  }, [stdResult]); //

  async function handleSubmitEdittedScores(e) {
    e.preventDefault();
    const data = {
      [subject]: {
        subject,
        firstCA,
        secondCA,
        exam,
        grade,
        average,
        total,
      },
    };
    console.log(data);
    try {
      const url = `https://strapi-176070-0.cloudclusters.net/api/first-term-exams/${scoreID}`;
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
          toast.success("Editted", { autoClose: 1000 });
          console.log(response.data.data);
        })
        .catch((err) => {
          toast.error(err.response.data.message, { autoClose: 1000 });
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }

  return (
    <div className="w-[100%] h-screen flex items-center justify-center">
      <div className="w-[60%] h-auto p-4  bg-gray-500 rounded-md">
        <div>
          <h2 className="uppercase text-xl mb-2 text-center  text-gray-200">
            Edit {name} Examination Result
          </h2>
        </div>
        <form onSubmit={handleEditFirstTerm}>
          <input
            type="number"
            name="id"
            placeholder="id"
            required
            className="input"
            value={Number(formData.id)}
            onChange={handleChange}
            hidden
          />
          {/* mathematics */}
          <div className="mb-2">
            {/* <h2 className="formSubject">Mathematics</h2> */}
            <select
              className="p-2 w-full rounded-lg outline-none text-textColor1"
              required
              value={formData.subject.subject}
              onChange={(e) =>
                handleChange("subject", "subject", e.target.value)
              }
            >
              <option>Select Subject</option>
              <option value="mathematics">MATHEMATHICS</option>
              <option value="english">ENGLISH</option>
              <option value="agricultural sc">AGRICULTURAL SC</option>
              <option value="computer">COMPUTER</option>
              <option value="biology">BIOLOGY</option>
              <option value="economics">ECONOMICS</option>
            </select>
            <input
              type="number"
              name="firstCA"
              placeholder="First CA Score"
              required
              className="input"
              value={formData.subject.firstCA}
              onChange={(e) =>
                handleChange("subject", "firstCA", Number(e.target.value))
              }
            />
            <input
              type="number"
              name="secondCA"
              value={formData.subject.secondCA}
              placeholder="Second CA Score"
              required
              className="input"
              onChange={(e) =>
                handleChange("subject", "secondCA", Number(e.target.value))
              }
            />
            <input
              className="input"
              type="number"
              name="exam"
              placeholder="Exam Score"
              value={formData.subject.exam}
              required
              onChange={(e) =>
                handleChange("subject", "exam", Number(e.target.value))
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lightColor text-sm p-2 rounded-full"
            // onClick={handleEditFirstTerm}
          >
            Compute
          </button>
          <button
            onClick={handleSubmitEdittedScores}
            className="bg-forecolor cursor-pointer text-2xl, p-2 rounded-full w-full mt-2 text-gray-200"
          >
            Submit Scores
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditFirstTerm;
