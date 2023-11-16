import Link from "next/link";
export default function Header() {
    return (
    <header className="flex items-center justify-between ">
      <Link className="font-semibold text-primary text-2xl" href={""}>SANKOFA CAFE</Link>
      <nav className="flex gap-8 text-secondary-200 font-semibold items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link href={""} className="bg-primary text-white px-8 py-2 rounded-full">Login</Link>
      </nav>
    </header>
    )
}