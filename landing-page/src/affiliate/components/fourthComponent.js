import "../../styles/affiliate/fourthComponent.css"

let card = [
    {
        key:1,
        head: "Earn passive Income",
        image:"img/passive-income.png",
        body: "Get paid every time a user you onboard sends money using the Onepurse App, with no limit on your earnings and a lifetime cashout for your referrals."
    },
    {
        key:2,
        head: "Dedicated account manager",
        image:"img/account-manager.png",
        body: "Gain access to professional support, marketing materials, and a dedicated Onepurse Affiliate manager."
    },
    {
        key:3,
        head: "Exclusive exchange rates",
        image:"img/exchange-rate.png",
        body: "If you need to send money, get an even higher exchange rate for your transactions. "
    },
    {
        key:4,
        head: "Onepurse Branded Items",
        image:"img/merchandise.png",
        body: "Onepurse Affiliates will get brandedOnepurse merchandise to show off and share with their family & friends"
    }
]

function Card(props){
    return(
        <div className="affliate-fourth-component-card">
            <div className="affliate-fourth-card-image" >
                <img src={props.image}></img>  
            </div>
            <div className="affliate-fourth-card-content">
                <h4>{props.head}</h4>
                <p>{props.body}</p>
            </div>
            
        </div>
    )
}


function FourthComponent(){
    return(
        <div className="affliate-fourth-component">
        <div className="container affliate-fourth-component-container">
            <h2>What’s in it for you?</h2>
            <div className="affliate-fourth-component-card-div">
                {card.map(cardText => <Card head={cardText.head} body={cardText.body} image={cardText.image}/>)}
            </div>
        </div>
        </div>
    )
}

export default FourthComponent;