import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";
import FourthComponent from "./fourthComponent";
import FifthComponent from "./fifthComponent";
import SixthComponent from "./sixthComponent";
import Footer from "../../reusable/components/footer"
import Waitlist from "../../reusable/components/waitlist";

function Affiliate(){
    return(
        <div id="affiliate">
            <Waitlist/>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent/>
            <FifthComponent/>
            <SixthComponent/>
            <Footer/>
        </div>
    )
}

export default Affiliate