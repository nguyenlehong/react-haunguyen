import classNames from "classnames";
import React from "react";
import "./styles.scss";
function Ghichu({ note, onTodoClick }) {
  const handlTodoClick = (a, index) => {
    if (onTodoClick) {
      onTodoClick(a, index);
    } else {
      return;
    }
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
          onClick={() => handlTodoClick(a, index)}
        >
          {a.name}
        </li>
      ))}
    </ul>
  );
}

export default Ghichu;
