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
  const deleteItems = (id) => {
    //console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElements, i) => {
        return i !== id;
      });
    });
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
            {items.map((item, i) => {
              return (
                <TodoLists
                  text={item}
                  key={i}
                  id={i}
                  onSelect={deleteItems}
                ></TodoLists>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
