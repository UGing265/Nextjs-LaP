export default function ProfilePage({params}:any){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center py-2">
            <h1>Profile</h1>
            <p className="text-3xl">Profile page <span className="bg-amber-700">{params.id}</span></p>
        </div>

    )
}