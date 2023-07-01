import "../../styles/affliate/thirdComponent.css"

let cicle = [
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

function Circle(props){
    return(
        <div className="circle">
            <div className="circle-number"><p>{props.number}</p></div>
            <div className="circle-text"><p>{props.text}</p></div>
        </div>
    )
}

function ThirdComponent(){
    return(
        <div className="third-component">
            <h2>How Does the <span>Onepurse Affiliate <br/>Program</span> Work?</h2>
            <div className="circles-container">
                {cicle.map(circleCard =>  <Circle number={circleCard.number} text={circleCard.text}/>)}
            </div>
            
        </div>
    )
}

export default ThirdComponent;