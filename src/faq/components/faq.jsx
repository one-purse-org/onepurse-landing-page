import Navbar from "../../reusable/components/Navbar";
import Footer from "../../reusable/components/footer"
import Title from "./title";
import Questions from "./questions";
import ThirdComponent from "../../contact/components/thirdComponent";

function Faq(){
    return(
        <div className="faq">
            <Title/>
            <Questions/>
            <ThirdComponent/>
            <Footer display="show"/>
        </div>
        

    )
}

export default Faq;
