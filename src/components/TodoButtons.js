const TodoButtons = ({ deleteAll, reload, style }) => {
  return (
    <>
      <button onClick={reload}>Reload</button>
      <button onClick={deleteAll}>Delete</button>
    </>
  );
};

export default TodoButtons;
