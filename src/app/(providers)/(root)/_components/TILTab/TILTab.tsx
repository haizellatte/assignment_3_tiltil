import React from "react";
import Link from "next/link";
import * as T from "@/app/(providers)/styles";

function TILTab() {
  return (
    <nav className={T.TabStyle}>
      <ul className={T.UlStyle}>
        <li>
          <Link href="/til/trending" className={T.TabLiStyle}>
            Trending
          </Link>
        </li>
        <li>
          <Link href="/til/latest" className={T.TabLiStyle}>
            Latest
          </Link>
        </li>
        <li>
          <Link href="/til/write" className={T.TabLiStyle}>
            Write TIL
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TILTab;
