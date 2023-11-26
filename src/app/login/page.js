"use client"
import { useState } from "react"
import Image from "next/image"
import { signIn } from "next-auth/react"


export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginInprogress, setLoginInProgress] = useState(false)

    async function handleFormSubmit(ev) {
        ev.preventDefault()
        setLoginInProgress(true)

       const result = await signIn('credentials', { redirect: false, email, password })
        
        setLoginInProgress(false)
        
    }
    return (
        <section>
            <h1 className="text-center text-primary text-3xl font-semibold mb-4">
                Login
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Email" name="email" value={email}
                    disabled={loginInprogress}
                onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="Password" name="password" value={password}
                    disabled={loginInprogress}
                 onChange={ev => setPassword(ev.target.value)}/>
                 <button type="submit" disabled={loginInprogress}>
                    Login
                </button>
                <div className="my-4 text-center text-secondary-200">
                    or login with provider
                </div>
                <button type="button" onClick={() => signIn('google', { callbackUrl: '/' })}
                   className="flex gap-4 justify-center items-center mb-12">
                    <Image src={'/google.png'} alt={""} width={20} height={20}/>Login with google
                </button>
            </form>
        </section>
    )
}