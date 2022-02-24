import React, { useState } from "react";
import "./Todo.css";
import TodoCard from "./TodoCard";

function Todo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [listItems, setListItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setListItems((beforeData) => [...beforeData, { title, desc }]);

    setTitle("");
    setDesc("");
  };

  //delete
  function handleDelete(index) {
    //   console.log("dle",index)
    listItems.splice(index, 1);


    setListItems((beforeData) => [...beforeData]);
  }

  console.log("listItems", listItems);

  let c = listItems.map((ab) => ab.title);
  console.log("c", c);

  return (
    <>
      <form className="todoapp" onSubmit={handleSubmit}>
        <h1>To Do App</h1>
        <input
          required
          type="text"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
          placeholder="type your title..."
        />
        <input
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="type your description..."
        />
        <button type="submit">Submit</button>
      </form>

      <TodoCard listItems={listItems} handleDelete={handleDelete} />
    </>
  );
}

export default Todo;
