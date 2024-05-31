import { getRemark, getSession, getStduent } from "../../feature/service";

function ResultHeader() {
  const academicData = getSession();
  const academicSession = academicData?.data?.data;

  const studentRemark = getRemark();
  const stdRemark = studentRemark?.data?.data;

  return (
    <>
      {academicSession
        ? academicSession.map((session) => {
            return (
              <div
                className="w-[70%] flex justify-between m-1"
                key={session.id}
              >
                <div className="">
                  <h3>
                    <span className="font-bold">Academic Session:</span>
                    {session?.attributes?.academicSession}
                  </h3>
                  <h3>
                    <span className="font-bold">Days In Term:</span>{" "}
                    {session?.attributes?.daysInTerm}
                  </h3>
                </div>
                <div>
                  <h3>
                    <span className="font-bold">Term</span>{" "}
                    {session?.attributes?.term}
                  </h3>
                  <h3>
                    <span className="font-bold">Resumption Date:</span>{" "}
                    {session?.attributes?.resumptionDate}
                  </h3>
                </div>
              </div>
            );
          })
        : "No Information"}
      {stdRemark
        ? stdRemark.map((remark) => {
            return (
              <div className="w-[25%] flex flex-col " key={remark.id}>
                <h3>
                  <span className="font-bold">Days Absent:</span>
                  {remark?.attributes?.daysAbsent}
                </h3>
                <h3>
                  <span className="font-bold">Academic Session:</span>
                  {remark?.attributes?.daysPresent}
                </h3>
              </div>
            );
          })
        : "No Information"}
    </>
  );
}

export default ResultHeader;
