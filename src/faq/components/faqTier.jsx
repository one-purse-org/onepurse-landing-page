import Navbar from "../../reusable/components/Navbar";
import Footer from "../../reusable/components/footer";
import "../../styles/faq/tier.css";
import Tier1 from "./tier1";
import Tier2 from "./tier2";
import Tier3 from "./tier3";
function Tier(){
    return (
    <div className="tier">
        <Navbar/>
        <div className="container-fluid px-md-5 py-md-5 px-sm-2 py-sm-3">
            <h2 className="tier-h2 mt-3">
                KYC tiers limits and document requirement
            </h2>
            <Tier1 />
            <Tier2/>
            <Tier3/>
        </div>
        <Footer/>
    </div>
    )
}

export default Tier