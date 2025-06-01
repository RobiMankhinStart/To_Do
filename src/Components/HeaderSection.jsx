import React from "react";
import TagButtons from "./TagButtons";

const HeaderSection = () => {
  return (
    <header>
      <form className="flex flex-col gap-4">
        <input
          className="w-[500px] placeholder:text-slate-300 p-3 bg-slate-100  outline-none rounded-md text-lg font-medium"
          type="text"
          placeholder="Enter your task"
        />

        <div className="flex gap-8">
          <div className="flex gap-4 text-gray-600">
            <TagButtons tagName="HTML" />
            <TagButtons tagName="CSS" />
            <TagButtons tagName="JavaScript" />
            <TagButtons tagName="React" />
          </div>
          <div className="flex gap-3">
            <select className="outline-none cursor-pointer font-semibold text-gray-700 border border-gray-300 px-2 py-[6px] rounded-md">
              <option>ToDo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button className="font-semibold text-white bg-blue-500 px-3 py-[6px] rounded-md">
              + AddTask
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default HeaderSection;
