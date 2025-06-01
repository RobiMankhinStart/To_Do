import React from "react";

const TagButtons = ({ tagName }) => {
  return (
    <button className="px-2 text-sm font-medium bg-slate-300 rounded-md">
      {tagName}
    </button>
  );
};

export default TagButtons;
