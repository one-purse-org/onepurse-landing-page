import "../../styles/about/first.css"
import Navbar from "../../reusable/components/Navbar"
function First(){
    return (
        <div className="first-div">
            <Navbar/>
            <div className="container ms-sm-0 ms-md-auto"> 
                <div className="first-div-container">
                    <div className="first-div-text">
                        <h1>
                            <span>Seamless</span> Global Money Transfers
                        </h1>
                        <p>
                            Onepurse was born from the desire to empower individuals to send money to Africa with 
                            unmatched affordability. We deeply understand the significance of supporting your loved 
                            ones back home, which is why we crafted OnePurse just for you. Our mission revolves around your needs.
                        </p>
                    </div>
                    <div className="first-div-img">
                        <img src="img/guywithphone.png" alt="count-money"></img>
                    </div>
                </div>
            </div>
           
        </div>
    )
    
};

export default First;