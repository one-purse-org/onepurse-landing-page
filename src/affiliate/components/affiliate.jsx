import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";
import FourthComponent from "./fourthComponent";
import FifthComponent from "./fifthComponent";
import SixthComponent from "./sixthComponent";
import Footer from "../../reusable/components/footer"

function Affiliate(){
    return(
        <div id="affiliate">
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