import "../../styles/faq/question.css"

let questions = [
    {
        key:1,
        head: "Why do you require my ID?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion1"
    },
    {
        key:2,
        head:  "How do I verify my email or phone?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion2"
    },
    {
        key:3,
        head: "How do I add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion3"
    },
    {
        key:4,
        head: "What information do I need to add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion4"
    },
    {
        key:5,
        head:"Why do you require my ID?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion5"
    },
    {
        key:6,
        head:"How do I verify my email or phone?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion6"
    },
    {
        key:7,
        head: "What information do I need to add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion7"
    },
    {
        key:8,
        head:"How do I verify my email or phone?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion8"
    },
    {
        key:9,
        head: "What information do I need to add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion9"
    },
    {
        key:10,
        head: "Why do you require my ID?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion10"
    },
    {
        key:11,
        head: "What information do I need to add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion11"
    },
    {
        key:12,
        head:"How do I add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion12"
    },
    {
        key:13,
        head:"How do I add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion13"
    },
    {
        key:14,
        head: "What information do I need to add a new recipient?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at",
        target: "accordion14"
    }
]



function Accordion(props){
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

function Questions(){
    return(
        <div className="questions">
            <div className="link">
                <p>Account Setup</p>
                <p>Sending Money</p>
                <p>Security</p>
            </div>
            <div className="question">
                {questions.map(question=> <Accordion head={question.head} body={question.body} target={question.target} /> )}
            </div>
        </div>
    )
};

export default Questions;