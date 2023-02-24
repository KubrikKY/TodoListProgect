import { useState } from 'react';

const TodoInput = ({ addTodo, style }) => {
  const [todoValue, setTodoValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoValue) {
      addTodo(todoValue);
    }
    setTodoValue('');
  };

  return (
    <div className={style.inputSection}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Todo"
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TodoInput;
