import React, { useRef, useState } from "react";
import "./TodoCard.css";
function TodoCard({ listItems, handleDelete }) {
  const [done, setDone] = useState("Undone");

  return (
    <div className="todocard">
      {" "}
      {listItems.map((ti, index) => (
        <div key={index} className='todocard_wrap'>
          {console.log(listItems[index])}
          <h1>{ti.title}</h1>

          <h3>{ti.desc}</h3>
          <div className="todocard_done">
            <input className="checkbox" type="checkbox" />
            <button onClick={(index) => handleDelete(index)}> Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoCard;
