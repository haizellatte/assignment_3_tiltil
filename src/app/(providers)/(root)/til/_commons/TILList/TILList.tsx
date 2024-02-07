import React from "react";
import * as L from "../../../../styles";

interface TILListProps {
  author: string;
  title: string;
  content: string;
}

function TILList({ author, title, content }: TILListProps) {
  return (
    <div className={L.ItemStyle}>
      <div className="font-medium text-lg">{title}</div>
      <div className="text-gray-500">{content}</div>
      <div className="text-end">Author {author}</div>
    </div>
  );
}

export default TILList;
