"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import {signIn} from "next-auth/react"


export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false) 
    const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState(false)

    async function handleFormSubmit(ev) {
        ev.preventDefault()
        setCreatingUser(true)
        setError(false)
        setUserCreated(false)

       const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        if(response.status == 200) {
            return setUserCreated(true)
        } else {
            setError(true)
        }
        setCreatingUser(false)
    
}
    return (
        <section className="my-8">
            <h1 className="text-center text-primary text-3xl font-semibold mb-4">
                Register
            </h1>
            {userCreated && (
            <div className="my-4 text-center">
                User created. Now you can{'  '}
                <Link href={'/login'} className="underline font-semibold">Login &raquo;</Link>
            </div>)}
            {error && (
                <div className="my-4 text-center text-red-500">
                    Error creating user
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
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
                <button onClick={() => signIn('google', { callbackUrl: '/' })}
                   className="flex gap-4 justify-center items-center">
                    <Image src={'/google.png'} alt={""} width={20} height={20}/>Login with google
                </button>
                <div className="my-4 text-center">
                    Already have an account?{'  '}
                    <Link href={'/login'} className="underline font-semibold">Login &raquo;</Link>
                </div>
            </form>
        </section>
    )
}