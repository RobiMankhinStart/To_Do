import React, { useState } from "react";
import TagButtons from "./TagButtons";

const HeaderSection = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  // .......function to manage taskData values ...........
  const handleTaskData = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // .......function to make an array of selecting tags ...........
  const selectTag = (t) => {
    const filteredData = taskData.tags.filter((value) => value !== t);
    if (taskData.tags.some((tag) => tag == t)) {
      setTaskData((prev) => {
        return { ...prev, tags: filteredData };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, t] };
      });
    }
  };
  // console.log(taskData.tags);
  // .......function to highlight selecting tags ...........
  const highlightSelectedTags = (t) => {
    return taskData.tags.some((value) => value == t);
  };

  // .......submit all info into the Array........
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedData = taskData.task.trim();
    if (trimmedData === "") {
      return alert("Please enter some text.");
    }
    const newTask = { ...taskData, task: trimmedData };
    setTasks((prev) => {
      return [...prev, newTask];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
    console.log("taskData : ", taskData);
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-2xl font-mono text-center text-gray-700 font-semibold">
          <span className="text-4xl text-gray-500 font-bold ">N</span>ote-
          <span className="text-4xl text-gray-500 font-bold ">i</span>t
        </h2>
        <input
          name="task"
          className="w-[240px] m-auto lg:w-[500px] placeholder:text-slate-300 p-3 bg-slate-100  outline-none rounded-md text-lg font-medium"
          type="text"
          placeholder="Enter your task"
          value={taskData.task}
          onChange={handleTaskData}
        />

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex gap-4 text-gray-600">
            <TagButtons
              selectTag={selectTag}
              tagName="HTML"
              selected={highlightSelectedTags("HTML")}
            />
            <TagButtons
              selectTag={selectTag}
              tagName="CSS"
              selected={highlightSelectedTags("CSS")}
            />
            <TagButtons
              selectTag={selectTag}
              tagName="JavaScript"
              selected={highlightSelectedTags("JavaScript")}
            />
            <TagButtons
              selectTag={selectTag}
              tagName="React"
              selected={highlightSelectedTags("React")}
            />
          </div>
          <div className="flex justify-center gap-3">
            <select
              name="status"
              value={taskData.status}
              onChange={handleTaskData}
              className="outline-none cursor-pointer font-semibold text-gray-700 border border-gray-300 px-2 py-[6px] rounded-md"
            >
              <option value="todo">ToDo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button
              type="submit"
              className="font-semibold text-white bg-blue-500 px-3 py-[6px] rounded-md"
            >
              + AddTask
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default HeaderSection;
