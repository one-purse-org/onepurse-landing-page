import Navbar from "../../reusable/components/Navbar";
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
        </div>
        
    )
}

export default Contact