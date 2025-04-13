import { useNavigate } from 'react-router-dom';
import { UseStates } from './storage';
function Navbar(){
    const n=useNavigate();
    const {addr}=UseStates();
    const accnav=()=>{
        const address="http://"+addr.Ip+":"+addr.Port;
        fetch(address+"/logchk",{credential:'include'}).then(response => response.text()).then((data)=>{
            if(data === "true"){
                n("/account");
            }
            else{
                n("/login");
            }
        })
    }
    return(<div class="nav-bar">
        <a className='a' href='/'>home</a>
        <a className='a' href="/explore">explore</a>
        <p className='a' onClick={accnav} href="/login" >account</p>
        <a className='a' href="/news" >news</a>
    </div>);
}
export default Navbar;