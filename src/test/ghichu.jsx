import classNames from "classnames";
import React from "react";
import "./styles.scss";
function Ghichu({ note, onTodoClick, onXoa }) {
  const handlTodoClick = (a, index) => {
    if (onTodoClick) {
      onTodoClick(a, index);
    } else {
      return;
    }
  };
  const handlxoa = (index) => {
    if (!onXoa) return;
    onXoa(index);
  };
  return (
    <ul className="todo-item">
      {note.map((a, index) => (
        <li
          key={a.id}
          className={classNames({
            "todo-list": true,
            old: a.status === "old",
          })}
          // onClick={() => handlTodoClick(a, index)}
          onClick={() => handlxoa(index)}
        >
          {a.name}
        </li>
      ))}
    </ul>
  );
}

export default Ghichu;
