import Navbar from "../../reusable/components/Navbar";
import Footer from "../../reusable/components/footer";
import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";

function Contact(){
    return(
        <div>
            <Navbar color="white"/>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <Footer/>
        </div>
        
    )
}

export default Contact