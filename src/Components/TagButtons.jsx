import React from "react";

const TagButtons = (props) => {
  return (
    <button className="px-2 text-sm font-medium bg-slate-200 rounded-md">
      {props.tagName}
    </button>
  );
};

export default TagButtons;
