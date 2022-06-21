const Todo = ({ todoItem }) => {
  return (
    <h3
      style={todoItem.status === true ? { color: "green" } : { color: "red" }}
    >
      {todoItem.title}
    </h3>
  );
};

export default Todo;
