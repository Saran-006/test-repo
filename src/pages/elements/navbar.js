import { useNavigate } from 'react-router-dom';
function Navbar(){
    const n=useNavigate();
    const accnav=()=>{
        console.log("account clicked");
        n("/login");
    }
    return(<div class="nav-bar">
        <a className='a' href='/'>home</a>
        <a className='a' href="/explore">explore</a>
        <p className='a' onClick={accnav} href="/login" >account</p>
        <a className='a' href="/news" >news</a>
    </div>);
}
export default Navbar;