import { getResult } from "../../feature/service";

function Summary() {
  const result = getResult();
  const stdResult = result?.data?.data;

  //   console.log(allTotal)
  return (
    <div className="border-2  mt-4">
      <h2 className="font-bold">Summary</h2>
      <table className="w-full">
        <thead>
          {stdResult
            ? stdResult.map((subject) => {
                console.log(subject);
                const summaryTotal =
                  subject?.attributes?.mathematics?.total +
                  subject?.attributes?.computer?.total +
                  subject?.attributes?.english?.total +
                  subject?.attributes?.economics?.total +
                  subject?.attributes?.biology?.total +
                  subject?.attributes?.agric?.total;
                const summaryAverage = summaryTotal / 100;
                let summaryGrade = "";
                if (summaryTotal >= 800) {
                  summaryGrade = "A";
                } else if (summaryTotal >= 600 && summaryTotal <= 799) {
                  summaryGrade = "B";
                } else if (summaryTotal >= 555 && summaryTotal <= 599) {
                  summaryGrade = "C";
                } else if (summaryTotal >= 455 && summaryTotal <= 554) {
                  summaryGrade = "D";
                } else if (summaryTotal >= 0 && summaryTotal <= 444) {
                  summaryGrade = "E";
                }
                return (
                  <tr key={subject.id}>
                    <td className="border-2 p-2 border-gray-500">
                      Total Score
                    </td>
                    <td className="border-2  p-2 border-gray-500">
                      {summaryTotal}
                    </td>
                    <td className="border-2 p-2 border-gray-500">
                      Average Scores
                    </td>
                    <td className="border-2 p-2 border-gray-500">
                      {summaryAverage}
                    </td>
                    <td className="border-2   p-2 border-gray-500">Grade</td>
                    <td className="border-2 p-2 border-gray-500">
                      {summaryGrade}
                    </td>
                  </tr>
                );
              })
            : "No Information"}
        </thead>
      </table>
    </div>
  );
}

export default Summary;
