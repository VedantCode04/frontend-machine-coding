import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todolist, settodolist] = useState([]);
  const [search, setSearch] = useState("");

  const addTodoList = (todo) => {
    settodolist([{ id: uuidv4(), data: todo }, ...todolist]);
    console.log(todolist);
  };

  const deleteTodo = (id) => {
    const updatedlist = todolist.filter((todo) => todo.id !== id);
    settodolist(updatedlist);
  };

  const editTodo = (id, value) => {
    const updatedlist = todolist.map((todo) => {
      if (todo.id === id) {
        return { ...todo, data: value };
      }
      return todo;
    });

    settodolist(updatedlist);
  };

  const filteredTodos = todolist.filter((todo) =>
    todo.data.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="TodoWrapper">
      <h1>
        Todo List by <span style={{ color: "cyan" }}>Vedant</span> for machine
        coding round
      </h1>
      <div>
        <button type="submit" className="todo-btn">
          Search
        </button>
        <input
          type="text"
          className="todo-input"
          placeholder="Search todo"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <TodoForm addTodoList={addTodoList} />
      {filteredTodos.map((todo) => (
        <Todo
          todo={todo}
          deleteTodo={deleteTodo}
          key={todo.id}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
