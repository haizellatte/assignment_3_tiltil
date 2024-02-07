"use client";
import React, { useState } from "react";
import Toggle from "../Toggle";
import HomeTILList from "../HomeTILList";
import useDataFetch from "@/hooks/useData";

function HomeTILLists() {
  const { reverseData } = useDataFetch();
  const [cols, setCols] = useState(false);

  return (
    <div className="grid px-16">
      <h2 className="text-center mt-20 text-4xl font-bold pb-10">
        Today I Learned
      </h2>
      <div className="text-end pb-10">
        <Toggle setCols={setCols} />
      </div>
      <div
        className={`${
          cols ? "grid gap-5 grid-cols-4" : "grid gap-5 grid-cols-2"
        }`}
      >
        {reverseData.map((list, i) => (
          <HomeTILList
            key={`${list}-${i}`}
            author={list.author.name}
            title={list.title}
            content={list.content}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeTILLists;
