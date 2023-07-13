import Navbar from "../../reusable/components/Navbar";
import Advantage from "./Advantage";
import Cta from "./cta";
import Procedure from "./Procedures"
import Testimony from "./Testimonies";
import Footer from "../../reusable/components/footer";

function Home() {
    return (
        
        <div className="home-body">
            {/* <Navbar/> */}
            <Cta />
            <Procedure />
            <Advantage />
            <Testimony />
            <Footer display="show"/>
        </div>
    )
}

export default Home;
