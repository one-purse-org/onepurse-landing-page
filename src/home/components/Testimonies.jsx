import "../../styles/home/testimony.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "../../reusable/components/footer";
import FooterCta from "../../reusable/components/footer-cta";
import AmplitudeAnalytics from "../../utils/analytics"

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
        return (
            <div className='home-footer-cta-content footer-cta-content position-absolute'>
                <h1 className="home-footer-cta-h1">Let <span>OnePurse</span> handle your foreign exchange, seamlessly</h1>
                <div className="footer-cta-button">
                    <div className="nav-btn">
                        <button type="button" className="button1">&nbsp;&nbsp;&nbsp;Join Waitlist&nbsp;&nbsp;&nbsp;</button>
                    </div>
                </div>
            </div>
        )
    }
   return(
    <div className="testimony">
        <div className=" testimony-container">
            <div className="container">
                <h2>Here's what our <span>customers</span> <br/> say about OnePurse</h2>
                <div className="carousel-mobile">
                    <Carousel preventMovementUntilSwipeScrollTolerance={true} infiniteLoop={true} autoPlay={true} swipeScrollTolerance={50} interval={2500}>
                        <Card icon={text[0].icon} name={text[0].name} body={text[0].body} tag={text[0].tag}/>
                        <Card icon={text[1].icon} name={text[1].name} body={text[1].body} tag={text[1].tag}/>
                        <Card icon={text[2].icon} name={text[2].name} body={text[2].body} tag={text[2].tag}/>
                        <Card icon={text[3].icon} name={text[3].name} body={text[3].body} tag={text[3].tag}/>
                    </Carousel>
                </div>

                <div className="carousel-desktop">
                    <Carousel preventMovementUntilSwipeScrollTolerance={true} showThumbs={false} infiniteLoop={true} autoPlay={true} swipeScrollTolerance={100} interval={3000}>
                        <div className="d-flex">
                            <Card icon={text[0].icon} name={text[0].name} body={text[0].body} tag={text[0].tag}/>
                            <Card icon={text[1].icon} name={text[1].name} body={text[1].body} tag={text[1].tag}/>
                        </div>
                        <div className="d-flex">
                            <Card icon={text[1].icon} name={text[1].name} body={text[1].body} tag={text[1].tag}/>
                            <Card icon={text[2].icon} name={text[2].name} body={text[2].body} tag={text[2].tag}/>
                        </div>
                        <div className="d-flex">
                            <Card icon={text[2].icon} name={text[2].name} body={text[2].body} tag={text[2].tag}/>
                            <Card icon={text[3].icon} name={text[3].name} body={text[3].body} tag={text[3].tag}/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
        <FooterCta ctaImgMd={ctaImgMd} footerContent={<FooterContent/>} ctaImgLg={ctaImgLg}/>
        <Footer/>
    </div>
    
   )
}

export default Testimony;