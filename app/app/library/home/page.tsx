import { authClient } from "@/lib/auth-client";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => authClient.signOut()}>Sign out</button>
        </div>
    )
}