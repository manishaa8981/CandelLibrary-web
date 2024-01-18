import "./login.css";
import { FaUserAlt } from "react-icons/fa";
import {useForm} from "react-hook-form";
// import { FaLock } from "react-icons/fa";


const LoginForm = () => {
    return(
        <div className={"login-main"}>
            <div className={"wrapper"}>
            <form action={""}>
                <h1>Login</h1>
                <div className={"input-box"}>
                    <input type={"text"} placeholder={"Email"} required/>
                    <FaUserAlt  className={"icon"}/>
                </div>
                <div className={"input-box"}>
                    {/*<FaLock className={"icon"} />*/}
                    <input type={"password"} placeholder={"Password"} required/>


                </div>
                <div className={"remember-forgot"}>
                    <label>
                        <input type={"checkbox"}/> Remember me
                    </label>
                    <a href={"#"}>Forgot Password?</a>
                </div>
                <button type={"submit"}> Login </button>
                <div className={"register-link"}>
                    <p>Don't have an account? <a href={"/RegisterForm"}>Register</a></p>
                </div>
            </form>
            </div>
        </div>
    )

}
export default LoginForm