import React from "react";
import TagButtons from "./TagButtons";
import { RiDeleteBin2Line } from "react-icons/ri";

const TaskCard = () => {
  return (
    <article>
      <h3>Some details of th card</h3>
      <div className="">
        <div className="flex gap-4">
          <TagButtons tagName="HTML" />
          <TagButtons tagName="CSS" />
          <TagButtons tagName="JavaScript" />
          <TagButtons tagName="React" />
        </div>
        <button>
          <RiDeleteBin2Line />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
