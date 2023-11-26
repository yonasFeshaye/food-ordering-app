"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
export default function Header() {

  const session = useSession()
  console.log(session)
const status = session.status
const userData = session.data?.user
let userName = userData?.name || userData?.email
if (userName && userName.includes(' ')) {
  userName = userName.split(' ')[0]
}

  return (
    <header className="flex items-center justify-between ">
      <nav className="flex gap-8 text-secondary-200 font-semibold items-center">
        <Link className="font-semibold text-primary text-2xl" href={"/"}>
          SANKOFA CAFE
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-secondary-200 font-semibold">
        {status === "authenticated" && (
          <>
          <Link href={"/profile"} className="whitespace-nowrap">
            Hello, {userName}
          </Link>
             <button
          onClick={() => signOut()}
          className="bg-primary text-white px-8 py-2 rounded-full"
        >
          Logout
        </button>
          </>
          
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
            href={"/register"}
            className="bg-primary text-white px-8 py-2 rounded-full"
            >
            Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
