import React from "react";
import "../../styles/home/cta.css"
import Navbar  from "../../reusable/components/Navbar";

function Cta(){
    return(
        <div className="cta">
            <Navbar/>
            <div>
                <div className="cta-container">
                    <div className="map">
                        <img className="map-1" src="img/map.svg" alt="map"/>
                        <img className="map-2"src="img/WorldMap1.png"/>
                    </div>
                    <div className="background">
                        <div className="container ms-0 ps-4 position-relative" >
                            <div className="cta-text position-absolute">
                                <h1>Send money home in just a few clicks without <span style={{color:"#6B7CF3"}}>hassle.</span></h1>
                                <p className="p">You might be miles away from home but getting money across to your loved ones shouldn't be a hassle.</p>
                                <a href="/"><button className="get-started">Get Started</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    

}

export default Cta;