import {ReactComponent as Buy} from './buy.svg'
import {ReactComponent as Search} from './search.svg'
import { useNavigate } from 'react-router-dom'
import {Ip,Port} from './storage.js'
function Top(){
    console.log(Ip+Port);
    const n=useNavigate();
    const nav=()=>{
        console.log("Navigating to search page ...");
        n('/search');
    }
    return(
    <div >
        <h2 className="title">Big Buyer</h2>
    <div  className="srch-set" onClick={nav}>
    <Search width="30px" height="30px" />
        <input className="sip" type="text" placeholder="Search ..."/>
        <button class="sib"><Search width="20px" height="20px" /></button>

        <h5 className="premium">Try Premium</h5>
    <Buy width="30px" height="30px" />
    </div>
    <div className='line'></div>
    </div>
    );
}
export default Top;