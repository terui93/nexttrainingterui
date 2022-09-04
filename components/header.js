import Link from "next/link";

export default function Header() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </li>
    </ul>
  );
}
