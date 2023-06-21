import "../../styles/home/advantage.css"

let text = [
    {
        key: 1,
        title: "Zero Fees",
        body: "We provide competitive exchange rates and do not charge you any fee to send on the Onepurse app.",
        icon: "fa-regular fa-circle-dollar"
    },
    {
        key:2,
        title: "Security and Safety",
        body: "We leverage the most secure technology to ensure your funds and private information are safe and protected.",
        icon: "fa-sharp fa-shield-check"
    },
    {
        key:3,
        title: "Fast Payouts",
        body: "Send money to your loved ones with Onepurse and they will receive it in minutes.",
        icon: "fa-sharp  fa-rocket-launch"
    },
    {
        key:4,
        title:"Great Customer Service",
        body:"We go the extra mile to satisfy our customers, should you need assistance, we are always ready to serve you.",
        icon:"fa-sharp fa-headset"
    }
]

function Card(props){
    return(<div className="card">
        <div className="card-left">
            <i className={props.icon}></i>
        </div>
        <div className="card-right">
            <h3>
                {props.title}
            </h3>
            <p>{props.body}</p>
        </div>
    </div>)
}



function Advantage(){
    return(
        <div className="advantage">
            <h1 className="heading">The Onepurse Advantage</h1>
            <div className="card-div">
              
                    {text.map(function(text){
                        return <Card icon={text.icon} title={text.title} body={text.body} />
                    })}
            </div>
        </div>
    )
}

export default Advantage;