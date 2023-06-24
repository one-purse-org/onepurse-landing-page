import Navbar from "../../reusable/components/Navbar";
import Footer from "../../reusable/components/footer"
import Title from "./title";
import Questions from "./questions";

function Faq(){
    return(
        <div>
            <Navbar color="white"/>
            <Title/>
            <Questions/>
            <Footer display="show"/>
        </div>
        

    )
}

export default Faq;
