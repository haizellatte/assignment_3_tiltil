"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/(providers)/_redux/hooks/hooks";
import { setUpdateProfile } from "@/app/(providers)/_redux/reducers/profileSlice";
import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { useRouter } from "next/navigation";
import * as P from "@/app/(providers)/styles";

function ProfileForm() {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.profile.username);
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleChangeUsername = () => {
    if (usernameRef.current === null) {
      alert("닉네임을 입력하세요.");
    } else if (usernameRef.current.value === username) {
      alert("동일한 닉네임명입니다.");
    } else {
      alert("닉네임이 변경되었습니다.");
      setIsUpdateMode(!isUpdateMode);
      dispatch(setUpdateProfile(usernameRef.current.value));
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 서비스입니다.");
      router.replace("/");
    } else {
      return;
    }
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col max-w-md mx-auto mt-20">
      <label>User-{username}</label>
      <div>
        <input
          ref={usernameRef}
          type="id"
          defaultValue={username}
          onClick={() => setIsUpdateMode(true)}
          className={P.InputStyle}
        />
        <button className={P.ButtonStyle} onClick={handleChangeUsername}>
          {isUpdateMode ? "적용" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default ProfileForm;
