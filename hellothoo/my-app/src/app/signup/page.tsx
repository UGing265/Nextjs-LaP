"use client";//xài tất cả object luôn
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try{
            setLoading(true);
            const response = await axios.post("/api/users/signup",user);
            console.log("Signup success",response.data);
            router.push("/login");

        }catch(error:any){
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    },[user]);

    return (//min-h-screen khứa quan trọng nhất 
        <div className="text-2xl flex flex-col items-center justify-center py-2 min-h-screen">
            <h1>{loading ? "processing" : "Signup"}</h1>

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
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <br/>
            <button
                type="button"
                onClick={onSignup}
                className="p-2 bg-white/50 rounded-2xl hover:bg-black/50 hover:border-amber-100">
                {buttonDisabled ? "No signup" : "Signup"}
            </button>

            <Link href="/login">Visit login page</Link>
        </div>
    )
}