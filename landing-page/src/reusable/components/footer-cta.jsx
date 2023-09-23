import React from "react";
import "../../styles/reuseable/footer-cta.css"

export default function FooterCta(){
    return(
    <div className="footer-cta position-relative" >
        <div className='footer-cta-image position-absolute'>
            <img src='img/footer-cta.svg'></img>
        </div>
        <div className='footer-cta-content position-absolute'>
            <h1>Let <span>Onepurse</span> handle your foreign exchange, seamlessly</h1>
            <div className="footer-cta-button">
                <a href="/"><img src="img/googleplay.svg"></img></a>
                <a href="/"><img src="img/appstorebuttton.svg"></img></a>
                {/* <a href="/"><button>
                    <span><img src="img/appstore.svg"></img></span>
                    <span>
                        <p>Download on the</p>
                        <h3>App Store</h3>
                    </span>
                </button></a>

                <a href="/"><button>
                    <span><img src="img/playstore.svg"></img></span>
                    <span>
                        <p>GET IT ON</p>
                        <h3>Google Play</h3>
                    </span>
                </button></a> */}
            </div>
                        
        </div>
    </div>
    )
}
