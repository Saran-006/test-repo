import {UseStates} from './elements/storage'
import {useNavigate} from 'react-router-dom'
import {useRef} from 'react';
function Login(){
    const {login,addr}=UseStates();
    const n=useNavigate();
    const address="http://"+addr.Ip+":"+addr.Port;
    const e=useRef(null);
    const p=useRef(null);
    // console.log(String(address+'/logent?e='+e.textContent+'p='+p.textContent));
    const serverauth=()=>{
        const E=e.current;
        const P=p.current;
        fetch(String(address+'/logauth?e='+E.value+'&p='+P.value))
        .then(response => response.text())
        .then((data)=>{
            login.setloginstate(true);
            if(data==="true"){
                n('/account')
            }
            else{
                alert("invalid username password");
            }
        });
    }
    const check=()=>{
        const E=e.current;
        const P=p.current;
        if (!(E.value).includes("@gmail.com")){
            E.style.background="red";
            E.value="";
            E.placeholder="Invalid Email";
            if((P.value).length<8){
                P.style.background="red";
                P.value="";
                P.placeholder="Invalid Password";
            }
        }
        else{
            serverauth();
        }
    }
    const fpnav=()=>{alert("Password changer in development");}
    const signav=()=>{n("/signin");}
    return(
        <div class="login-page">
            <div class="login-container">
                <div class="login-form" >
                    <h1>Login</h1>
                    <input ref={e} class="login-email" type="email" placeholder="Email" />
                    <input ref={p} class="login-pass" type="password" placeholder="Password" />
                    <button class="login-btn" role="none" onClick={check} >submit</button>
                    <p className="link" onClick={fpnav} >forget password</p>
                    <p className="link" onClick={signav} >Sign in</p>
                </div>
                <div class="glass"></div>
            </div>
        </div>);
}
export default Login;