// import "./App.css";

import HeaderSection from "./Components/HeaderSection";
import TaskColumn from "./Components/TaskColumn";
import { TbTargetArrow } from "react-icons/tb";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);
  return (
    <div className="flex flex-col gap-[40px] items-center p-[20px]">
      <HeaderSection setTasks={setTasks} />
      <main className="flex gap-[45px]">
        <TaskColumn
          icon={TbTargetArrow}
          colName="ToDo"
          tasks={tasks || []}
          checkStatus="todo"
        />
        <TaskColumn
          icon={FcProcess}
          colName="Doing"
          tasks={tasks || []}
          checkStatus="doing"
        />
        <TaskColumn
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
