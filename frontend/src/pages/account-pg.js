import {ReactComponent as Account1} from './elements/edit.svg'
import Navbar from "./elements/navbar"
import { UseStates } from './elements/storage';
import { useEffect } from 'react';
export function Account(){
    const {addr}=UseStates();
    const address="http://"+addr.Ip+":"+addr.Port;
    function fileinp() {
        console.log("File input clicked");
    }
    
    function permission() {
        console.log("File selected");   
    }
    
    useEffect(()=>{
        setTimeout(()=>{
        fetch(address+"/accdet").then(response => response.text())
        .then((data)=>{
            let a=[];
            a=data.split('[]');
            document.getElementById("name-box").textContent=a[0];
            fetch(address+"/static/"+a[1]).then(response=>response.blob())
            .then((data)=>{
                const uri=URL.createObjectURL(data);
                document.getElementById("prof-pic").style.backgroundImage="url('"+uri+"')";
            });
        });
    },);},500);
    
    function open1(){document.getElementById('filer').click();}
    return(
        <div style={{maxWidth:"98dvw"}}>

        <div className="body-a">
        <div className="prof-pic-container">
        <div className="profile-pic" id="prof-pic" ></div>
    </div>
        <button className="change-btn" onClick={open1} role="none" >
        <Account1 className="svg" />
        </button>
        <h2  className="h2" id="name-box">Name</h2>
        <form action="http://127.0.0.1:5000/" method="post" style={{display:"none"}} id="profile-form" encType="multipart/form-data" >
            <input type="file" id="filer" onClick={fileinp} onChange={permission} name="prof_file" accept=".jpg" />
        </form>
        <div className="positioner"></div>
        <div className="aligner">
        <h1 className='head'>My Activity</h1>
        <a className="a1" href="/">My Order</a>
        <a className="a1" href="/">Wish List</a>
        <a className="a1" href="/">Saved Address</a>
        <a className="a1" href="/" style={{marginBottom:"10px"}}>Premium</a>
        <div style={{width:"95dvw",height: "1.5px",backgroundColor:"black",marginTop:"0px"}}></div>
        <h1 className='head' >Manage Account</h1>
        <a className="a1" href="/">Change email</a>
        <a className="a1" href="/" >Change Password</a>
        <a className="a1" href="/" style={{marginBottom:"10px"}}>logout</a>
        <div style={{width:"95dvw",height: "1.5px",backgroundColor: "black",marginBottom:"100px"}}></div>
        <a className="help" href="/">help/suggestion</a>
    </div>
    </div>
    <Navbar />
        </div>
    )
}