"use client";

import TILList from "../TILList";
import useDataFetch from "@/hooks/useData";

interface TILListsProps {
  memu: string;
}

function TILLists({ memu }: TILListsProps) {
  const { data, reverseData } = useDataFetch();
  const ListData = memu === "trending" ? data : reverseData;

  return (
    <div className="py-4 px-10">
      {ListData.map((list, i) => (
        <TILList
          key={`${list}-${i}`}
          author={list.author.name}
          title={list.title}
          content={list.content}
        />
      ))}
    </div>
  );
}

export default TILLists;
