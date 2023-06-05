import React from "react";

const styles = {
  backgroundColor: "#1A1D4A",
  color: "#fff"
}

function Navbar(){
    return(
    <div style={styles}>
        <div className="logo">
         <img src="logo.svg"/>
        </div>
        
        <div className="links">
            <p>Home</p>
            <p>About</p>
            <p>Become an affliate</p>
            <p>Faq</p>
            <p>Contact Us</p>
        </div>
        <div className="nav-btn">
            <button type="button">Affliate Dashboard</button>
            <button type="button">Download App</button>
        </div>
    </div>
    )
}

export default Navbar;