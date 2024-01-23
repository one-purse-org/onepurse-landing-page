import "./privacyPolicy.css";
import React from "react";
import Navbar from "../reusable/components/Navbar";
import Footer from "../reusable/components/footer";
import Waitlist from "../reusable/components/waitlist";

function PrivacyPolicy(){
    return(
        <div className="privacy">
            <Navbar downloadBtn={true}/>
            <Waitlist/>
            <div className="privacy-policy py-5 px-5 container-fluid bg-white">
                <h2 className="mb-5 text-center">Privacy Policy</h2>
                <div className="privacy-policy-container row">
                    <nav id="privacy-policy-scrollspy" className="col-md-3 navbar position-relative">
                        <ul id="privacy-policy-scrollspy"  className="nav nav-pills privacy-link ">
                            <li className="nav-item"><a href="#first-privacy-text" className="nav-link">Overview</a></li>
                            <li className="nav-item"><a href="#second-privacy-text" className="nav-link">What Personal Data Do We Collect?</a></li>
                            <li className="nav-item"><a href="#third-privacy-text" className="nav-link">Why Do We Retain Personal Data?</a></li>
                            <li className="nav-item"><a href="#fourth-privacy-text" className="nav-link"> How Do We Process Personal Data?</a></li>
                            <li className="nav-item"><a href="#fifth-privacy-text" className="nav-link">Do We Share Personal Data? 
</a></li>
                            <li className="nav-item"><a href="#sixth-privacy-text" className="nav-link">How Do We Work with Other Services and Platforms?</a></li>
                            <li className="nav-item"><a href="#seventh-privacy-text" className="nav-link">California Privacy Rights. </a></li>
                            <li className="nav-item"><a href="#eighth-privacy-text" className="nav-link">How Do We Use Cookies and Tracking Technologies? </a></li>
                            <li className="nav-item"><a href="#ninth-privacy-text" className="nav-link">How Do We Protect Your Personal Data? </a></li>
                            <li className="nav-item"><a href="#tenth-privacy-text" className="nav-link">Can Children Use Our Services? </a></li>
                            <li className="nav-item"><a href="#eleventh-privacy-text" className="nav-link">Definitions </a></li>
                            <li className="nav-item"><a href="#twelfth-privacy-text" className="nav-link"> Additional Information</a></li>
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

                        <div id="fourth-privacy-text" className="mt-5">
                            <h4>How Do We Process Personal Data?</h4>
                            <p>We may Process your information for the following reasons:</p>
                            <ul>
                                <li>We may Process your information for the following reasons:
                                    <ul>
                                        <li>initiate a payment, send or request money, add value to an account, or pay a bill;
</li>
                                        <li>authenticate your access to an Account;</li>
                                        <li>communicate with you about your Account, the Sites, the Services, or OnePurse;</li>
                                        <li>create an account connection between your Account and a third-party account or platform; and</li>
                                        <li>perform creditworthiness and other financial standing checks, evaluate applications, and compare information for accuracy and verification purposes.</li>
                                        <li>keep your Account and financial information up to date.
</li>
                                    </ul>
                                </li>
                                <li>To manage our business needs, such as monitoring, analyzing, and improving the Services and the Sites’ performance and functionality.  For example, we analyze User behaviour and perform research about the way you use our Services.
</li>
                                <li>To manage risk and protect the Sites, the Services and you from fraud by verifying your identity OnePurse’s risk and fraud tools use Personal Data, Device Information, Technical Usage Data and Geolocation Information from our Sites and websites that offer OnePurse Services to help detect and prevent fraud and abuse of the Services.
</li>
                                <li>To market to you about OnePurse products and Services and the products and services of unaffiliated businesses. We may also Process your Personal Data to uniquely tailor the marketing content and certain Services or Site experiences to better match your interests on OnePurse and other third-party websites.</li>
                                <li>To provide personalized Services offered by OnePurse on third-party websites and online services.  We may use your Personal Data and other information collected in accordance with this Privacy Statement to provide a targeted display, feature, Services or offer to you on third-party websites.  We may use cookies and other tracking technologies to provide these online services and/or work with other third-parties such as merchant’s, advertising or analytics companies to provide these online services.</li>
                                <li>To provide you with location-specific options, functionality or offers if you elect to share your Geolocation Information through the Services.  We will use this information to enhance the security of the Sites and Services and provide you with location-based Services, such as advertising, search results, and other personalized content.
</li>
                                <li>To comply with our obligations and to enforce the terms of our Sites and Services, including to comply with all applicable laws and regulations.
</li>
                                <li>To make it easier for you to find and connect with others. For instance, if you let us access your contacts or when your Account profile is public, we can suggest connections with people you may know and help others connect with you to send you money by letting them find your profile when they search for you by name, username, email, or mobile number on OnePurse. We may also associate information that we learn about you through your and your contacts’ use of the Services, and information you and others provide, to suggest people you may know or may want to transact with through our Services. Social functionality and features designed to simplify your use of the Services with others vary by Service.
</li>
                                <li>To respond to your requests, for example to contact you about a question you submitted to our customer service team.
</li>
                            </ul>
                        </div>
                        <div id="fifth-privacy-text" className="mt-5">
                            <h4>
                                Do We Share Personal Data? 
                            </h4>
                            <p>
                                We may share your Personal Data or other information about you with others in a variety of ways as described in this section of the Privacy Statement. 
                            </p>
                            <p>We may share your Personal Data or other information for the following reasons:</p>
                            
                                <p>
                                    With other members of the OnePurse corporate family: We may share your Personal Data with members of the OnePurse family of entities to, among other things, provide the Services you have requested or authorized; to manage risk; to help detect and prevent potentially illegal and fraudulent acts and other violations of our policies and agreements; and to help us manage the availability and connectivity of OnePurse products, Services, and communications.
                                </p>
                                <p>
                                    With other companies that provide services to us: We may share Personal Data with third-party service providers that perform services and functions at our direction and on our behalf. These third-party service providers may, for example, provide you with Services, verify your identity, assist in processing transactions, send you advertisements for our products and Services, or provide customer support. 
                                </p>
                                <p>
                                    With other financial institutions: We may share Personal Data with other financial institutions that we have partnered with to jointly create and offer a product. These financial institutions may only use this information to market and offer OnePurse-related products unless you have given consent for other uses. We may also share Personal Data to process transactions, provide you with benefits associated with your eligible accounts, and keep your financial information up to date.
                                </p>
                                
                                <p>With the other parties to transactions when you use the Services, such as other Users, merchants, and their service providers: We may share information about you and your account with the other parties involved in processing your transactions. This includes other Users you are sending or receiving funds from merchants and their service providers when you use the Services to pay for goods or services. The information includes:</p>
                                    <ul>
                                        <li>
                                            Personal Data and Account information necessary to facilitate the transaction;
                                        </li>
                                        <li>information to help other participant(s) resolve disputes and detect and prevent fraud; and</li>
                                        <li>aggregated data and performance analytics to help merchants better understand Users and to help merchants enhance Users’ experiences. </li>
                                    </ul>
                                
                                
                                    <p>With other third parties for our business purposes or as permitted or required by law: We may share information about you with other parties for OnePurse’s business purposes or as permitted or required by law, including:</p>
                                    <ul>
                                        <li>if we need to do so to comply with a law, legal process or regulations;
</li>
                                        <li>law enforcement, regulators, government officials, or other third parties (in the United States of America or elsewhere) in relation to a subpoena, court order, or other legal process or requirement under US laws or regulations, or the laws and regulations of other jurisdictions that are applicable to OnePurse or one of its affiliates; when we need to do so to comply with such law or credit card rules; or when we believe, in our sole discretion, that the disclosure of Personal Data is necessary or appropriate to prevent physical harm or financial loss; or to report suspected illegal activity or to investigate violations of a user agreement;
</li>
                                        <li>to protect the vital interests of a person;
</li>
                                        <li>to protect the vital interests of a person;</li>
                                        <li>to protect our property, Services and legal rights;</li>
                                        <li>to facilitate a purchase or sale of all or part of OnePurse’s business;</li>
                                        <li>in connection with shipping and related services for purchases made using a Service;</li>
                                        <li>to help assess and manage risk and prevent fraud against us, our Users and fraud involving our Sites or use of our Services, including fraud that occurs at or involves our business partners, strategic ventures, or other individuals and merchants;</li>
                                        <li>to banking partners as required by card association rules for inclusion on their list of terminated merchants;</li>
                                        <li>to credit reporting and collection agencies;</li>
                                        <li>to companies that we plan to merge with or be acquired by; and</li>
                                        <li>to support our audit, compliance, and corporate governance functions.</li>
                                    </ul>
                                
                                <p>With your consent: We also will share your Personal Data and other information with your consent or direction, including if you authorize an account connection with a third-party account or platform.</p>
                                <p>In addition, OnePurse may provide aggregated statistical data to third-parties, including other businesses and members of the public, about how, when, and why Users visit our Sites and use our Services.  This data will not personally identify you or provide information about your use of the Sites or Services.  We do not share your Personal Data with third parties for their marketing purposes without your consent.</p>
                        </div>
                        <div id="sixth-privacy-text" className="mt-5">
                            <h4>How Do We Work with Other Services and Platforms?</h4>
                            <p>A significant benefit and innovation of OnePurse’s Services is that you can connect your Account with a third-party account or platform. For the purposes of this Privacy Statement, an “account connection” with such a third-party is a connection you authorize or enable between your Account and a non-OnePurse account, payment instrument, or platform that you lawfully control or own. When you authorize such a connection, OnePurse and the third-party will exchange your Personal Data and other information directly. Examples of account connections include:</p>
                            <ul>
                                <li>linking your Account to a social media account or social messaging service;</li>
                                <li>connecting your Account to a third-party data aggregation or financial services company, if you provide such company with your Account log-in credentials; or</li>
                                <li>using your Account to make payments to a merchant or allowing a merchant to charge your Account.</li>
                            </ul>
                            <p>If you choose to create an account connection, we may receive information from the third-party about you and your use of the third-party’s service.  For example, if you connect your Account to a social media account, we will receive Personal Data from the social media provider via the account connection.  If you connect your Account to other financial accounts, directly or through a third-party service provider, we may have access to your account balance and transactional information, such as purchases and funds transfers.  We will use all such information that we receive from a third-party via an account connection in a manner consistent with this Privacy Statement. </p>
                            <p>Information that we share with a third-party based on an account connection will be used and disclosed in accordance with the third-party’s privacy practices.  Before authorizing an account connection, you should review the privacy notice of any third-party that will gain access to your Personal Data as part of the account connection.  For example, Personal Data that OnePurse shares with a third-party account or platform such as a social media account may in turn be shared with certain other parties, including the general public, depending on the account’s or platform’s privacy practices. </p>

                        </div>
                        <div id="seventh-privacy-text" className="mt-5">
                            <h4>California Privacy Rights.</h4>
                            <p> If you are a resident of the State of California, under the California Consumer Privacy Act (CCPA), you have the right to request information on how to exercise your disclosure choice options from companies conducting business in California.  Specifically:</p>
                            <ul>
                                <li><p>Exercising the Right to Know. You may request, up to twice in a 12-month period, the following information about the personal information we have collected about you during the past 12 months:</p>
                                    <ul>
                                        <li>the categories and specific pieces of personal information we have collected about you;</li>
                                        <li>the categories of sources from which we collected the personal information;</li>
                                        <li>the business or commercial purpose for which we collected the personal information;</li>
                                        <li>the categories of third parties with whom we shared the personal information; and</li>
                                        <li>the categories of personal information about you that we disclosed for a business purpose, and the categories of third parties to whom we disclosed that information for a business purpose.</li>
                                    </ul>
                                </li>
                                <li>Exercising the right to delete. You may request that we delete the personal information we have collected from you, subject to certain limitations under applicable law.</li>
                                <li>Exercising the right to opt-out from a sale. You may request to opt out of any “sale” of your personal information that may take place.</li>
                                <li>Non-discrimination. The CCPA provides that you may not be discriminated against for exercising these rights.</li>
                            </ul>
                            <p>To submit a request to exercise any of the rights described above, you may contact OnePurse either via email to support@onepurse.co or contact us via postal mail, proper postage prepaid, at:</p>
                            <p>OnePurse, Attn: Your California Privacy Rights</p>
                            <p>Please indicate your preference as to how you would like us to respond to your request (i.e., email or postal mail).</p>
                            <p>All requests sent via postal mail must be labeled “Your California Privacy Rights” on the envelope or postcard and clearly stated on the actual request. For all requests, please include your name, street address (if you would like a response via postal mail), city, state, and zip code. We may need to verify your identity before responding to your request, such as verifying that the email address or contact information from which you send the request matches your email address or contact information that we have on file. Authentication based on a government-issued and valid identification document may be required. We will not accept requests via telephone or fax. We are not responsible for notices that are not labeled or sent properly, or do not have complete information.
</p>
                        </div>
                        <div id="eighth-privacy-text" className="mt-5">
                            <h4>How Do We Use Cookies and Tracking Technologies?</h4>
                            <p>When you visit our Sites, use our Services, or visit a third-party website for which we provide online Services, we and our business partners and vendors may use cookies and other tracking technologies (collectively, “Cookies”) to recognize you as a User and to customize your online experiences, the Services you use, and other online content and advertising; measure the effectiveness of promotions and perform analytics; and to mitigate risk, prevent potential fraud, and promote trust and safety across our Sites and Services.  Certain aspects and features of our Services and Sites are only available through the use of Cookies, so if you choose to disable or decline Cookies, your use of the Sites and Services may be limited or not possible.
</p>
                        </div>
                        <div id="ninth-privacy-text" className="mt-5">
                            <h4>How Do We Protect Your Personal Data?</h4>
                            <p>We maintain technical, physical, and administrative security measures designed to provide reasonable protection for your Personal Data against loss, misuse, unauthorized access, disclosure, and alteration. The security measures include firewalls, data encryption, physical access controls to our data centers, and information access authorization controls.  While we are dedicated to securing our systems and Services, you are responsible for securing and maintaining the privacy of your password(s) and Account/profile registration information and verifying that the Personal Data we maintain about you is accurate and current.  We are not responsible for protecting any Personal Data that we share with a third-party based on an account connection that you have authorized.</p>
                        </div>
                        <div id="tenth-privacy-text" className="mt-5">
                            <h4>
                                Can Children Use Our Services?
                            </h4>
                            <p>The Sites and Services are not directed to anyone under the age of 18.  We do not knowingly collect information, including Personal Data, from children or other individuals who are not legally able to use our Sites and Services. If we obtain actual knowledge that we have collected Personal Data from a child or anyone under the age of 18, we will promptly delete it, unless we are legally obligated to retain such data. Contact us if you believe that we have mistakenly or unintentionally collected information from a child or anyone under the age of 18.</p>
                        </div>
                        <div id="eleventh-privacy-text" className="mt-5">
                            <h4>Definitions</h4>
                            <ul>
                                <li>
                                    Account means a OnePurse member account.
                                </li>
                                <li>Device Information means data that can be automatically collected from any device used to access the Sites or Services.  Such information may include, but is not limited to, your device type; your device’s network connections; your device’s name; your device’s IP address; information about your device’s web browser and the internet connection being used to access the Site or Services; Geolocation Information; information about apps downloaded to your device; and biometric data (e.g., Touch ID/Fingerprint to verify your identity).</li>
                                <li>Geolocation Information means information that identifies with reasonable specificity your location by using, for instance, longitude and latitude coordinates obtained through GPS, Wi-Fi, or cell site triangulation.  Some of our Services may ask you for permission to share your current location.  Some of the Sites and Services require this information to provide a specific product or online Service.  If you do not agree to our collection of the geolocation information, our Sites or Services may not function properly when you try to use them.</li>
                                <li>OnePurse means OnePurse LTD and subsidiaries or affiliates.  In this Privacy Statement, OnePurse is sometimes referred to as “we,” “us,” or “our,” depending on the context.</li>
                                <li>Personal Data means personal information that can be associated with an identified or identifiable person.  “Personal Data” can include name, postal address (including billing and shipping addresses), telephone number, email address, payment card number, other financial account information, account number, date of birth, and government-issued credentials (e.g., driver’s license number, national ID, passport, Social Security number and Taxpayer ID).  Personal Data does not include information that does not identify a specific User.</li>
                                <li>Process means any method or way that we handle Personal Data or sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, and consultation, disclosure by transmission, disseminating or otherwise making available, alignment or combination, restriction, erasure or destruction of Personal Data.</li>
                                <li>Services means any products, services, content, features, technologies, or functions, and all related websites, applications and services offered to you by OnePurse.</li>
                                <li>Sites means the websites, mobile apps, official social media platforms, or other online properties through which OnePurse offers the Services and which has posted or linked to this Privacy Statement.
</li>
                                <li>Technical Usage Data means information we collect from your phone, computer or other device that you use to access the Sites or Services.  Technical Usage Data tells us how you use the Sites and Services, such as what you have searched for and viewed on the Sites and the way you use our Services, including your IP address, statistics regarding how pages are loaded or viewed, the websites you visited before coming to the Sites and other usage and browsing information collected through Cookies.</li>
                                <li>US means the ‘United States of America’</li>
                                <li>User means an individual who uses the Services or accesses the Sites.</li>
                            </ul>
                        </div>
                        <div id="twelfth-privacy-text" className="mt-5">
                            <h4>Additional Information</h4>
                            <p>Changes to This Privacy Statement.</p>
                            <p>We may revise this Privacy Statement from time to time to reflect changes to our business, the Sites or Services, or applicable laws.  The revised Privacy Statement will be effective as of the published effective date. </p>
                            <p>If the revised version includes a substantial change, we will provide you with 30 days prior notice by posting notice of the change on the “Policy Update” page of our website.  We also may notify Users of the change using email or other means.</p>
                            <p><i>Transfers of Your Personal Data to Other Countries</i></p>
                            <p>Our operations are supported by a network of computers, cloud-based servers, and other infrastructure and information technology, including, but not limited to, third-party service providers.  We and our third-party service providers store and Process your Personal Data in the United States of America and elsewhere in the world.  We will protect your information as described in this Privacy Statement if your Personal Data is transferred to other countries.  By using our Sites and Services, you consent to your Personal Data being transferred to other countries, including countries that have different data protection rules than your country.  We do not represent that our Sites and Services are appropriate or available in any particular jurisdiction.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default PrivacyPolicy;