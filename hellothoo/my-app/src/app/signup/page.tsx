"use client";//xài tất cả object luôn
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {
    }


    return (//min-h-screen khứa quan trọng nhất 
        <div className="text-2xl flex flex-col items-center justify-center py-2 min-h-screen">
            <h1>Signup</h1>

            <label htmlFor="username">username</label>
            <input
                className="p-1 bg-white/30 focus:bg-black/50 rounded-2xl"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />

            <label htmlFor="email">email</label>
            <input
                className="p-1 bg-white/30 focus:bg-black/50 rounded-2xl"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />

            <label htmlFor="password">password</label>
            <input
                className="p-1 bg-white/30 focus:bg-black/50 rounded-2xl"
                id="password"
                type="text"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />

            <button onClick={onSignup} className="p-2 bg-white/20 rounded-2xl focus:bg-black-50">signup here</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}