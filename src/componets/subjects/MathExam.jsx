import Button from "../Button";
import { useState } from "react";
import ScoresForm from "../forms/ScoresForm";
function MathExam() {
  const [activeContent, setActiveContent] = useState(0);
  // const [activeClass, setActiveClass] = useState(0);

  function handleSubmitFirstTerm(data) {
    console.log("form data", data);
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
        {/* This activeContent State variable controls how the suject display in the dashboard page,  */}
        {activeContent === 0 && (
          <div>
            <h2 className="text-gray-200 uppercase mt-6">
              MATHEMATICS FIRST TERM
            </h2>
            {/* ScoresForm is a reusable form component */}
            <ScoresForm onSubmit={handleSubmitFirstTerm} />
          </div>
        )}
        {activeContent === 1 && (
          <div>
            <h2 className="text-gray-200 uppercase mt-6">
              MATHEMATICS SECOND TERM
            </h2>
            {/* ScoresForm is a reusable form component */}
            <ScoresForm onSubmit={handleSubmitSecondTerm} />
          </div>
        )}
        {activeContent === 2 && <div>Third Term</div>}
      </div>
    </div>
  );
}

export default MathExam;
