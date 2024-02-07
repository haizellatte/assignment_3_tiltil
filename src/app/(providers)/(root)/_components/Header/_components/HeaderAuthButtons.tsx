"use client";
import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import Link from "next/link";

function HeaderAuthButtons() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
  };

  return (
    <div className="flex gap-x-4 items-center">
      <Link href="/mypage">myPage</Link>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <>
          <Link href="/sign-up" prefetch>
            Sign up
          </Link>
          <Link href="/log-in">Log in</Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
