import React from "react";
import TagButtons from "./TagButtons";
import { RiDeleteBin2Line } from "react-icons/ri";

const TaskCard = ({ task, tags, index, handleDelete }) => {
  // .......function to highlight selecting tags ...........
  const tagHighlighting = (t) => tags.some((i) => i == t);
  return (
    <article className="flex flex-col gap-2 p-2 bg-gray-200 rounded-md shadow-md shadow-gray-500">
      <h3 className="w-[300px] lg:w-[350px] h-[80px] p-1 break-words overflow-y-auto bg-gray-100 rounded-md">
        {task}
      </h3>
      <div className="flex justify-between ">
        <div className="flex gap-2 p-1 text-sm">
          {(tags || []).map((t, i) => (
            <div key={i}>
              <TagButtons tagName={t} selected={tagHighlighting(t)} />
              {/* or selected={true}  */}
            </div>
          ))}
        </div>
        <button
          onClick={() => handleDelete(index)}
          className="hover:text-red-600 text-[26px]"
        >
          <RiDeleteBin2Line />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
