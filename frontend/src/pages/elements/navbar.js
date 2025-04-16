import { useNavigate } from 'react-router-dom';
import { UseStates } from './storage';
function Navbar(){
    const n=useNavigate();
    const {addr}=UseStates();
    const accnav=()=>{
        const address="http://"+addr.Ip+":"+addr.Port;
        fetch(address+"/logchk",{method:"get",credentials:'include'}).then(response => response.text()).then((data)=>{
            if(data === "true"){
                n("/account");
            }
            else{
                n("/login");
            }
        })
    }
    const homnav=()=>{n('/');}
    const expnav=()=>{n('/explore');}
    const newsnav=()=>{n('/news');}
    return(<div className="nav-bar">
        <p className='a' onClick={homnav} >home</p>
        <p className='a' onClick={expnav} >explore</p>
        <p className='a' onClick={accnav} >account</p>
        <p className='a' onClick={newsnav} >news</p>
    </div>);
}
export default Navbar;