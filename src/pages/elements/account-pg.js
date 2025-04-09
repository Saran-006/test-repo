import {ReactComponent as Account1} from '../elements/edit.svg'
export function Account(){
    function fileinp() {
        console.log("File input clicked");
    }

    function permission() {
        console.log("File selected");
    }

    function open1(){document.getElementById('filer').click();}
    return(
        <div className="body-a">
        <div className="prof-pic-container">
        <div className="profile-pic" id="prof-pic" ></div>
    </div>
        <button className="change-btn" onClick={open1} role="none" >
        <Account1 className="svg" />
        </button>
        <input className="h2" id="name-box" type="text" />
        <form action="http://127.0.0.1:5000/" method="post" style={{display:"none"}} id="profile-form" encType="multipart/form-data" >
            <input type="file" id="filer" onClick={fileinp} onChange={permission} name="prof_file" accept=".jpg" />
        </form>
        <div className="positioner"></div>
        <div className="aligner">
        <h1>My Activity</h1>
        <a className="a1" href="/">My Order</a>
        <a className="a1" href="/">Wish List</a>
        <a className="a1" href="/">Saved Address</a>
        <a className="a1" href="/" style={{marginBottom:"10px"}}>Premium</a>
        <div style={{width:"95dvw",height: "1.5px",backgroundColor:"black",marginTop:"0px"}}></div>
        <h1>Manage Account</h1>
        <a className="a1" href="/">Change email</a>
        <a className="a1" href="/" >Change Password</a>
        <a className="a1" href="/" style={{marginBottom:"10px"}}>logout</a>
        <div style={{width:"95dvw",height: "1.5px",backgroundColor: "black",marginBottom:"100px"}}></div>
        <a className="help" href="/">help/suggestion</a>
    </div>
    </div>
    )
}