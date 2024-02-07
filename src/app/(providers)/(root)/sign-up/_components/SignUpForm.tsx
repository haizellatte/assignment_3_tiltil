"use client";

import { FormEventHandler, useState } from "react";
import * as L from "../../../styles";
import { useRouter } from "next/navigation";
function SignUpForm() {
  const route = useRouter();
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
    confirmPw: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { id, pw, confirmPw } = userInfo;

    const url = `${window.location.origin}/api/auth/sign-up`;
    const options = {
      method: "POST",
      body: JSON.stringify({ id, pw, confirmPw }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      alert("회원가입 되었습니다. 로그인을 해주세요.");
      route.push("/log-in");
    } else {
      alert("회원가입 실패");
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
      <label htmlFor="conFirmPw" className={L.LabelStyle}>
        Confrim Password
      </label>
      <input
        name="conFirmPw"
        type="password"
        value={userInfo.confirmPw}
        onChange={(e) =>
          setUserInfo({ ...userInfo, confirmPw: e.target.value })
        }
        className={L.InputStyle}
      />
      <button type="submit" className={L.ButtonStyle}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
