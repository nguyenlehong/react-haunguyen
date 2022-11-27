import React, { useState } from "react";
import Ghichu from "./ghichu";
function Loadchu(props) {
  const initlist = [
    {
      id: 1,
      name: "cong viec 1",
      note: "ghi chu 1",
      status: "new",
    },
    {
      id: 2,
      name: "cong viec 2",
      note: "ghi chu 2",
      status: "old",
    },
    {
      id: 3,
      name: "cong viec 3",
      note: "ghi chu 4",
      status: "new",
    },
  ];
  const [list, setList] = useState(initlist);
  const [filterStatus, setFilerterStatus] = useState("all");
  const handlTodoClick = (a, index) => {
    console.log(">>> a: ", a);
    console.log(">>> index", index);
    const newlist = [...list];

    console.log(">>>newlist", newlist);

    const newL = {
      ...newlist[index],
      status: newlist[index].status === "new" ? "old" : "new",
    };
    newlist[index] = newL;
    setList(newlist);
    console.log(">>> set list", setList);
  };
  const showAll = () => {
    setFilerterStatus("all");
    console.log(">>> show all");
  };
  const showNew = () => {
    setFilerterStatus("new");
  };
  const showOld = () => {
    setFilerterStatus("old");
  };
  const renderTodolist = list.filter(
    (a) => filterStatus === "all" || filterStatus === a.status
  );
  console.log(">>> render", renderTodolist);
  return (
    <div>
      <h3>List: </h3>
      <Ghichu note={renderTodolist} onTodoClick={handlTodoClick} />
      <button onClick={showAll}>show all </button>
      <button onClick={showNew}>show new </button>
      <button onClick={showOld}>show old </button>
    </div>
  );
}

export default Loadchu;
