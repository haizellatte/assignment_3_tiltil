"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";
import * as L from "../../../styles";

function LogInForm() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { id, pw } = userInfo;
    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      alert("로그인 되었습니다.");
      auth.setIsLoggedIn(true);
    } else {
      alert("You 실패함");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={L.FormStyle}>
      <label htmlFor="id" className={L.LabelStyle}>
        Your Id
      </label>
      <input
        name="id"
        type="id"
        value={userInfo.id}
        onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value })}
        className={L.InputStyle}
      />
      <label htmlFor="pw" className={L.LabelStyle}>
        Your Password
      </label>
      <input
        name="pw"
        type="password"
        value={userInfo.pw}
        onChange={(e) => setUserInfo({ ...userInfo, pw: e.target.value })}
        className={L.InputStyle}
      />
      <button type="submit" className={L.ButtonStyle}>
        Log in
      </button>
    </form>
  );
}

export default LogInForm;
