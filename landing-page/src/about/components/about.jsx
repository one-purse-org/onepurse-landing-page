import Footer from "../../reusable/components/footer";
import First from "./firstComponent";
import Second from "./secondCompenent";
import Third from "./thirdComponent";
import Fourth from "./fourthComponent";
import FooterCta from "../../reusable/components/footer-cta";
let ctaImgMd = "img/footer-cta-about-sm.png"
let ctaImgLg = "img/footer-cta-lg.svg";
let footerContent = <div className='footer-cta-content position-absolute'><h1>Send money to your loved ones today</h1>
<p>Experience the Onepurse App now and unlock swift, hassle-free money transfers to your friends and loved ones. It's simplicity redefined.</p>
<div className="footer-cta-button">
    <a href="/"><img src="img/googleplay.svg"></img></a>
    <a href="/"><img src="img/appstorebuttton.svg"></img></a>
</div></div>

function About(){
    return (
        <div id="about">
            <First/>
             <Second/>
            <Third/>
            <Fourth/> 
            <FooterCta ctaImgMd={ctaImgMd} footerContent={footerContent} ctaImgLg={ctaImgLg}/>
            <Footer/>
        </div>
    )

};

export default About;