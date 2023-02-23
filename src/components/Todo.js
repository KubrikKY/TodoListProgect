import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoButtons from './TodoButtons';
import TodoCard from './TodoCard';

import style from './styleTodo.module.css';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (text) => {
    console.log(text);
    setTodoList([...todoList, { value: text, select: false }]);
  };

  const deleteTodoHandler = (i) => {
    const todoListDelete = [...todoList];
    todoListDelete.splice(i, 1);
    setTodoList([...todoListDelete]);
  };

  const deleteAll = () => {
    setTodoList([]);
  };

  const completeTodoHandler = (i) => {
    const selectItems = [...todoList];
    if (!todoList[i].select) {
      selectItems[i].select = true;
      setTodoList([...selectItems]);
    } else {
      selectItems[i].select = false;
      setTodoList([...selectItems]);
    }
  };

  const resetTodoLisrt = () => {
    const resetItem = todoList.filter((e) => !e.select);
    setTodoList([...resetItem]);
  };

  return (
    <div className={style.TodoList}>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodoHandler} style={style} />
      <TodoButtons
        deleteAll={deleteAll}
        reload={resetTodoLisrt}
        style={style}
      />
      {todoList &&
        todoList
          .sort((a, b) => (b.select < a.select ? 1 : -1))
          .map((e, i) => {
            return (
              <TodoCard
                textTodo={e.value}
                select={e.select}
                key={i}
                deleteTodo={deleteTodoHandler.bind(this, i)}
                completeTodo={completeTodoHandler.bind(this, i)}
              />
            );
          })}
    </div>
  );
};

export default Todo;
