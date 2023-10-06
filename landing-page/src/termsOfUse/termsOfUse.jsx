import "./termsOfUse.css";
import React from "react";
import Navbar from "../reusable/components/Navbar";
import Footer from "../reusable/components/footer";

function TermsOfUse(){
    return(
        <div className="terms  bg-white">
            <Navbar/>
            <div className="py-5 px-3 container">
                <h2 className="text-center">TERMS OF USE</h2>
                <div className="mt-5">
                    <h4 className="mb-4">ABOUT</h4>
                    <ul>
                        <li>
                            This Application is operated by OnePurse, Inc.  (hereinafter referred to as ‘OnePurse’, ‘the Company’, ‘we’, ‘us’ or ‘our’).
                        </li>
                        <li>
                            We provide currency (fiat and virtual) exchange services via a chat-based platform, web-based platform, Android application, and iOS application.  
                        </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h4>TERMS OF USE</h4>
                    <ul>
                        <li>The terms and conditions contained herein (the “Terms and Conditions”, “Agreement”) together with any documents referred to herein duly inform you of the rules for your use of our mobile application and any associated web-based platform with enabled foriegn currency exchange capabilities, electronic wallet, chat and call capabilities whether as a guest or as a registered user.</li>
                        <li>By using the Application, you confirm that you accept the Terms and Conditions and that you agree to be bound by, and comply with, them in their entirety. If you do not agree to the Terms and Conditions, you must not use the Application or the Service it renders. We advise that you obtain a copy of the Terms and Conditions for future reference which you may by requesting we send you a copy via email.</li>
                        <li>You are also responsible for ensuring all persons who access the Application through your internet connection are aware of the Terms and Conditions and that they comply with them.</li>
                        <li>Your use of the Application is also governed by our Privacy Policy. You can review this on our website to understand our practices, including practices in regards to handling your personal information, collecting data and cookies.</li>
                    </ul>
                </div>
                <div className="mt-5">
                   <h4>CHANGES TO THE TERMS AND CONDITIONS</h4>
                   <ul>
                        <li>We may change the Terms and Conditions at any time by amending this page.</li>
                        <li>We shall inform you if we intend to make changes to the Terms and Conditions however we advise that you also check this page from time to time for any such changes we may have made.</li>
                        <li>Subject to the above provisions in this section, we shall notify you and provide you with the opportunity to cancel the Services before any change to the Terms and Conditions becomes effective.</li>
                        <li>
                            Notwithstanding the paragraph immediately above, the following changes to these Terms and Conditions shall come into effect immediately upon notice being given to you:
                            <ul>
                                <li>Changed that are required by law;</li>
                                <li>Changes that are related to the addition of a new service or extra functionality to the existing Services; or</li>
                                <li>Changes which neither reduce your rights nor increase your responsibilities</li>
                            </ul>
                        </li>
                   </ul>
                </div>
                <div  className="mt-5">
                   <h4>DEFINITIONS</h4>
                   <p>In these terms and conditions, except where a different interpretation is necessary in the context, the words and expressions set out below shall have the following meanings:</p>
                   <ul>
                        <li>“Account” means the online account provided by OnePurse to you upon your registration on the Application and which enables you to use our Services.</li>
                        <li>“Business Day” means any day except Saturday, Sunday or any day on which banks are authorized to close in the United States for general banking business.</li>
                        <li>“Currency Conversion” means, you send money in one currency and the payout in a different currency, the operation by which the money you send will be converted into payout currency.</li>
                        <li>“Data Protection Legislation” means all applicable data protection and privacy legislation in force from time to time in the United States of America each as amended from time to time.</li>
                        <li>“Receiving Country” means a country to which a Sender instructs us to send funds.</li>
                        <li>“Electronic Money” means an electronic store of monetary value in the Electronic Wallet.</li>
                        <li>“Electronic Signature” means the sender consents and agrees that the use of a keypad, mouse, or other device to select an item, button, icon, or similar act/action while using any electronic service we offer; or in accessing or making any transaction; or regarding any agreement, acknowledgment, consent, terms, disclosures, or conditions, constitutes the sender’s signature, acceptance and agreement as if actually signed by the sender in writing.”</li>
                        <li>“Electronic Wallet” means a type of pre-paid account which a Sender will use to store Electronic Money.</li>
                   </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default TermsOfUse;