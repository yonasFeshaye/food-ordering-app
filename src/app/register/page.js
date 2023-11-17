"use client"
import Image from "next/image"
import { useState } from "react"

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <section className="my-8">
            <h1 className="text-center text-primary text-3xl font-semibold mb-4">
                Register
            </h1>
            <form className="block max-w-sm mx-auto">
                <input type="email" placeholder="Email" className="block w-full p-4 my-4 border border-gray-300 rounded" />
                <input type="password" placeholder="Password" className="block w-full p-2 my-4 border border-gray-300 rounded" />
                <button type="submit" >Register</button>
                <div className="my-4 text-center text-secondary-200">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center items-center">
                    <Image src={'/google.png'} alt="" width={20} height={20}/>Login with google
                </button>
            </form>
        </section>
    )
}