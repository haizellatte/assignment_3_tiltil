"use client";
import { FormEventHandler, useState } from "react";
import * as T from "@/app/(providers)/styles";
import { useRouter } from "next/navigation";

function TILForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const route = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const url = `${window.location.origin}/api/til`;
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
    };
    await fetch(url, options);
    alert("게시물이 작성되었습니다.");
    route.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className={`${T.FormStyle} max-w-xl`}>
      <label htmlFor="title" className={T.LabelStyle}>
        Title
      </label>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={T.InputStyle}
      />
      <label htmlFor="title" className={`${T.LabelStyle} mt-10`}>
        Content
      </label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={7}
        className={T.TextAreaStyle}
      />
      <button type="submit" className={T.ButtonStyle}>
        Write
      </button>
    </form>
  );
}

export default TILForm;
