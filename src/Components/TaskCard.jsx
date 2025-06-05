import React from "react";
import TagButtons from "./TagButtons";
import { RiDeleteBin2Line } from "react-icons/ri";

const TaskCard = ({ task, tags }) => {
  return (
    <article className="flex flex-col gap-6 p-3 bg-gray-200 rounded-md shadow-md shadow-gray-500">
      <h3 className="bg-slate-50 w-[350px] h-[200px]">{task}</h3>
      <div className="flex gap-6">
        {(tags || []).map((t, i) => (
          <div
            key={i}
            className="flex gap-[10px] px-2 py-[2px] text-sm font-medium rounded-md bg-slate-100"
          >
            {/* <TagButtons tagName={t} /> */}
            {t}
          </div>
        ))}
        <button className="hover:text-red-700 text-[26px]">
          <RiDeleteBin2Line />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
