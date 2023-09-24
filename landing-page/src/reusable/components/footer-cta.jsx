import React from "react";
import "../../styles/reuseable/footer-cta.css"

export default function FooterCta(){
    return(
    <div className="footer-cta position-relative" >
        <div className='footer-cta-image position-absolute'>
            <img className="footer-cta-image-md" src='img/footer-cta.svg'></img>
            <img className="footer-cta-image-lg" src="img/footer-cta-lg.svg"></img>
        </div>
        <div className='footer-cta-content position-absolute'>
            <h1>Let <span>Onepurse</span> handle your foreign exchange, seamlessly</h1>
            <div className="footer-cta-button">
                <a href="/"><img src="img/googleplay.svg"></img></a>
                <a href="/"><img src="img/appstorebuttton.svg"></img></a>
            </div>
                        
        </div>
    </div>
    )
}
