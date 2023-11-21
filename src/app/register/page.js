"use client"
import { set } from "mongoose"
import Image from "next/image"
import { useState } from "react"

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false) 
    const [userCreated, setUserCreated] = useState(false)
    async function handleSubmit(ev) {
        ev.preventDefault()
        setCreatingUser(true)
       await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        setCreatingUser(false)
    }
    return (
        <section className="my-8">
            <h1 className="text-center text-primary text-3xl font-semibold mb-4">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email}
                    disabled={creatingUser}
                onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="Password" value={password}
                    disabled={creatingUser}
                 onChange={ev => setPassword(ev.target.value)}/>
                <button type="submit" disabled={creatingUser}>
                    Register
                </button>
                <div className="my-4 text-center text-secondary-200">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center items-center">
                    <Image src={'/google.png'} alt={""} width={20} height={20}/>Login with google
                </button>
            </form>
        </section>
    )
}