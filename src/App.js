import "./components/ToDoItem";
import ToDoItem from "./components/ToDoItem";

function App() {
  const toDos = [
    {
      title: "Checkout new jobs",
      date: new Date(2022, 5, 23),
      priority: "High",
    },
    { title: "Practice DSA", date: new Date(2022, 5, 24), priority: "High" },
    {
      title: "Complete Udemy courses on React",
      date: new Date(2022, 5, 23),
      priority: "Medium",
    },
    {
      title: "Practice linux commands",
      date: new Date(2022, 6, 23),
      priority: "Medium",
    },
  ];
  return (
    <div>
      <ToDoItem
        title={toDos[0].title}
        date={toDos[0].date}
        priority={toDos[0].priority}
      />
      <ToDoItem
        title={toDos[1].title}
        date={toDos[1].date}
        priority={toDos[1].priority}
      />
      <ToDoItem
        title={toDos[2].title}
        date={toDos[2].date}
        priority={toDos[2].priority}
      />
      <ToDoItem
        title={toDos[3].title}
        date={toDos[3].date}
        priority={toDos[3].priority}
      />
    </div>
  );
}

export default App;
