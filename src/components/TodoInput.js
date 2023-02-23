import { useState } from 'react';

const TodoInput = ({ addTodo, style }) => {
  const [todoValue, setTodoValue] = useState('');

  const createNewTodo = () => {
    if (todoValue) {
      addTodo(todoValue);
    }
  };

  return (
    <div className={style.inputSection}>
      <input
        type="text"
        placeholder="Todo"
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={createNewTodo}>Submit</button>
    </div>
  );
};

export default TodoInput;
