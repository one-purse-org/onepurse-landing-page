import { Link } from 'react-router-dom';
import "../../styles/reuseable/navbar.css"
import $ from "jquery"

function hamburger(){
        $(".cover-screen").addClass("to-cover")
        $(".cover-screen").removeClass("no-cover")
        $("body").addClass("noScroll")
}

function close(){
        $(".cover-screen").removeClass("to-cover")
        $(".cover-screen").addClass("no-cover")
        $("body").removeClass("noScroll")
}



function Navbar(props){
    return(
        <div className={props.color==="white"?"navbar-white _navbar container-fluid":"_navbar container-fluid"}>
        <div className=' div-container'>
                <Link onClick={close} className="logo" to="/">
                    <img src={props.color==="white"?"img/logo-white-bg.svg":"img/logo.svg"} alt="logo"/>
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 links">
                        <li className="nav-item">
                            <Link className='nav-link' to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/affiliate">Become an Affiliate</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/faq">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/contact">Contact Us</Link>
                        </li>
                </ul>
                <div className='hamburger-menu' onClick={hamburger}>
                    <img src={props.color==="white"?'img/hamburger-black.svg':'img/hamburger.svg'} className='hamburger-menu-img'></img>
                </div>
                <div className="nav-btn">
                    {/* <button type="button" className={props.color==="white"?"button1 button1-white" : "button1"}>Affiliate Dashboard</button> */}
                    <button type="button" className="button2">&nbsp;&nbsp;&nbsp;Affiliate Dashboard&nbsp;&nbsp;&nbsp;</button>
                </div>
                <div className='cover-screen no-cover'>
                    <div className="container-fluid cover-screen-div">
                     
                            <div className='cover-screen-top'>
                                <Link onClick={close} className="logo" to="/">
                                    <img src="img/logo-white-bg.svg" alt="logo"/>
                                </Link>
                                <div onClick={close}>
                                    <img src='img/close.png'></img>
                                </div>
                            </div>
                            <div className="links-sm">
                                <Link onClick={close} to="/about">About</Link>
                                <Link onClick={close} to="/affiliate">Become an Affiliate</Link>
                                <Link onClick={close} to="/faq">FAQ</Link>
                                <Link onClick={close} to="/contact">Contact Us</Link>
                            </div>
                    </div>  
                    <hr className='cover-screen-horizontal-rule'/>
                    <div className="container-fluid cover-screen-div">
                            <div className="nav-btn-sm">
                                    {/* <button type="button" className={props.color==="white"?"button1 button1-white" : "button1"}>Affiliate Dashboard</button> */}
                                    <button type="button" className="button2">&nbsp;&nbsp;&nbsp;Affiliate Dashboard&nbsp;&nbsp;&nbsp;</button>
                            </div>
                    </div>
                        
                    
                </div>
            </div>    
        </div>
       

    )
}

export default Navbar; 