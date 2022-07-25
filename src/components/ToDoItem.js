import "./ToDoItem.css";
import Card from "./Card";
import ToDoDate from "./ToDoDate";

function ToDoItem(props) {
  return (
    <Card className="todo-item">
      <ToDoDate date={props.date} />
      <div className="todo-item__description">
        <h2>{props.title}</h2>
        <div className="todo-item__priority">{props.priority}</div>
      </div>
    </Card>
  );
}

export default ToDoItem;
