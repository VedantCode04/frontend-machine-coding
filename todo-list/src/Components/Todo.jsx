import React, { useState } from "react";

const Todo = ({ todo, deleteTodo, editTodo }) => {
  const [isediting, setisediting] = useState(0);
  const [value, setvalue] = useState(todo.data);
  const handleEdit = (e) => {
    setisediting(!isediting);
    editTodo(todo.id, value);
  };
  return (
    <div className="Todo">
      {isediting ? (
        <input
          type="text"
          onChange={(e) => setvalue(e.target.value)}
          value={value}
          style={{
            background: "none",
            color: "white",
            padding: "3px 10px",
            fontSize: "15px",
            margin: "0 5px 0 0",
            borderWidth: "0 0 2px 0",
            borderColor: "white"
          }}
        />
      ) : (
        <>
          <p>{todo.data}</p>
        </>
      )}
      <div>
        <button
          style={{
            padding: "3px 10px",
            fontSize: "15px",
            margin: "0 5px 0 0",
            borderRadius: "6px",
            borderWidth: "0",
          }}
          onClick={handleEdit}
        >
          {isediting ? "Done" : "Edit"}
        </button>
        <button
          style={{
            padding: "3px 10px",
            fontSize: "15px",
            borderRadius: "6px",
            borderWidth: "0",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
