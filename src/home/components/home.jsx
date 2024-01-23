import Navbar from "../../reusable/components/Navbar";
import Waitlist from "../../reusable/components/waitlist";
import Advantage from "./Advantage";
import Cta from "./cta";
import Procedure from "./Procedures"
import Testimony from "./Testimonies";
function Home() {
    return (
        <div className="home-body">
            <Waitlist/>
            <Cta />
            <Procedure />
            <Advantage />
            <Testimony />
        </div>
    )
}

export default Home;
