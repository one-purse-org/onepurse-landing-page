import "../../styles/home/testimony.css"

let text = [
    {
        key: 1,
        body: "I have been using Onepurse since inception and it is a reliable platform for sending money. The exchange rates are great and the transfers are sent quickly to my recipients. I trust Onepurse and I am always at ease using their services.",
        name: "Olayinka Arije - Aurora, Colorado.",
        icon: "img/olayinka.png",
        tag:"@Olayinka Arije"
    },
    {
        key:2,
        body: '“As a nonprofit we often send money to our grantees in Nigeria and other African countries.Onepurse provides a uniquely convenient and affordable method for us to send money."',
        name: " Rob Kellogg, founder, Sathi Fund for Social Innovators. - Denver, Colorado",
        icon: "img/rob.png",
        tag:"@Rob Kellogg"
    },
    {
        key:3,
        body: "Since my wife introduced Onepurse to me, I have been so impressed with their services and won’t attempt any other services. Onepurse is always customer conscious and goes the extra mile to satisfy their customers.",
        name: "MoranuOluwa Oloyede - Houston, Texas.",
        icon: "img/moranuoluwa.png",
        tag:"@Moranuoluwa Oloyede"
    },
    {
        key:4,
        body: "The swift action of Onepurse in making sure transactions are done in time cannot be overemphasised. I’m a big fan of Onepurse and I’ve enjoyed sending money through Onepurse to my family and friends.",
        name: "Adedayo Lawal - Lafayette, Louisiana",
        icon: "img/adedayo.png",
        tag:"@Adedayo Lawal"
    }
]

function Card(props){
    return(<div className="person">
        <div className="testimony-left">
            <img src={props.icon} alt=""/>
        </div>
        <div className="testimony-right">
            <p className="testimony-body">
                {props.body}
            </p>
            <p className="testimony-name">{props.name}</p>
            <p className="testimony-tag">{props.tag}</p>
        </div>
    </div>)
}

function CardCarousel(props){
    return(<div className="person">
        <div className="testimony-text">
            <p className="testimony-body">
                {props.body}
            </p>
        </div>
        <div className="testimony-bottom">
            <div className="testimony-bottom-image">
                <img src={props.icon} alt=""/>
            </div>
          
            <div className="testimony-bottom-text">
                <p className="testimony-name">{props.name}</p>
                <p className="testimony-tag">{props.tag}</p>
            </div>   
        </div>
    </div>)
}





function Testimony(){
   return(
    <div className="testimony">
        <h2>Here's what our <span>customers</span> <br/> say about Onepurse</h2>
        <div className="testimonies">
            {text.map(person => {return <Card name={person.name} icon={person.icon} body={person.body} tag={person.tag}/>})}
        </div>
        <div className="rectangle">

        </div>
        <div id="carouselExampleControls" class="carousel slide testimony-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div class="carousel-item active">
                         <CardCarousel icon={text[0].icon} name={text[0].name} body={text[0].body} tag={text[0].tag}/>
                    </div>
                    <div className="carousel-item">
                        <CardCarousel icon={text[1].icon} name={text[1].name} body={text[1].body} tag={text[1].tag}/>
                    </div>
                    <div className="carousel-item">
                      <CardCarousel icon={text[2].icon} name={text[2].name} body={text[2].body} tag={text[2].tag}/>
                    </div>
                    <div className="carousel-item">
                      <CardCarousel icon={text[3].icon} name={text[3].name} body={text[3].body} tag={text[3].tag}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
    
   )
}

export default Testimony;