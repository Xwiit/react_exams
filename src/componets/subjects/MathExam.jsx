import Button from "../Button";
import { useState } from "react";
import ScoresForm from "../forms/ScoresForm";
import { useDispatch, useSelector } from "react-redux";
import { setMath } from "../../feature/gradeSlice";
import axios from "axios";
import { toast } from "react-toastify";

//This component handles the math computation for first, second and third term
function MathExam() {
  const total = useSelector((state) => state.studentGrade.math.total);
  const grade = useSelector((state) => state.studentGrade.math.grade);
  const average = useSelector((state) => state.studentGrade.math.average);
  const firstCA = useSelector(
    (state) => state.studentGrade.math.scores.firstCA
  );
  const secondCA = useSelector(
    (state) => state.studentGrade.math.scores.secondCA
  );
  const exam = useSelector((state) => state.studentGrade.math.scores.exam);
  const stdID = useSelector((state) => state.studentGrade.math.scores.id);

  const dispatch = useDispatch();

  //this state variable helps to switch between the first, second, and third term div in the math exams forms
  const [activeContent, setActiveContent] = useState(0);

  //this function handles the submission of the first term data
  function handleSubmitFirstTerm(formData) {
    dispatch(setMath(formData));
    toast.success("Computation Successfull");
    // console.log("form data", data);
  }

  function handleSendDataFirstTerm() {
    // console.log(data);
    const url = `http://localhost:1337/api/maths`;
    try {
      axios
        .post(url, {
          data: {
            firstCA,
            secondCA,
            exam,
            total,
            average,
            stdID,
            grade,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Submission Successfull");
          }
        })
        .catch((error) => {
          if (error.message.includes(400)) {
            toast.error(error.response.data.error.message);
          }
        });
    } catch (error) {
      // console.log(error.response.data.error.message);
    }
  }
  function handleSubmitSecondTerm(data) {
    console.log("2nd", data);
  }

  return (
    <div>
      <div className="flex border-b-2 mt-4">
        <Button onClick={() => setActiveContent(0)}>First Term</Button>
        <Button onClick={() => setActiveContent(1)}>Second Term</Button>
        <Button onClick={() => setActiveContent(2)}>Third Term</Button>
      </div>
      <div>
        {/* This activeContent State variable controls how the suject display in the dashboard page per academic term(first, second, or third term),  */}

        {/* First term form */}
        {activeContent === 0 && (
          <div>
            <h2 className="examsTerms">MATHEMATICS FIRST TERM</h2>
            {/* ScoresForm is a reusable form component */}
            <ScoresForm onSubmit={handleSubmitFirstTerm} />
            <button
              className="bg-forecolor1 cursor-pointer text-2xl, p-2 rounded-full w-full mt-2 text-gray-200"
              onClick={handleSendDataFirstTerm}
            >
              Submit Scores
            </button>
          </div>
        )}

        {/* Second term form */}
        {activeContent === 1 && (
          <div>
            <h2 className="examsTerms">MATHEMATICS SECOND TERM</h2>
            {/* ScoresForm is a reusable form component */}
            <ScoresForm onSubmit={handleSubmitSecondTerm} />
          </div>
        )}

        {/* Third term form */}
        {activeContent === 2 && (
          <div>
            <h2 className="examsTerms">MATHEMATICS THIRD TERM</h2>
            {/* ScoresForm is a reusable form component */}
            <ScoresForm onSubmit={handleSubmitSecondTerm} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MathExam;
