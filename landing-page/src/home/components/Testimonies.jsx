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




function Testimony(){
   return(
    <div className="testimony">
        <h1>Here's what our <span>customers</span> <br/> say about Onepurse</h1>
        <div className="testimonies">
            {text.map(person => {return <Card name={person.name} icon={person.icon} body={person.body} tag={person.tag}/>})}
        </div>
        <div className="rectangle">

        </div>
    </div>
    
   )
}

export default Testimony;