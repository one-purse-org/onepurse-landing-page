import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../../styles/reuseable/navbar.css"
import $ from "jquery"

function hamburger(){
        $(".cover-screen").addClass("to-cover")
        $(".cover-screen").removeClass("no-cover")
        $("body").addClass("over-flow")
}

function close(){
        $(".cover-screen").removeClass("to-cover")
        $(".cover-screen").addClass("no-cover")
        $("body").removeClass("over-flow")
}

function Navbar(props){
    return(
        <div className={props.color==="white"?"navbar-white navbar":"_navbar"}>
            <div className='div-container'>
            <div className="logo">
                <img src={props.color==="white"?"img/Logo-white.png":"img/Logo.png"} alt="logo"/>
            </div>
            
            <div className="links">
                <Link className={props.color==="white"&&"link-white"} to="/">Home</Link>
                <Link className={props.color==="white"&&"link-white"} to="/about">About</Link>
                <Link className={props.color==="white"&&"link-white"} to="/affliate">Become an affliate</Link>
                <Link className={props.color==="white"&&"link-white"} to="/faq">Faq</Link>
                <Link className={props.color==="white"&&"link-white"} to="/contact">Contact Us</Link>
            </div>
            <div className='hamburger-menu' onClick={hamburger}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="nav-btn">
                <button type="button" className={props.color==="white"?"button1 button1-white" : "button1"}>Affliate Dashboard</button>
                <button type="button" className="button2">Download App</button>
            </div>
            <div className='cover-screen no-cover'>
                <div className="links-sm">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/affliate">Become an affliate</Link>
                    <Link to="/faq">Faq</Link>
                    <Link to="/contact">Contact Us</Link>
                    <div className="nav-btn-sm">
                        <button type="button" className={props.color==="white"?"button1 button1-white" : "button1"}>Affliate Dashboard</button>
                        <button type="button" className="button2">Download App</button>
                    </div>
                </div>
               
                <i class="fa-solid fa-x close" onClick={close}></i>
            </div>
            </div>
            
        </div>
       

    )
}

export default Navbar; 