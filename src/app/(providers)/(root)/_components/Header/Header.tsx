import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b flex items-center bg-black text-white px-6 justify-between">
      <Link href="/" className="text-3xl font-bold">
        TIL:TIL
      </Link>
      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
