import Waitlist from "../../reusable/components/waitlist";
import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";

function Contact(){
    return(
        <div>
            <Waitlist/>
            <FirstComponent/>
            <SecondComponent/> 
            <ThirdComponent/>
        </div>
        
    )
}

export default Contact