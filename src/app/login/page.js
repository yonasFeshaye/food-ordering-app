"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoggingIn(true);
    setLoginError(null);

    try {
      await signIn("credentials", { redirect: false, email, password });
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Invalid email or password");
    } finally {
      setLoggingIn(false);
    }
  }

  return (
    <section className="my-8">
      <h1 className="text-center text-primary text-3xl font-semibold mb-4">
        Login
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={loggingIn}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={loggingIn}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={loggingIn}>
          Login
        </button>
        <div className="my-4 text-center text-secondary-200">
          or login with provider
        </div>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex gap-4 justify-center items-center mb-12"
          disabled={loggingIn}
        >
          <Image src={"/google.png"} alt={""} width={20} height={20} />
          Login with Google
        </button>
        <div className="my-4 text-center">
          Do not have an account?{" "}
          <Link href={"/register"} className="underline font-semibold">
            Register &raquo;
          </Link>
        </div>
        {loginError && (
          <div className="my-4 text-center text-red-500">{loginError}</div>
        )}
        {/* Add a link for password reset if needed */}
      </form>
    </section>
  );
}
