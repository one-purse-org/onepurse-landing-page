import "../../styles/home/advantage.css"

let text = [
    {
        key: 1,
        title: "Zero Fees",
        body: "We provide competitive exchange rates and do not charge you any fee to send on the OnePurse app.",
        icon: <img src='img/advantage-fees.svg' className='icon-img' alt='zero fees'/>
    },
    {
        key:2,
        title: "Security and Safety",
        body: "We leverage the most secure technology to ensure your funds and private information are safe and protected.",
        icon: <img src='img/advantage-security.svg' className='icon-img' alt='shield'/>
    },
    {
        key:3,
        title: "Fast Payouts",
        body: "Send money to your loved ones with OnePurse and they will receive it in minutes.",
        icon: <img src='img/advantage-payouts.svg' className='icon-img' alt='rocket-icon'/>
    },
    {
        key:4,
        title:"Great Customer Service",
        body:"We go the extra mile to satisfy our customers, should you need assistance, we are always ready to serve you.",
        icon: <img src='img/advantage-support.svg' className='icon-img' alt='shield-icon'/>
    }
]

function Card(props){
    return(<div className="_card">
        <div className="card-left">
           <img src="img/advantage-bar.svg"></img>
        </div>
        <div className="card-right">
            {props.icon}
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
                <h1 className="heading container">Why Choose OnePurse</h1>
                <div className="container advantage-container">
                    <div className="position-relative">
                            <img src="img/advantage-vertical.svg" className="position-absolute advantage-vertical"></img>
                            <img src="img/advantage-vertical.svg" className="position-absolute advantage-vertical-second"></img>
                            
                            <div className="card-div ">
                                {text.map(function(text){
                                    return <Card icon={text.icon} title={text.title} body={text.body} />
                                })}
                            </div>
                            
                    </div>
                </div>
        </div>
    )
}

export default Advantage;