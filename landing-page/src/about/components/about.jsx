import Navbar from "../../reusable/components/Navbar";
import Footer from "../../reusable/components/footer";
import First from "./firstComponent";
import Second from "./secondCompenent";
import Third from "./thirdComponent";
import Fourth from "./fourthComponent";

function About(){
    return (
        <div>
            <Navbar/>
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Footer display="show" />
        </div>
    )

};

export default About;