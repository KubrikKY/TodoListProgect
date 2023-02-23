import style from './styleTodo.module.css';

const TodoCard = ({ textTodo, deleteTodo, completeTodo, select }) => {
  //   const [styleTodoItem, setStyleTodoItem] = useState(style.TodoCard);

  const styleCard = select ? style.completeTodo : style.TodoCard;

  //   const selectHandler = () => {
  //     completeTodo();
  //     if (!styleTodoItem.includes(style.completeTodo)) {
  //       setStyleTodoItem(style.completeTodo);
  //     } else {
  //       setStyleTodoItem(style.TodoCard);
  //     }
  //   };

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
