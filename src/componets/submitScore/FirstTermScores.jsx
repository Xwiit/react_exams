import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function FirstTermScores() {
  //fetching mathematics details
  const stdID = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.id
  );
  const mathSubject = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.math?.subject
  );
  const mathFirstCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.math?.firstCA
  );
  const mathSecondCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.math?.secondCA
  );
  const mathExam = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.math?.exam
  );
  const mathTotal = useSelector(
    (state) => state?.studentGrade?.firstTerm?.math?.total
  );
  const mathAverage = useSelector(
    (state) => state?.studentGrade?.firstTerm?.math?.average
  );
  const mathGrade = useSelector(
    (state) => state?.studentGrade?.firstTerm?.math?.grade
  );

  //fetching english details
  const englishSubject = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.english?.subject
  );
  const englishFirstCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.english?.firstCA
  );
  const englishSecondCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.english?.secondCA
  );
  const englishExam = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.english?.exam
  );
  const englishTotal = useSelector(
    (state) => state?.studentGrade?.firstTerm?.english?.total
  );
  const englishAverage = useSelector(
    (state) => state?.studentGrade?.firstTerm?.english?.average
  );
  const englishGrade = useSelector(
    (state) => state?.studentGrade?.firstTerm?.english?.grade
  );

  //fetching agric details
  const agricSubject = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.agric?.subject
  );
  const agricFirstCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.agric?.firstCA
  );
  const agricSecondCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.agric?.secondCA
  );
  const agricExam = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.agric?.exam
  );
  const agricTotal = useSelector(
    (state) => state?.studentGrade?.firstTerm?.agric?.total
  );
  const agricAverage = useSelector(
    (state) => state?.studentGrade?.firstTerm?.agric?.average
  );
  const agricGrade = useSelector(
    (state) => state?.studentGrade?.firstTerm?.agric?.grade
  );

  //fetching computer details
  const computerSubject = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.computer?.subject
  );
  const computerFirstCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.computer?.firstCA
  );
  const computerSecondCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.computer?.secondCA
  );
  const computerExam = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.computer?.exam
  );
  const computerTotal = useSelector(
    (state) => state?.studentGrade?.firstTerm?.computer?.total
  );
  const computerAverage = useSelector(
    (state) => state?.studentGrade?.firstTerm?.computer?.average
  );
  const computerGrade = useSelector(
    (state) => state?.studentGrade?.firstTerm?.computer?.grade
  );

  //fetching biology details
  const biologySubject = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.biology?.subject
  );
  const biologyFirstCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.biology?.firstCA
  );
  const biologySecondCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.biology?.secondCA
  );
  const biologyExam = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.biology?.exam
  );
  const biologyTotal = useSelector(
    (state) => state?.studentGrade?.firstTerm?.biology?.total
  );
  const biologyAverage = useSelector(
    (state) => state?.studentGrade?.firstTerm?.biology?.average
  );
  const biologyGrade = useSelector(
    (state) => state?.studentGrade?.firstTerm?.biology?.grade
  );

  //fetching economics details
  const economicsSubject = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.economics?.subject
  );
  const economicsFirstCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.economics?.firstCA
  );
  const economicsSecondCA = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.economics?.secondCA
  );
  const economicsExam = useSelector(
    (state) => state?.studentGrade?.firstTerm?.subjects?.economics?.exam
  );
  const economicsTotal = useSelector(
    (state) => state?.studentGrade?.firstTerm?.economics?.total
  );
  const economicsAverage = useSelector(
    (state) => state?.studentGrade?.firstTerm?.economics?.average
  );
  const economicsGrade = useSelector(
    (state) => state?.studentGrade?.firstTerm?.economics?.grade
  );

  async function handldSubmit(e) {
    if (englishTotal === 0) {
      toast.error("Please fill all the fields", { autoClose: 1000 });
      return;
    }

    e.preventDefault();
    const data = {
      stdID: stdID,
      mathematics: {
        subject: mathSubject,
        firstCA: mathFirstCA,
        secondCA: mathSecondCA,
        exam: mathExam,
        total: mathTotal,
        average: mathAverage,
        grade: mathGrade,
      },
      english: {
        subject: englishSubject,
        firstCA: englishFirstCA,
        secondCA: englishSecondCA,
        exam: englishExam,
        total: englishTotal,
        average: englishAverage,
        grade: englishGrade,
      },
      agric: {
        subject: agricSubject,
        firstCA: agricFirstCA,
        secondCA: agricSecondCA,
        exam: agricExam,
        total: agricTotal,
        average: agricAverage,
        grade: agricGrade,
      },
      computer: {
        subject: computerSubject,
        firstCA: computerFirstCA,
        secondCA: computerSecondCA,
        exam: computerExam,
        total: computerTotal,
        average: computerAverage,
        grade: computerGrade,
      },
      biology: {
        subject: biologySubject,
        firstCA: biologyFirstCA,
        secondCA: biologySecondCA,
        exam: biologyExam,
        total: biologyTotal,
        average: biologyAverage,
        grade: biologyGrade,
      },
      economics: {
        subject: economicsSubject,
        firstCA: economicsFirstCA,
        secondCA: economicsSecondCA,
        exam: economicsExam,
        total: economicsTotal,
        average: economicsAverage,
        grade: economicsGrade,
      },
    };

    console.log(data);
    try {
      const url = `http://localhost:1337/api/first-term-exams`;
      await axios
        .post(url, { data })
        .then((response) => {
          toast.success("Successfull", { autoClose: 1000 });
          console.log(response.data.data.error.message);
        })
        .catch((err) => {
          if (
            err.response.data.error.message === "This attribute must be unique"
          ) {
            toast.error(
              "You have computed this student result, kindly edit, or delete.",
              { autoClose: 2000 }
            );
            console.log(err);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      type="submit"
      className="w-full bg-background text-gray-200 text-2xl mt-3 p-2 rounded-full"
      onClick={handldSubmit}
    >
      Submit
    </button>
  );
}

export default FirstTermScores;
