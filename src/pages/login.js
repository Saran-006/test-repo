import {UseStates} from './elements/storage'
function Login(){
    const {addr}=UseStates();
    const address="http://"+addr.Ip+":"+addr.Port;
    return(
        <div class="login-page">
            <div class="login-container">
                <form class="login-form" action={address+"/"} method="post" >
                    <h1>Login</h1>
                    <input class="login-email" type="email" placeholder="Email" />
                    <input class="login-pass" type="password" placeholder="Password" />
                    <button class="login-btn" >submit</button>
                    <a class="link" href="/forgetpassword">forget password</a>
                    <a class="link" href="/signin">Sign in</a>
                </form>
                <div class="glass"></div>
            </div>
        </div>);
}
export default Login;