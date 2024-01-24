import Footer from "../../reusable/components/footer";
import First from "./firstComponent";
import Second from "./secondCompenent";
import Third from "./thirdComponent";
import Fourth from "./fourthComponent";
import FooterCta from "../../reusable/components/footer-cta";
import AmplitudeAnalytics from "../../utils/analytics"
import Waitlist, { addWaitlist } from "../../reusable/components/waitlist";
import { useContext } from "react";
let ctaImgMd = "img/footer-cta.svg"
let ctaImgLg = "img/footer-cta-lg.svg";

function FooterContent(){
    function downloadButton(platform){
        AmplitudeAnalytics.trackEvent("LandingPage: DownloadApp", `Platform: ${platform}` )
    }
    return(
        <div className='about-footer-cta-content footer-cta-content position-absolute'>
            <h1 className="about-footer-cta-h1">Send money to your loved ones today</h1>
            <p>Experience the OnePurse App now and unlock swift, hassle-free money transfers to your friends and loved ones. It's simplicity redefined.</p>
            <div className="footer-cta-button">
                <div className="nav-btn">
                    <button onClick={addWaitlist} type="button" className="button1">&nbsp;&nbsp;&nbsp;Join Waitlist&nbsp;&nbsp;&nbsp;</button>
                </div>
            </div>
        </div>
    )
}

function About(){
    return (
        <div id="about">
            <Waitlist/>
            <First/>
            <Second/>
            <Third/>
            <Fourth/> 
            <FooterCta ctaImgMd={ctaImgMd} footerContent={<FooterContent/>} ctaImgLg={ctaImgLg}/>
            <Footer/>
        </div>
    )

};

export default About;