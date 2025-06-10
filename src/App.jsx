// import "./App.css";

import HeaderSection from "./Components/HeaderSection";
import TaskColumn from "./Components/TaskColumn";
import { TbTargetArrow } from "react-icons/tb";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };
  console.log("tasks", tasks);
  return (
    <div className="flex flex-col gap-[40px] items-center p-[20px]">
      <HeaderSection setTasks={setTasks} />
      <main className="flex gap-[45px]">
        <TaskColumn
          handleDelete={handleDelete}
          icon={TbTargetArrow}
          colName="ToDo"
          tasks={tasks || []}
          checkStatus="todo"
        />
        <TaskColumn
          handleDelete={handleDelete}
          icon={FcProcess}
          colName="Doing"
          tasks={tasks || []}
          checkStatus="doing"
        />
        <TaskColumn
          handleDelete={handleDelete}
          icon={IoCheckmarkDoneCircle}
          colName="Done"
          tasks={tasks || []}
          checkStatus="done"
        />
      </main>
    </div>
  );
}

export default App;
