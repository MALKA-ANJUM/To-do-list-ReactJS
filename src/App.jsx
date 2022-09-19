import React, { useState } from "react";
import "./App.css";
import TodoLists from "./TodoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const handleLists = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={handleLists}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((item) => {
              return <TodoLists text={item}></TodoLists>
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
