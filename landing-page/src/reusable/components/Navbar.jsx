import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../../styles/reuseable/navbar.css"
import $ from "jquery"

function hamburger(){
        $(".cover-screen").addClass("to-cover")
        $(".cover-screen").removeClass("no-cover")
}

function close(){
    console.log("work")
        $(".cover-screen").removeClass("to-cover")
        $(".cover-screen").addClass("no-cover")
}

function Navbar(props){
    return(
        <div className={props.color==="white"?"navbar-white _navbar":"_navbar"}>
        <div className='container-c'>

        
            <div className='div-container'>
                <Link className="logo" to="/">
                    <img src={props.color==="white"?"img/Logo-white.png":"img/Logo.png"} alt="logo"/>
                </Link>
                
                <div className="links">
                    <Link className={props.color==="white"&&"link-white"} to="/">Home</Link>
                    <Link className={props.color==="white"&&"link-white"} to="/about">About</Link>
                    <Link className={props.color==="white"&&"link-white"} to="/affliate">Become an affliate</Link>
                    <Link className={props.color==="white"&&"link-white"} to="/FAQ">FAQ</Link>
                    <Link className={props.color==="white"&&"link-white"} to="/contact">Contact Us</Link>
                </div>
                <div className='hamburger-menu' onClick={hamburger}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="nav-btn">
                    <button type="button" className={props.color==="white"?"button1 button1-white" : "button1"}>Affliate Dashboard</button>
                    <button type="button" className="button2">&nbsp;&nbsp;&nbsp;Download App&nbsp;&nbsp;&nbsp;</button>
                </div>
                <div className='cover-screen no-cover'>

                    <div onClick={close}>
                        <i class="fa-solid fa-x close"></i>
                    </div>
                    <div className="links-sm">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/affliate">Become an affliate</Link>
                        <Link to="/faq">Faq</Link>
                        <Link to="/contact">Contact Us</Link>
                        <div className="nav-btn-sm">
                            <button type="button" className={props.color==="white"?"button1 button1-white" : "button1"}>Affliate Dashboard</button>
                            <button type="button" className="button2">&nbsp;&nbsp;&nbsp;Download App&nbsp;&nbsp;&nbsp;</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>    
        </div>
       

    )
}

export default Navbar; 