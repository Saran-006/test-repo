function Signin(){
    return(
        <div class="login-page">
        <div class="login-container">
            <form class="login-form" action="/" method="post" >
                <h1>Signup</h1>
                <input class="login-email" type="text" placeholder="UserName" />
                <input class="login-email" type="email" placeholder="Email" />
                <input class="login-pass" type="password" placeholder="Password" />
                <button class="login-btn" >submit</button>
                <a class="link2" href="/login">Login</a>
                <a class="link2" href="/">stay Logged-out</a>
            </form>
            <div class="glass"></div>
        </div>
    </div>
    );
}
export default Signin;