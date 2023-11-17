import Link from "next/link";
export default function Header() {
    return (
    <header className="flex items-center justify-between ">
      
      <nav className="flex gap-8 text-secondary-200 font-semibold items-center">
        <Link className="font-semibold text-primary text-2xl" href={"/"}>SANKOFA CAFE</Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
         </nav>
        <nav className="flex items-center gap-4 text-secondary-200 font-semibold">
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"} className="bg-primary text-white px-8 py-2 rounded-full">Register</Link>
        </nav>
     
    </header>
    )
}