import "../../styles/home/testimony.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "../../reusable/components/footer";
import FooterCta from "../../reusable/components/footer-cta";
import AmplitudeAnalytics from "../../utils/analytics"
import { useContext } from "react";
import { WaitlistRef } from "../../App";

let ctaImgMd = "img/footer-cta.svg"
let ctaImgLg = "img/footer-cta-lg.svg";

let text = [
    {
        key: 1,
        body: "I have been using OnePurse since inception and it is a reliable platform for sending money. The exchange rates are great and the transfers are sent quickly to my recipients. I trust OnePurse and I am always at ease using their services.",
        name: "Olayinka Arije - Aurora, Colorado.",
        icon: "img/customer3.svg",
        tag:"Olayinka Arije"
    },
    {
        key:2,
        body: '“As a nonprofit we often send money to our grantees in Nigeria and other African countries.OnePurse provides a uniquely convenient and affordable method for us to send money."',
        name: " Rob Kellogg, founder, Sathi Fund for Social Innovators. - Denver, Colorado",
        icon: "img/customer1.svg",
        tag:"Rob Kellogg"
    },
    {
        key:3,
        body: "Since my wife introduced OnePurse to me, I have been so impressed with their services and won’t attempt any other services. OnePurse is always customer conscious and goes the extra mile to satisfy their customers.",
        name: "MoranuOluwa Oloyede - Houston, Texas.",
        icon: "img/customer4.svg",
        tag:"Moranuoluwa Oloyede"
    },
    {
        key:4,
        body: "The swift action of OnePurse in making sure transactions are done in time cannot be overemphasised. I’m a big fan of OnePurse and I’ve enjoyed sending money through OnePurse to my family and friends.",
        name: "Adedayo Lawal - Lafayette, Louisiana",
        icon: "img/customer2.svg",
        tag:"Adedayo Lawal"
    }
]

function Card(props){
    
    return(
    <div className="person position-relative">
        <div className="testimony-text">
            <img src="img/quote.svg" className="quote"></img>
            <p className="testimony-body">
                {props.body}
            </p>
        </div>
        <div className="person-identity">
            <div className="testimony-left">
                <img src={props.icon} alt=""/>
            </div>
            <div className="testimony-right">
                <p className="testimony-tag">{props.tag}</p>
                <p className="testimony-name">{props.name}</p>
            </div>
        </div>
    </div>
    )
}



function Testimony(){
    function FooterContent(){
        function downloadButton(platform){
            AmplitudeAnalytics.trackEvent("LandingPage: DownloadApp", `Platform: ${platform}` )
        }
        let {addWaitlist, Waitlist} = useContext(WaitlistRef)
        return (
            <div className='home-footer-cta-content footer-cta-content position-absolute'>
                
                <h1 className="home-footer-cta-h1">Let <span>OnePurse</span> handle your foreign exchange, seamlessly</h1>
                <div className="footer-cta-button">
                    <div className="nav-btn">
                        <Waitlist/>
                        <button onClick={addWaitlist} type="button" className="button1">&nbsp;&nbsp;&nbsp;Join Waitlist&nbsp;&nbsp;&nbsp;</button>
                    </div>
                </div>
            </div>
        )
    }
   return(
    <div className="testimony">
        
        <FooterCta ctaImgMd={ctaImgMd} footerContent={<FooterContent/>} ctaImgLg={ctaImgLg}/>
        <Footer/>
    </div>
    
   )
}

export default Testimony;