import React from "react";

const TagButtons = ({ tagName, selectTag }) => {
  return (
    <button
      type="button"
      onClick={() => selectTag(tagName)}
      className="px-2 text-sm font-medium bg-slate-300 rounded-md"
    >
      {tagName}
    </button>
  );
};

export default TagButtons;
