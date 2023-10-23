import React from "react";
import "../../styles/home/cta.css"
import Navbar  from "../../reusable/components/Navbar";
import { useState } from "react";

function Cta(){
    let [height, setHeight] = useState()
    function setBackgroundHeight(){
         setHeight(document.querySelector(".cta").clientHeight + 20)
    }
    return(
        <div className="cta" onLoad={setBackgroundHeight} style={{backgroundSize:`110vw ${height}px`}}>
            <Navbar downloadBtn={false}/>
            <div>
                <div className="cta-container container-fluid">
                    <div className="map">
                        <img className="map-1" src="img/map-sm.png" alt="map"/>
                        <img className="map-2"src="img/map-lg.png"/>
                    </div>
                    <div className="background">
                        <div className="container ms-0 ps-4 position-relative" >
                            <div className="cta-text position-absolute">
                                <h1>Send money home in just a few clicks without <span style={{color:"#6B7CF3"}}>hassle.</span></h1>
                                <p className="p">You might be miles away from home but getting money across to your loved ones shouldn't be a hassle.</p>
                                {/* <a href="/"><button className="get-started">Get Started</button></a> */}
                                <a href="/" className="apple cta-download"><img src="img/apple-sm.png"></img></a>
                                <a href="/" className="cta-download"><span><img src="img/googleplay-sm.png"></img></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    

}

export default Cta;