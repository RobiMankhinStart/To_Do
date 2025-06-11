// import "./App.css";

import HeaderSection from "./Components/HeaderSection";
import TaskColumn from "./Components/TaskColumn";
import { TbTargetArrow } from "react-icons/tb";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";
import { useState, useEffect } from "react";

const oldTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  console.log("tasks : ", tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };
  // console.log("tasks", tasks);
  return (
    <div className="md:ml-4 flex flex-col gap-[40px] items-center p-[20px]">
      <HeaderSection setTasks={setTasks} />
      <main className="flex gap-[45px] flex-wrap justify-center">
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
