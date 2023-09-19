import "../../styles/home/testimony.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "../../reusable/components/footer";



let text = [
    {
        key: 1,
        body: "I have been using Onepurse since inception and it is a reliable platform for sending money. The exchange rates are great and the transfers are sent quickly to my recipients. I trust Onepurse and I am always at ease using their services.",
        name: "Olayinka Arije - Aurora, Colorado.",
        icon: "img/customer3.svg",
        tag:"@Olayinka Arije"
    },
    {
        key:2,
        body: '“As a nonprofit we often send money to our grantees in Nigeria and other African countries.Onepurse provides a uniquely convenient and affordable method for us to send money."',
        name: " Rob Kellogg, founder, Sathi Fund for Social Innovators. - Denver, Colorado",
        icon: "img/customer1.svg",
        tag:"@Rob Kellogg"
    },
    {
        key:3,
        body: "Since my wife introduced Onepurse to me, I have been so impressed with their services and won’t attempt any other services. Onepurse is always customer conscious and goes the extra mile to satisfy their customers.",
        name: "MoranuOluwa Oloyede - Houston, Texas.",
        icon: "img/customer4.svg",
        tag:"@Moranuoluwa Oloyede"
    },
    {
        key:4,
        body: "The swift action of Onepurse in making sure transactions are done in time cannot be overemphasised. I’m a big fan of Onepurse and I’ve enjoyed sending money through Onepurse to my family and friends.",
        name: "Adedayo Lawal - Lafayette, Louisiana",
        icon: "img/customer2.svg",
        tag:"@Adedayo Lawal"
    }
]

function Card(props){
    return(
    <div className="person position-relative">
        <div className="position-absolute testimony-quote">
            <img src="img/testimony-quote.svg"></img>
        </div>
        <div className="testimony-text">
            <p className="testimony-body">
                {props.body}
            </p>
        </div>
        <div className="person-identity">
            <div className="testimony-left">
                <img src={props.icon} alt=""/>
            </div>
            <div className="testimony-right">
                <p className="testimony-name">{props.name}</p>
                <p className="testimony-tag">{props.tag}</p>
            </div>
        </div>
    </div>
    )
}



function Testimony(){
   return(
    <div className="testimony">
        <div className=" testimony-container">
            <div className="container">
                <h2>Here's what our <span>customers</span> <br/> say about Onepurse</h2>
                
                <Card icon={text[0].icon} name={text[0].name} body={text[0].body} tag={text[0].tag}/>
                {/* <Card icon={text[1].icon} name={text[1].name} body={text[1].body} tag={text[1].tag}/>
                <Card icon={text[2].icon} name={text[2].name} body={text[2].body} tag={text[2].tag}/>
                <Card icon={text[3].icon} name={text[3].name} body={text[3].body} tag={text[3].tag}/> */}
                
            </div>
        </div>
        <Footer display="" />
    </div>
    
   )
}

export default Testimony;


{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> 
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <Card icon={text[0].icon} name={text[0].name} body={text[0].body} tag={text[0].tag}/>
                    </div>
                    <div className="carousel-item">
                        <Card icon={text[1].icon} name={text[1].name} body={text[1].body} tag={text[1].tag}/>
                    </div>
                    <div className="carousel-item">
                        <Card icon={text[2].icon} name={text[2].name} body={text[2].body} tag={text[2].tag}/>
                    </div>
                    <div className="carousel-item">
                        <Card icon={text[3].icon} name={text[3].name} body={text[3].body} tag={text[3].tag}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> */}