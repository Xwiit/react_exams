import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFirstTerm } from "../../feature/gradeSlice";
import { toast } from "react-toastify";
import FirstTermScores from "../submitScore/FirstTermScores";
import { getStduent } from "../../feature/service";

function ExamForm() {
  const dispatch = useDispatch();
  // this variable fetches the current student from the Student Detail Slice
  // const currentStudent = useSelector((state) => state.studentDetail.stdData);
  const stdData = getStduent();
  const currentStudent = stdData;
  console.log(currentStudent);

  const [formData, setFormData] = useState({
    math: { subject: "mathematics", firstCA: "", secondCA: "", exam: "" },
    english: { subject: "english", firstCA: "", secondCA: "", exam: "" },
    agric: { subject: "agricultural Sc", firstCA: "", secondCA: "", exam: "" },
    computer: { subject: "computer sc", firstCA: "", secondCA: "", exam: "" },
    biology: { subject: "biology", firstCA: "", secondCA: "", exam: "" },
    economics: { subject: "economics", firstCA: "", secondCA: "", exam: "" },
    id: Number(currentStudent.id),
  });

  function handleChange(subject, field, value) {
    setFormData((prevData) => ({
      ...prevData,
      [subject]: { ...prevData[subject], [field]: value },
    }));
  }

  //this function handles dispatch the formData to the gradeSlice form computation
  function handleSubmitFirstTerm(e) {
    e.preventDefault();
    dispatch(setFirstTerm(formData));

    toast.success("Computation Successfull", {
      autoClose: 1000,
    });
  }
  return (
    <div className="w-[100%] h-screen flex items-center justify-center">
      <div
        className="w-[80%] sm:w-[60%] h-[90%] scrollbar-thin
    scrollbar-webkit overflow-scroll p-4  bg-gray-500 rounded-md"
      >
        <form onSubmit={handleSubmitFirstTerm}>
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

          {/*-------------------------- mathematics----------------- */}
          <div className="mb-2">
            {/* <h2 className="formSubject">Mathematics</h2> */}
            <input
              type="number"
              name="mathematics"
              placeholder="Mathematics"
              required
              className="input formSubject"
              value={formData.math.subject}
              onChange={(e) =>
                handleChange("math", "subject", Number(e.target.value))
              }
              disabled
            />
            <input
              type="number"
              name="firstCA"
              placeholder="First CA Score"
              required
              className="input"
              value={formData.math.firstCA}
              onChange={(e) =>
                handleChange("math", "firstCA", Number(e.target.value))
              }
            />
            <input
              type="number"
              name="secondCA"
              value={formData.math.secondCA}
              placeholder="Second CA Score"
              required
              className="input"
              onChange={(e) =>
                handleChange("math", "secondCA", Number(e.target.value))
              }
            />
            <input
              className="input"
              type="number"
              name="exam"
              placeholder="Exam Score"
              value={formData.math.exam}
              required
              onChange={(e) =>
                handleChange("math", "exam", Number(e.target.value))
              }
            />
          </div>

          {/*--------------------- english ------------------*/}
          <div className="mb-2">
            <input
              type="number"
              name="english"
              placeholder="English"
              required
              className="input formSubject"
              value={formData.english.subject}
              onChange={(e) =>
                handleChange("english", "subject", Number(e.target.value))
              }
              disabled
            />
            <input
              type="number"
              name="firstCA"
              placeholder="First CA Score"
              required
              className="input"
              value={formData.english.firstCA}
              onChange={(e) =>
                handleChange("english", "firstCA", Number(e.target.value))
              }
            />

            <input
              type="number"
              name="secondCA"
              value={formData.english.secondCA}
              placeholder="Second CA Score"
              required
              className="input"
              onChange={(e) =>
                handleChange("english", "secondCA", Number(e.target.value))
              }
            />
            <input
              className="input"
              type="number"
              name="exam"
              placeholder="Exam Score"
              value={formData.english.exam}
              required
              onChange={(e) =>
                handleChange("english", "exam", Number(e.target.value))
              }
            />
          </div>

          {/* ----------------Computer Science---------------- */}
          <div className="mb-2">
            <input
              type="number"
              name="computer"
              placeholder="Computer Science"
              required
              className="input formSubject"
              value={formData.computer.subject}
              onChange={(e) =>
                handleChange("computer", "subject", Number(e.target.value))
              }
              disabled
            />
            <input
              type="number"
              name="firstCA"
              placeholder="First CA Score"
              required
              className="input"
              value={formData.computer.firstCA}
              onChange={(e) =>
                handleChange("computer", "firstCA", Number(e.target.value))
              }
            />

            <input
              type="number"
              name="secondCA"
              value={formData.computer.secondCA}
              placeholder="Second CA Score"
              required
              className="input"
              onChange={(e) =>
                handleChange("computer", "secondCA", Number(e.target.value))
              }
            />
            <input
              className="input"
              type="number"
              name="exam"
              placeholder="Exam Score"
              value={formData.computer.exam}
              required
              onChange={(e) =>
                handleChange("computer", "exam", Number(e.target.value))
              }
            />
          </div>

          {/* -------------------Agric Scicence -----------------*/}
          <div className="mb-2">
            <input
              type="number"
              name="agric"
              placeholder="Agric Science"
              required
              className="input formSubject"
              value={formData.agric.subject}
              onChange={(e) =>
                handleChange("agric", "subject", Number(e.target.value))
              }
              disabled
            />
            <input
              type="number"
              name="firstCA"
              placeholder="First CA Score"
              required
              className="input"
              value={formData.agric.firstCA}
              onChange={(e) =>
                handleChange("agric", "firstCA", Number(e.target.value))
              }
            />

            <input
              type="number"
              name="secondCA"
              value={formData.agric.secondCA}
              placeholder="Second CA Score"
              required
              className="input"
              onChange={(e) =>
                handleChange("agric", "secondCA", Number(e.target.value))
              }
            />
            <input
              className="input"
              type="number"
              name="exam"
              placeholder="Exam Score"
              value={formData.agric.exam}
              required
              onChange={(e) =>
                handleChange("agric", "exam", Number(e.target.value))
              }
            />
          </div>

          {/* -------------------Biology -----------------*/}
          <div className="mb-2">
            <input
              type="number"
              name="biology"
              placeholder="Biology"
              required
              className="input formSubject"
              value={formData.biology.subject}
              onChange={(e) =>
                handleChange("biology", "subject", Number(e.target.value))
              }
              disabled
            />
            <input
              type="number"
              name="firstCA"
              placeholder="First CA Score"
              required
              className="input"
              value={formData.biology.firstCA}
              onChange={(e) =>
                handleChange("biology", "firstCA", Number(e.target.value))
              }
            />

            <input
              type="number"
              name="secondCA"
              value={formData.biology.secondCA}
              placeholder="Second CA Score"
              required
              className="input"
              onChange={(e) =>
                handleChange("biology", "secondCA", Number(e.target.value))
              }
            />
            <input
              className="input"
              type="number"
              name="exam"
              placeholder="Exam Score"
              value={formData.biology.exam}
              required
              onChange={(e) =>
                handleChange("biology", "exam", Number(e.target.value))
              }
            />
          </div>
          {/* -------------------Economics -----------------*/}
          <div className="mb-2">
            <input
              type="number"
              name="economics"
              placeholder="Economics"
              required
              className="input formSubject"
              value={formData.economics.subject}
              onChange={(e) =>
                handleChange("economics", "subject", Number(e.target.value))
              }
              disabled
            />
            <input
              type="number"
              name="firstCA"
              placeholder="First CA Score"
              required
              className="input"
              value={formData.economics.firstCA}
              onChange={(e) =>
                handleChange("economics", "firstCA", Number(e.target.value))
              }
            />

            <input
              type="number"
              name="secondCA"
              value={formData.economics.secondCA}
              placeholder="Second CA Score"
              required
              className="input"
              onChange={(e) =>
                handleChange("economics", "secondCA", Number(e.target.value))
              }
            />
            <input
              className="input"
              type="number"
              name="exam"
              placeholder="Exam Score"
              value={formData.economics.exam}
              required
              onChange={(e) =>
                handleChange("economics", "exam", Number(e.target.value))
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lightColor text-sm p-2 rounded-full"
          >
            Compute
          </button>
          <FirstTermScores />
        </form>
      </div>
    </div>
  );
}

export default ExamForm;
