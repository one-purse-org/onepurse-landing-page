import Footer from "../../reusable/components/footer"
import Title from "./title";
import Questions from "./questions";
import ThirdComponent from "../../contact/components/thirdComponent";
import Waitlist from "../../reusable/components/waitlist";

function Faq(){
    return(
        <div className="faq">
            <Waitlist/>
            <Title/>
            <Questions/>
            <ThirdComponent/>
            <Footer display="show"/>
        </div>
        

    )
}

export default Faq;
