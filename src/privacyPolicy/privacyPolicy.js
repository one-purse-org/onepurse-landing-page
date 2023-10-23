import "./privacyPolicy.css";
import React from "react";
import Navbar from "../reusable/components/Navbar";
import Footer from "../reusable/components/footer";

function PrivacyPolicy(){
    return(
        <div className="privacy">
            <Navbar downloadBtn={true}/>
            <div className="privacy-policy py-5 px-5 container-fluid bg-white">
                <h2 className="mb-5 text-center">Privacy Policy</h2>
                <div className="privacy-policy-container row">
                    <nav className="col-md-3 navbar position-relative">
                        <ul id="privacy-policy-scrollspy"  className="nav nav-pills privacy-link ">
                            <li className="nav-item"><a href="#first-privacy-text" className="nav-link">Overview</a></li>
                            <li className="nav-item"><a href="#second-privacy-text" className="nav-link">What Personal Data Do We Collect?</a></li>
                            <li className="nav-item"><a href="#third-privacy-text" className="nav-link">Why Do We Retain Personal Data?</a></li>
                        </ul>
                    </nav>
                    
                    <div data-bs-spy="scroll" data-bs-target="#privacy-policy-scrollspy" data-bs-offset="0" className="privacy-policies col scrollspy-example">
                        <div id="first-privacy-text" className="first-privacy-text">
                            <h4>Overview</h4>
                            <p className="my-0">
                                OnePurse has developed this Privacy Statement to explain how we may collect, 
                                retain, process, share and transfer your Personal Data when you visit our Sites or 
                                use our Services. This Privacy Statement applies to your Personal Data when you visit 
                                Sites or use Services, and does not apply to online websites or services that we do 
                                not own or control, including websites or services of other OnePurse Users.
                            </p>
                            <p className="my-0">
                                This Privacy Statement is designed to help you obtain information about our privacy 
                                practices and to help you understand your privacy choices when you use our Sites and Services. 
                                Please note that our Service offerings may vary by region.
                            </p>
                            <p className="my-0">
                                We have defined some terms that we use throughout the Privacy Statement. You can find the 
                                meaning of italicized terms in the Definitions section.
                            </p>
                            <p>
                                Please contact us if you have questions about our privacy practices that are not addressed in 
                                this Privacy Statement.
                            </p>
                        </div>
                        <div id="second-privacy-text" className="second-privacy-text mt-5">
                            <h4>What Personal Data Do We Collect?</h4>
                            <p>We may collect information about you when you visit our Sites or use our Services, including the following:</p>
                            <ul className="privacy-list">
                                <li><p><strong>Registration and use information: </strong>When you register to use our Services by establishing an Account, we will collect Personal Data as necessary to offer and fulfil the Services you request. Depending on the Services you choose, we may require you to provide us with your name, postal address, telephone number, email address and identification information to establish an Account. We may require you to provide us with additional Personal Data as you use our Services.</p></li>
                                <li><p><strong>Transaction and experience information: </strong>When you use our Services or access our Sites, for example, to make purchases from merchants, to receive money, to process payments, or to send money to friends and family, we collect information about the transaction, as well as other information associated with the transaction such as amount sent or requested, the amount paid for products or services, merchant information, including information about any funding instruments used to complete the transaction, Device Information, Technical Usage Data, and Geolocation Information.</p></li>
                                <li><p><strong>Participant information: </strong>When you use our Services or access our Sites, we collect Personal Data you provide us about the other participants associated with the transaction.
                                    <span>
                                        <ul className="privacy-inner-list">
                                            <li><i>Send or request money:</i> When you send or request money through the Services, we collect Personal Data such as name, postal address, telephone number, and financial account information about the participant who is receiving money from you or sending money to you. The extent of Personal Data required about a participant may vary depending on the Services you are using to send or request money.</li>
                                            <li><i>Pay or request someone else to pay a bill: </i>If you use our Services to pay a bill for the benefit of someone else, or if you request a User to pay a bill for you, we collect Personal Data from you about the account holder such as name, postal address, telephone number, email address, and account number of the bill that you intend to pay or request to be paid.</li>
                                            <li><i>Add value to your accounts: </i>If you use our Services to add value to your Account or any other account you may have, or if you ask a User to add value to any of these accounts, we may collect Personal Data from you about the other party, or from the other party about you to facilitate the request. For example, if you use our Services to reload a mobile phone, or to request value be added to your mobile account, we may collect Personal Data and other information including mobile account number from the other participant.</li>
                                        </ul>
                                    </span>
                                </p></li>
                                <li><p><strong>Information about your public profile and your friends and contacts:</strong> It may be easier for us to help you transact with your friends and contacts if you choose to connect your contact list information with your Account or if your Account profile is publicly available. If you establish an account connection between your device or a social media platform and your Account, we will use your contact list information (such as name, address, email address) to improve your experience when you use the Services. When your Account profile is public, other users can find your profile to send you money by searching for you by name, username, email, or mobile number on OnePurse and confirm it’s you by viewing your photo. You can make your Account profile private anytime in your settings page.</p></li>
                                <li><p><strong>Information that you choose to provide us to obtain additional Services or specific online Services:</strong> If you request or participate in an optional Site feature, or request enhanced Services or other elective functionality, we may collect additional information from you. We will provide you with a separate notice at the time of collection, if the use of that information differs from the uses disclosed in this Privacy Statement.</p></li>
                                <li><p><strong>Information about you from third-party sources:</strong> We obtain information from third-party sources such as merchants, data providers, and credit bureaus, where permitted by law.</p></li>
                                
                            </ul>
                            <li><p><strong>Other information we collect related to your use of our Sites or Services:</strong>We may collect additional information from or about you when you communicate with us, contact our customer support teams or respond to a survey.</p></li>
                        </div>
                        <div id="third-privacy-text" className="third-privacy-text mt-5">
                            <h4 className="third-privacy-h1">Why Do We Retain Personal Data?</h4>
                            <p className="third-privacy-p">We retain Personal Data to fulfil our legal or regulatory obligations and for our business purposes. We may retain Personal Data for longer periods than required by law if it is in our legitimate business interests and not prohibited by law. If your Account is closed, we may take steps to mask Personal Data and other information, but we reserve our ability to retain and access the data for so long as required to comply with applicable laws. We will continue to use and disclose such Personal Data in accordance with this Privacy Statement.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default PrivacyPolicy;