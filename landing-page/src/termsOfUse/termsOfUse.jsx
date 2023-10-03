import "./termsOfUse.css";
import React from "react";
import Navbar from "../reusable/components/Navbar";
import Footer from "../reusable/components/footer";

function TermsOfUse(){
    return(
        <div>
            <Navbar/>
            <div className="terms-of-use">
                <h1>Hello world</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default TermsOfUse;