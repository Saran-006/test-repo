import {ReactComponent as Buy} from './buy.svg'
import {ReactComponent as Search} from './search.svg'
import { useNavigate } from 'react-router-dom'
import {UseStates} from './storage.js'
function Top(){
    const {addr}=UseStates();
    const n=useNavigate();
    console.log(addr.Ip+addr.Port);
    const nav=()=>{
        console.log("Navigating to search page ...");
        n('/search');
    }
    return(
    <div >
        <h2 className="title">Big Buyer</h2>
    <div  className="srch-set" >
    <Search width="30px" height="30px" />
        <input onClick={nav} className="sip" type="text" placeholder="Search ..."/>
        <button onClick={nav} className="sib"><Search width="20px" height="20px" /></button>

        <h5 onClick={()=>{alert("No Premium available currently");}} className="premium">Try Premium</h5>
    <Buy onClick={()=>{alert("No Premium available currently");}} width="30px" height="30px" />
    </div>
    <div className='line'></div>
    </div>
    );
}
export default Top;