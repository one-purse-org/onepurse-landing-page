import "../../styles/affiliate/fifthComponent.css"


let questions = [
    {
        key:1,
        head: "What is the Onepurse Affiliate Program?",
        body: "The affiliate program is designed to help you generate passive income. All you need to do is inform individuals about OnePurse for sending money, and you'll earn a commission each time they use the service.",
        target: "accordionOne"
    },
    {
        key:2,
        head: "What are the requirements to be a Onepurse Affiliate?",
        body: "You need a smartphone and the enthusiasm to spread the word about what we do at OnePurse.",
        target: "accordionTwo"
    },
    {
        key:3,
        head: "How do I earn up to $1,000 in passive income?",
        body: "Get paid every time a user you onboard sends money using the Onepurse App, with no limit on your earnings and a lifetime cashout for your referrals.",
        target: "accordionThree"
    },
    {
        key:4,
        head: "How do I earn up to 70% in commissions from my referrals transactions?",
        body: "You can earn up to 70% by onboarding 91-100 customers which puts you at the platinum tier",
        target: "accordionFour"
    }
]

function Questions(props){
    return(
        <div class="accordion accordion-flush" id={props.target + "-div"}>
            <hr/>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.target}>
                    {props.head}
                </button>
                </h2>
                <div id={props.target} class="accordion-collapse collapse">
                <div class="accordion-body">
                    {props.body}
                </div>
                </div>
            </div>
        </div>
        
    )
}

function FifthComponent(){
    return(
        <div className="affiliate-fifth-component">
            <div className="affiliate-fifth-container container-md">
            <h2 className="affiliate-fifth-component-div-h2 ">Affiliate FAQ</h2>
            <p className="affiliate-fifth-component-div-p">If we don’t answer your question here, please <a href="/">contact us</a></p>
                <div className="affiliate-fifth-component-div-questions">
                    {questions.map(question => <Questions head={question.head}  body={question.body}  target={question.target}/>)}
                    <hr/>
                </div>
            </div>   
        </div>
    )
}

export default FifthComponent;

