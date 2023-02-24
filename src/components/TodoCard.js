import style from './styleTodo.module.css';

const TodoCard = ({ textTodo, deleteTodo, completeTodo, select }) => {
  const styleCard = select ? style.completeTodo : style.TodoCard;

  return (
    <div className={styleCard}>
      <p>{textTodo}</p>

      <div>
        <button onClick={deleteTodo}>Delete</button>

        <button onClick={completeTodo}>Complete</button>
      </div>
    </div>
  );
};

export default TodoCard;
