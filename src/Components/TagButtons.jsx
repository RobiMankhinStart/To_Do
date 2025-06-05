import React from "react";

const TagButtons = ({ tagName, selectTag, selected }) => {
  const selectedBGTags = {
    HTML: "bg-orange-300",
    CSS: "bg-yellow-300",
    JavaScript: "bg-amber-200",
    React: "bg-indigo-200",
  };
  return (
    <button
      type="button"
      onClick={() => selectTag(tagName)}
      className={`${
        selected(tagName) ? selectedBGTags[tagName] : "bg-slate-100"
      } px-2 text-sm  font-medium rounded-md`}
    >
      {tagName}
    </button>
  );
};

export default TagButtons;
