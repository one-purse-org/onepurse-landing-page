import React from "react";

const styles = {
  backgroundColor: "#1A1D4A",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "3% 0 5% 3%",
  width: "100%"
}

function Navbar(){
    return(
    <div>
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
                <button type="button" className="button1">Affliate Dashboard</button>
                <button type="button" className="button2">Download App</button>
            </div>
        </div>
        <div className="nav-content">
            <div className="text">
                <p>You might be miles away from home but getting money across to your loved ones shouldn't be a hassle</p>
                <button type="button">
                    <p>Get it on</p>
                    <p>Google Play</p>
                </button>
                <button type="button">
                    <p>Download on the</p>
                    <p>App Store</p>
                </button>
            </div>
        </div>
        <div></div>
    </div>
    )
}

export default Navbar; 