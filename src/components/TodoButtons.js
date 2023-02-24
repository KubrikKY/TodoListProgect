import Button from '@mui/material/Button';

const TodoButtons = ({ deleteAll, reload, style }) => {
  return (
    <>
      <Button variant="outlined" onClick={reload} style={{ margin: 10 }}>
        Reload
      </Button>
      <Button variant="outlined" onClick={deleteAll}>
        Delete
      </Button>
    </>
  );
};

export default TodoButtons;
