import { getRemark } from "../../feature/service";

function TeachersRemark() {
  const studentRemark = getRemark();

  const stdRemark = studentRemark?.data?.data;

  return (
    <>
      {stdRemark
        ? stdRemark.map((remark) => {
            return (
              <div className="w-full flex flex-col mt-4 " key={remark?.id}>
                <h3 className="mb-1">
                  <span className="font-bold uppercase">Teacher's Remark:</span>
                  {remark?.attributes?.teacherRemark}
                </h3>
                <h3 className="mt-1">
                  <span className="font-bold uppercase">
                    Head Teacher's Remark:
                  </span>
                  {remark?.attributes?.headTeacherRemark}
                </h3>
              </div>
            );
          })
        : "No Remarks"}
    </>
  );
}

export default TeachersRemark;
