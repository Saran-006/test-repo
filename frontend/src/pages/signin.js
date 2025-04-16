import { useNavigate } from "react-router-dom";
function Signin(){
    const n=useNavigate();
    const homnav=()=>{n("/");}
    const lognav=()=>{n("/login");}
    return(
        <div class="login-page">
        <div class="login-container">
            <form class="login-form" action="/" method="post" >
                <h1>Signup</h1>
                <input class="login-email" type="text" placeholder="UserName" />
                <input class="login-email" type="email" placeholder="Email" />
                <input class="login-pass" type="password" placeholder="Password" />
                <button class="login-btn" >submit</button>
                <p class="link2" onClick={lognav} >Login</p>
                <p class="link2" onClick={homnav} >stay Logged-out</p>
            </form>
            <div class="glass"></div>
        </div>
    </div>
    );
}
export default Signin;