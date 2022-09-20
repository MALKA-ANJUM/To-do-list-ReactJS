import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    // console.log("changed")
    console.log(e.target.value);
    setList(e.target.value);
  };
  const handleClick = () => {
    //console.log("clicked")
    setItems((old) => {
      return [...old, list];
    });
    setList("");
  };
  const deleteItems = (id) => {
    //console.log("deleted");
    setItems((old) => {
      return old.filter((arrElem, i) => {
        return i !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-do List</h1>
          <input
            type="text"
            onChange={handleChange}
            value={list}
            placeholder="Add an Item"
          />
          <button onClick={handleClick}>+</button>
          <ol>
            {/* <li className="todo_style">{list}</li> */}
            {items.map((itemVal, i) => {
              return (
                <TodoList
                  text={itemVal}
                  id={i}
                  key={i}
                  onSelect={deleteItems}
                ></TodoList>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
