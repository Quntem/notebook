import "./style.css";
import Image from "next/image";

export default function Auth() {
    return (
        <div className="auth__background">
            <div className="auth__sidebar">
                <h1 className="auth__heading">Login</h1>
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
                    <p>Email</p>
                    <input type="email" name="email" placeholder="youremail@youremailprovider.com" className="regular-glassmorphism"/>
                </label>
                <label className="auth__input">
                    <p>Password</p>
                    <input type="password" name="password" placeholder="verysecurepassword123" className="regular-glassmorphism"/>
                </label>
                <button className="auth__login-btn regular-glassmorphism">
                    Log In
                </button>
            </div>
        </div>
    )
}