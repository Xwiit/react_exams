import getTeacher from "../feature/service";

function LeftSidebar() {
  const teacher = getTeacher();
  // console.log(teacher);
  const { username, email, classTaking } = teacher.user;

  return (
    <>
      <ul className=" w-full p-2   ">
        <li className="leftSideLink">
          <span>👲</span>
          <span>{username}</span>
        </li>
        <li className="leftSideLink">
          <span>📩</span>
          <span>{email}</span>
        </li>
        <li className="leftSideLink">
          <span>🖊️</span>
          <span className="uppercase">{classTaking}</span>
        </li>
      </ul>
    </>
  );
}

export default LeftSidebar;
