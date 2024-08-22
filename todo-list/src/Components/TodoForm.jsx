import React , {useState, useEffect}from 'react'

const TodoForm = ({ addTodoList }) => {
  const [value, setvalue] = useState("");

  const handleInput = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoList(value);
    setvalue("");
  };

  return (
    <form className="TodoForm" action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Whats task today"
        onChange={handleInput}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm