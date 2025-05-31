// import "./App.css";

import HeaderSection from "./Components/HeaderSection";
import TaskColumn from "./Components/TaskColumn";
import { TbTargetArrow } from "react-icons/tb";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";

function App() {
  return (
    <div className="flex flex-col gap-[40px] items-center p-[20px]">
      <HeaderSection />
      <main className="flex gap-[45px]">
        <TaskColumn icon={TbTargetArrow} col="ToDo" />
        <TaskColumn icon={FcProcess} col="Doing" />
        <TaskColumn icon={IoCheckmarkDoneCircle} col="Done" />
      </main>
    </div>
  );
}

export default App;
