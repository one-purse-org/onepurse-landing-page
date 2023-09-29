import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";
import FourthComponent from "./fourthComponent";
import FifthComponent from "./fifthComponent";
import SixthComponent from "./sixthComponent";
import Navbar from "../../reusable/components/Navbar"
import Footer from "../../reusable/components/footer"

function Affiliate(){
    return(
        <div>
            <Navbar color="white"/>
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