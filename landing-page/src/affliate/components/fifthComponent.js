import "../../styles/affliate/fifthComponent.css"


let questions = [
    {
        key:1,
        head: "What is the Onepurse Affiliate Program?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordionOne"
    },
    {
        key:2,
        head: "What are the requirements to be a Onepurse Affiliate?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordionTwo"
    },
    {
        key:3,
        head: "How do I earn up to $1,000 in passive income?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordionThree"
    },
    {
        key:4,
        head: "How do I earn up to 80% in commissions from my referrals transactions?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordionFour"
    }
]

function Questions(props){
    return(
        <div class="accordion accordion-flush" id={props.target + "-div"}>
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
        <div className="fifth-component-div container-c">
            <h2 className="fifth-component-div-h2">Affiliate FAQ</h2>
            <div className="fifth-component-div-questions">
                {questions.map(question => <Questions head={question.head}  body={question.body}  target={question.target}/>)}
            </div>
        </div>
    )
}

export default FifthComponent;

