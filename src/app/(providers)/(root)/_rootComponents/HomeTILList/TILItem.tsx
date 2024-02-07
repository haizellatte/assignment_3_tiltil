import React from "react";

interface ListItemProps {
  author: string;
  title: string;
  content: string;
}

function HomeTILList({ author, title, content }: ListItemProps) {
  return (
    <div className="flex flex-col py-6 px-10 mb-5 border-gray-200 rounded-xl border-solid border-2 bg-gray-50">
      <div className="font-medium text-lg">{title}</div>
      <div className="text-gray-500 py-10">{content}</div>
      <div className="text-end">Author {author}</div>
    </div>
  );
}

export default HomeTILList;
