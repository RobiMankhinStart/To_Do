import React from "react";
import TagButtons from "./TagButtons";
import { RiDeleteBin2Line } from "react-icons/ri";

const TaskCard = () => {
  return (
    <article className="flex flex-col gap-6 p-3 bg-gray-200 rounded-md shadow-md shadow-gray-500">
      <h3>Some details of the card</h3>
      <div className="flex gap-6">
        <div className="flex gap-[10px] ">
          <TagButtons tagName="HTML" />
          <TagButtons tagName="CSS" />
          <TagButtons tagName="JavaScript" />
          <TagButtons tagName="React" />
        </div>
        <button className="hover:text-red-700 text-[26px]">
          <RiDeleteBin2Line />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
