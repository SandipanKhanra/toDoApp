import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddTodo.module.css";

const AddTodo = (props) => {
  const addToDoHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addToDoHandler}>
        <label htmlFor="todoTitle">ToDo Title</label>
        <input id="todoTitle" type="text" />
        <label htmlFor="priority">Priority</label>
        <select name="priority" id="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="highest">Highest</option>
        </select>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" />
        <Button type="submit">Create ToDo</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
