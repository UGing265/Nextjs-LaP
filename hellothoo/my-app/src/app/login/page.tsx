"use client";//xài tất cả object luôn
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios from "axios";
import toast from "react-hot-toast";



export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",      
    })
    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading,setLoading] = React.useState(false);

    const onLogin = async () => {
        try{
            setLoading(true);
            const response = await axios.post("/api/users/login",user);
            console.log("Login success",response.data);
            toast.success("Login success");
            router.push("/profile");


        }catch(error:any){
            console.log("Login failed",error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);
    


    return (
         <div className="text-2xl flex flex-col items-center justify-center py-2 min-h-screen">
            <h1>{loading ? "processing" : "Login"}</h1>


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

            <button onClick={onLogin} className="p-2 bg-white/20 rounded-2xl focus:bg-black-50">login here</button>
            <Link href="/signup">Visit signup page</Link>
        </div>
    )
}