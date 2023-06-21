import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../../styles/reuseable/navbar.css"
import $ from "jquery"

function hamburger(){
        console.log("close")
        $(".cover-screen").addClass("to-cover")
        $(".cover-screen").removeClass("no-cover")
        $("body").addClass("over-flow")
}

function close(){
        console.log("close")
        $(".cover-screen").removeClass("to-cover")
        $(".cover-screen").addClass("no-cover")
        $("body").removeClass("over-flow")
}

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="logo"/>
            </div>
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/affliate">Become an affliate</Link>
                <Link to="/faq">Faq</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className='hamburger-menu' onClick={hamburger}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="nav-btn">
                <button type="button" className="button1">Affliate Dashboard</button>
                <button type="button" className="button2">Download App</button>
            </div>
            <div className='cover-screen no-cover'>
                <div className="links-sm">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/affliate">Become an affliate</Link>
                    <Link to="/faq">Faq</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <i class="fa-solid fa-x close" onClick={close}></i>
            </div>
        </div>
       

    )
}

export default Navbar; 