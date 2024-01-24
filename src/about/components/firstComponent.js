import "../../styles/about/first.css"
import Navbar from "../../reusable/components/Navbar"
import AmplitudeAnalytics from "../../utils/analytics"
import { useContext } from "react";
import { WaitlistRef } from "../../App";

function First(){
    function downloadButton(platform){
        AmplitudeAnalytics.trackEvent("LandingPage: DownloadApp", `Platform: ${platform}` )
    }
    let {addWaitlist, Waitlist} = useContext(WaitlistRef)
    return (
        <div className="first-div">
            <Navbar downloadBtn={true}/>
            <div className="container-lg ms-sm-0 ms-lg-auto pt-sm-5 pt-lg-4 pe-md-5 ps-md-5"> 
                <div className="first-div-container">
                    <div className="first-div-text">
                        <h1>
                            <span>Seamless</span> Global Money Transfers
                        </h1>
                        <p>
                            OnePurse was born from the desire to empower individuals to send money to Africa with 
                            unmatched affordability. We deeply understand the significance of supporting your loved 
                            ones back home, which is why we crafted OnePurse just for you. Our mission revolves around your needs.
                        </p>
                        <Waitlist/>
                        <div className="nav-btn">
                            <button onClick={addWaitlist} type="button" className="button1">&nbsp;&nbsp;&nbsp;Join Waitlist&nbsp;&nbsp;&nbsp;</button>
                        </div>
                    </div>
                    <div className="first-div-img">
                        <img className="guywithphone" src="img/guywithphone.png" alt="count-money"></img>
                        <img className="guywithphonelg" src="img/guywithphonelg.png"></img>
                    </div>
                </div>
            </div>
           
        </div>
    )
    
};

export default First;