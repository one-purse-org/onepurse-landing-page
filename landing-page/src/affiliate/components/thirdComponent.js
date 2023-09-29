import "../../styles/affiliate/thirdComponent.css"

let affiliateSteps = [
    {
        key:1,
        number:1,
        text: "Create an Affiliate Account"
    },
    {
        key:2,
        number:2,
        text: "Share your Affiliate code with the users you onboard"
    },
    {
        key:3,
        number:3,
        text: "Set the exchange rate for every user you onboard"
    },
    {
        key:4,
        number:4,
        text: "Earn up to 80% in commissions from transactions made by users you onboard"
    }
]

function Affiliate(props){
    return(
        <div className="affiliate-step">
            <div className="affiliate-number"><p>{props.number}</p></div>
            <div className="affiliate-text"><p>{props.text}</p></div>
        </div>
    )
}

function ThirdComponent(){
    return(
        <div className="affiliate-third-component">
        <div className="container-xxl affiliate-third-component-container">
            <h2>How does the <span>Onepurse  <br/> Affiliate Program</span> Work?</h2>
           <div className="affiliate-steps  position-relative" >
                <img className="affiliate-thirdComponent-vertical position-absolute" src="img/affiliate-container-vertical.png"></img>
                {affiliateSteps.map(affiliateCard =>  <Affiliate number={affiliateCard.number} text={affiliateCard.text}/>)}
            </div>
            </div>
        </div>
    )
}

export default ThirdComponent;