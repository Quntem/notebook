"use client"
import "./style.css";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";

function signIn(email: string, password: string, redirect: string, name: string) {
    authClient.signUp.email({
        email: email,
        password: password,
        name: name
    }).then(() => {
        window.location.href = redirect
    }).catch((e) => {
        console.error(e)
    })
}

export default function Auth() {
    var redirect = useSearchParams()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return (
        <div className="auth__background">
            <div className="auth__sidebar">
                <h1 className="auth__heading">Sign Up</h1>
                <p className="auth__subtitle">Powered by Better Auth</p>
            </div>
            <div className="auth__content">
                <button className="auth__continue-btn regular-glassmorphism">
                    <Image src="/GitHub-White.svg" alt="GitHub White Icon" width={18} height={18}/>
                    <p>Continue with Github</p>
                </button>
                {/* <button className="auth__continue-btn">
                    <Image src="/GitHub-White.svg" alt="GitHub White Icon" width={18} height={18}/>
                    <p>Continue with Discord</p>
                </button> */}
                <button className="auth__continue-btn regular-glassmorphism">
                    <Image src="/Google-2025.svg" alt="Google 2025 Icon" width={18} height={18}/>
                    <p>Continue with Google</p>
                </button>
                <label className="auth__input">
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Your Name Goes here" className="regular-glassmorphism" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="auth__input">
                    <p>Email</p>
                    <input type="email" name="email" placeholder="youremail@youremailprovider.com" className="regular-glassmorphism" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className="auth__input">
                    <p>Password</p>
                    <input type="password" name="password" placeholder="verysecurepassword123" className="regular-glassmorphism" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className="auth__login-btn regular-glassmorphism" onClick={() => signIn(email, password, redirect.get("redirectTo") || "/", name)}>
                    Sign Up
                </button>
                <div className="auth__or">OR</div>
                <button className="auth__login-btn regular-glassmorphism" onClick={() => {window.location.href = "/auth/authui/signin"}}>
                    Sign In
                </button>
            </div>
        </div>
    )
}