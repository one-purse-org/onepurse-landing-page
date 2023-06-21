import "../../styles/home/procedures.css"

let text = [
    {
        key: 1,
        number: "1.",
        text: "Sign up with your details",
        image: "img/phone1.png"
    },
    {
        key:2,
        number: "2.",
        text: "Enter your Affiliate code",
        image: "img/phone2.png"
    },
    {
        key:3,
        number: "3.",
        text: "Enter Beneficiary Information",
        image: "img/phone3.png"
    },
    {
        key:4,
        number: "4.",
        text: "Send money",
        image: "img/phone4.png"
    }
]

function Card(props){
    return(<div className="phone">
        <h1>{props.number}</h1>
        <p>{props.text}</p>
        <img src={props.image} alt=""/>
    </div>)
}

function Procedure(){
    return(
        <div className="procedure">
            <div className="big-div">
                <div className="tag">
                    <p>Start sending <span>money</span> today</p>
                </div>
                <p className="steps">Create your Onepurse account in 4 easy steps via our mobile app!</p>
            </div>
            <div className="phones">
                {
                    text.map((phone) => {
                       return <Card number={phone.number} text={phone.text} image={phone.image}/>
                    })
                }
            </div>
        </div>
    )
}

export default Procedure;