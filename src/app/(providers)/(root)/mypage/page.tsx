import React from "react";
import * as M from "@/app/(providers)/styles";
import ProfileForm from "./_components/ProfileForm";

function MyPage() {
  return (
    <div>
      <h1 className={M.TitleStyle}>My Page</h1>
      <ProfileForm />
    </div>
  );
}

export default MyPage;
