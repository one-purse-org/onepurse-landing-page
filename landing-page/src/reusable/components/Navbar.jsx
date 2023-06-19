import { BrowserRouter as Router, Link } from 'react-router-dom';


function Navbar(){
    return(
    <div>
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
            <div className="nav-btn">
                <button type="button" className="button1">Affliate Dashboard</button>
                <button type="button" className="button2">Download App</button>
            </div>
        </div>
       
    </div>
    )
}

export default Navbar; 