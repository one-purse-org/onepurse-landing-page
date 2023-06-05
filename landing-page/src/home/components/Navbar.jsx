import React from "react";

const styles = {
  backgroundColor: "#1A1D4A",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "30px 5px 25px 15px "
}

function Navbar(){
    return(
    <div style={styles} className="navbar">
        <div className="logo">
         <img src="logo.svg"/>
        </div>
        
        <div className="links">
            <a>Home</a>
            <a>About</a>
            <a>Become an affliate</a>
            <a>Faq</a>
            <a>Contact Us</a>
        </div>
        <div className="nav-btn">
            <button type="button">Affliate Dashboard</button>
            <button type="button">Download App</button>
        </div>
    </div>
    )
}

export default Navbar; 