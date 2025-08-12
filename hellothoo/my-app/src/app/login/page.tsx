"use client";//xài tất cả object luôn
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";



export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",      
    })

    const onLogin = async () => {
    }


    return (
         <div className="text-2xl flex flex-col items-center justify-center py-2 min-h-screen">
            <h1>Login</h1>


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

            <button onClick={onLogin} className="p-2 bg-white/20 rounded-2xl focus:bg-black-50">login here</button>
            <Link href="/signup">Visit signup page</Link>
        </div>
    )
}