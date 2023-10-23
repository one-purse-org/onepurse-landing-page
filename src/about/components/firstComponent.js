import "../../styles/about/first.css"
import Navbar from "../../reusable/components/Navbar"
function First(){
    return (
        <div className="first-div">
            <Navbar downloadBtn={true}/>
            <div className="container-md ms-sm-0 ms-md-auto pt-sm-5 pt-lg-0"> 
                <div className="first-div-container">
                    <div className="first-div-text">
                        <h1>
                            <span>Seamless</span> Global Money Transfers
                        </h1>
                        <p>
                            OnePurse was born from the desire to empower individuals to send money to Africa with 
                            unmatched affordability. We deeply understand the significance of supporting your loved 
                            ones back home, which is why we crafted OnePurse just for you. Our mission revolves around your needs.
                        </p>
                        <a href="/" className="apple cta-download"><img src="img/apple-sm.png"></img></a>
                        <a href="/" className="cta-download"><span><img src="img/googleplay-sm.png"></img></span></a>
                    </div>
                    <div className="first-div-img">
                        <img className="guywithphone" src="img/guywithphone.png" alt="count-money"></img>
                        <img className="guywithphonelg" src="img/guywithphonelg.png"></img>
                    </div>
                </div>
            </div>
           
        </div>
    )
    
};

export default First;