import React from "react";
import SignUpForm from "./_components/SignUpForm";
import * as S from "@/app/(providers)/styles";

function SignUpPage() {
  return (
    <div>
      <h1 className={S.TitleStyle}>Sign Up Your Account</h1>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
