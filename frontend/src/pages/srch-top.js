import { ReactComponent as Search} from './elements/search.svg'
import { ReactComponent as Back} from './elements/back.svg'
import Ads from './elements/ads.js'
import {useNavigate} from 'react-router-dom'
function Srchtop(){
    const n=useNavigate();
    const homenav=()=>{
        n("/");
    }

    return(    <div className="srch-page" >
        <form class="srch-form" action="http://127.0.0.1:5000/" method="post">
        <div className='back-btn' onClick={homenav}>
        <Back width="25px" height="25px" viewBox="0 0 1000 1000"/>
        </div>
<input class="og-srch" type="text" />
<button class="og-srch-btn"> 
        <Search width="25px" height="25px" viewBox="0 -0.5 25 25" />
</button>
        </form>
        <div class="recs">
            <p class="rec"><Search width="30px" height="30px" viewBox="0 1 25 30"/> rec</p>  
            <p class="lrec"><Search width="30px" height="30px" viewBox="0 1 25 30"/> rec</p>             
        </div>
        <Ads />
    </div>);
}
export default Srchtop;