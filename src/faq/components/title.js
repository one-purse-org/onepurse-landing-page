import "../../styles/faq/title.css"
import Navbar from "../../reusable/components/Navbar";

function Title(){
    return(
        <div className="title-div">
            <Navbar/>
            <div className="title-div-container">
                <div className="container">
                    <div className="title-img">
                        <img src="img/question-mark.png" alt="question mark"/>
                    </div>
                    <div className="title-h1">
                        <h1>
                            Frequently Asked Questions
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Title;