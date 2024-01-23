import "./termsOfUse.css";
import React from "react";
import Navbar from "../reusable/components/Navbar";
import Footer from "../reusable/components/footer";

function TermsOfUse(){
    return(
        <div className="terms  bg-white">
            <Navbar downloadBtn={true}/>
            <div className="py-5 px-3 container">
                <h2 className="text-center">TERMS OF USE</h2>
                <div className="mt-5">
                    <h4 className="mb-4">ABOUT</h4>
                    <ul className="terms-ul">
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
                    <ul className="terms-ul">
                        <li>The terms and conditions contained herein (the “Terms and Conditions”, “Agreement”) together with any documents referred to herein duly inform you of the rules for your use of our mobile application and any associated web-based platform with enabled foriegn currency exchange capabilities, electronic wallet, chat and call capabilities whether as a guest or as a registered user.</li>
                        <li>By using the Application, you confirm that you accept the Terms and Conditions and that you agree to be bound by, and comply with, them in their entirety. If you do not agree to the Terms and Conditions, you must not use the Application or the Service it renders. We advise that you obtain a copy of the Terms and Conditions for future reference which you may by requesting we send you a copy via email.</li>
                        <li>You are also responsible for ensuring all persons who access the Application through your internet connection are aware of the Terms and Conditions and that they comply with them.</li>
                        <li>Your use of the Application is also governed by our Privacy Policy. You can review this on our website to understand our practices, including practices in regards to handling your personal information, collecting data and cookies.</li>
                    </ul>
                </div>
                <div className="mt-5">
                   <h4>CHANGES TO THE TERMS AND CONDITIONS</h4>
                   <ul className="terms-ul">
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
                   <ul className="terms-ul">
                        <li>“Account” means the online account provided by OnePurse to you upon your registration on the Application and which enables you to use our Services.</li>
                        <li>“Business Day” means any day except Saturday, Sunday or any day on which banks are authorized to close in the United States for general banking business.</li>
                        <li>“Currency Conversion” means, you send money in one currency and the payout in a different currency, the operation by which the money you send will be converted into payout currency.</li>
                        <li>“Data Protection Legislation” means all applicable data protection and privacy legislation in force from time to time in the United States of America each as amended from time to time.</li>
                        <li>“Receiving Country” means a country to which a Sender instructs us to send funds.</li>
                        <li>“Electronic Money” means an electronic store of monetary value in the Electronic Wallet.</li>
                        <li>“Electronic Signature” means the sender consents and agrees that the use of a keypad, mouse, or other device to select an item, button, icon, or similar act/action while using any electronic service we offer; or in accessing or making any transaction; or regarding any agreement, acknowledgment, consent, terms, disclosures, or conditions, constitutes the sender’s signature, acceptance and agreement as if actually signed by the sender in writing.”</li>
                        <li>“Electronic Wallet” means a type of pre-paid account which a Sender will use to store Electronic Money.</li>
                        <li>“Fees” means all charges and fees we will charge Sender for using the Services.</li>
                        <li>“Intellectual Property Rights” means all patents, rights to inventions, utility models, copyright and related rights, trademarks, service marks, trade, business and domain names, rights in trade dress or get-up, rights in goodwill or to sue for passing off, unfair competition rights, rights in designs, rights in computer software, database rights, semi-conductor topography rights, moral rights, rights in confidential information (including know-how and trade secrets) and any other intellectual property rights, in each case whether registered or unregistered and including all applications for and renewals or extensions of such rights, and all similar or equivalent rights or forms of protection in any part of the world.</li>
                        <li>“Payment Method” means any legal payment instrument used to fund a Transaction or Top-Up the Electronic Wallet.</li>
                        <li>“Payout Method” means a Sender’s chosen way to deliver funds to a Receiver.</li>
                        <li>“Prohibited Purposes” means all purposes associated with any unlawful or illegal activity including but not limited to drugs, weapons, chemicals, adult content, counterfeit goods, money laundering, terrorist financing, human trafficking, human smuggling and fraud.</li>
                        <li>“Privacy Policy” means the privacy policy which can be found on our website.</li>
                        <li>“Exchange Services” means the services by which a Sender sends money to a Receiver via the Application.</li>
                        <li>“Receiver” means a person who is receiving funds from a Sender through the Exchange Services.</li>
                        <li>“Sender” means a person who sends funds through the Exchange Services.</li>
                        <li>“Sending Country” means the country where a Sender has registered his/her Account.</li>
                        <li>“Service Provider” means any institution we will work with to provide the Services to you.</li>
                        <li>“Services” means the Exchange Services and the Talk Services delivered via the Application.</li>
                        <li>“Application” duly defined in paragraph 2-i above and herein referred to as ‘the App’.</li>
                        <li>“Terms and Conditions” duly defined in paragraph 2-i above</li>
                        <li>“Top-Up” meaning the issuance to you with Electronic Money in exchange for your money and storing it in your Electronic Wallet.</li>
                        <li>“Trademarks” means trademarks, service marks and trade dress.</li>
                        <li>“Transaction” means sending funds to individuals abroad, converting funds from one currency to another, making a payment using the Electronic Wallet, loading funds to the Electronic Wallet, redeeming money from the Electronic Wallet or transferring money between Electronic Wallets and any other means within the Services.</li>
                        <li>“Transaction Amount” means the amount payable to your Receiver excluding Fees and before any Currency Conversion.</li>
                        <li>“Transaction ID” means the unique reference number used to identify and payout a Transaction.</li>
                        <li>“Unique Identifier” means any unique reference number about your Transaction which OnePurse and Service Providers will use to process your Transaction such as Transaction ID, bank account number, mobile number, Receiver’s name or any other identifier provided by OnePurse.</li>
                   </ul>
                </div>
               
                <div  className="mt-5">
                    <h4>YOUR OBLIGATIONS AND RESPONSIBILITIES</h4>
                    <ul className="terms-ul">
                        <li>You confirm that you are at least 18 years old and that you have the legal capacity to form a contract with us.</li>
                        <li>You agree to pay all the Fees which are applicable to your chosen Payment Method and Payout Method.</li>
                        <li>You confirm that you are not using the Services on behalf of anyone else. If you wish to use our Services on behalf of any third party, you are obliged to inform us and provide any required information about the third party.</li>
                        <li>You must register with us to fully access the App and the Services, in which you must, as a minimum, provide your email address, phone number and a password. If you wish to register for the Exchange Services you must, as a minimum, provide your full legal name, date of birth, address and nationality.</li>
                        <li>In addition to the information in paragraph 5.iv, you agree to provide us with any required information about yourself and/or your Receiver such as an address, phone number, nationality, identity documentation, proof of address (such as utility bills), source of funds, bank statements or any other documentation as required by applicable laws and regulations. Our use of the personal information you provide us with is governed by our Privacy Policy.</li>
                        <li>You warrant that all information supplied by you is true, accurate, current and complete and you confirm that you will update this information via the App in the event of any changes to it. We may contact you from time to time to confirm that the information that you have provided us with is up to date.</li>
                        <li>You will safeguard your Account information and keep this confidential. You will not permit anyone else to use your Account. If you know or suspect that someone else is using your Account information, you must notify us immediately by sending an email to us at support@onepurse.co </li>
                        <li>You must not submit or send any correspondence or information to the App which is illegal, defamatory, offensive, misleading, libelous, indecent, invasive, suggestive, harassing, obscene, inflammatory, lewd, or fraudulent in any way.</li>
                        <li>You must not use the App: 
                            <ul className="ps-5">

                                <li> In any way that breaches any applicable local, national or international law or regulation;</li>
                                <li>- In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect;</li>
                                <li>For the purpose of harming or attempting to harm minors in any way;</li>
                                <li>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam); or</li>
                                <li>To decompile, reverse engineer, or otherwise modify any part of the App.</li>
                            </ul>
                        </li>
                        <li>You must not use the App to knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, logic bombs, time-bombs, keystroke loggers, spyware, adware or any other malicious or harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
                        <li>You must not attempt to gain unauthorized access to the App, the server on which the App is stored or any server, computer or database connected to the App.</li>
                        <li>You must not attack the App via a denial-of service attack, a distributed denial-of-service attack or any other form of attack.</li>
                        <li>You acknowledge that by breaching the terms contained in paragraphs x, xi and xii you may be committing a criminal offence under the Computer Fraud and Abuse Act (CFAA) 1986. Any such breach will be reported to the relevant law enforcement authorities and your identity fully disclosed to them for further action. Your right to use the App will immediately cease in the event of such breach and we shall deactivate your Account.</li>
                    </ul>
                </div>
                <div  className="mt-5">
                    <h4>OUR OBLIGATIONS AND RIGHTS</h4>
                    <ul className="terms-ul">
                        <li>We agree to provide you with access to the App and the Services in accordance with these Terms and Conditions. However, we reserve the right to refuse to provide you with the Services without any explanation.</li>
                        <li>We may update the Services, the App or any content therein at any time.</li>
                        <li>We are obligated to verify your information in accordance with our ‘Know Your Customer’ standards before approving your Account. We will use your address and other personal information to verify your identity against third party databases including but not limited to credit agencies. We will not perform credit checks, therefore, your credit rating will remain unaffected. We may ask for additional documentation to complete your identity verification. All data will be processed in accordance with the Data Protection Legislation. Please see our Privacy Policy for more information.
</li>
                        <li>We can charge interest if you pay any sum owed under these Terms and Conditions or otherwise in connection with the Services after its relevant due date. If you do not make any such payment to us by the due date we may charge you interest on the overdue amount in accordance with the prevalent lending rate of obtainable within the United States of America which may vary from time to time. This interest shall accrue on a daily basis from the due date until the date of actual payment of the overdue amount, whether before or after a court judgment.
</li>
                        <li>OnePurse does not take any responsibility for any damage or loss which you might incur because of your arrangement between you and your Receiver. OnePurse does not provide any guarantee on the quality, delivery of services and/or products you paid for using our Services. We strongly recommend that you only send money to Receivers you personally know.
</li>
                        
                    </ul>
                </div>
                <div  className="mt-5">
                    <h4>EXCHANGE SERVICES</h4>
                    <ul className="terms-ul">
                        <li>You shall fund the wallet using your specified and authorized Payment Method to enable us execute Transaction on your behalf. If you do not provide sufficient, cleared funds before the time specified in the App, your Transaction shall be canceled.
</li>
                        <li>A summary of your Transaction details will be displayed before you submit the Transaction. Your confirmation will be treated as your consent to initiate your Transaction, however, your Transaction will not be executed until you pay for it, as per paragraph 7-i above.
</li>
                        <li>You agree to pay all Fees which are applicable to your chosen Payment Method and Payout Method. A breakdown of all Fees will be displayed before you submit your Transaction.
</li>
                        <li>Where you send money in one currency and the payout will be in a different currency, we will apply a Currency Conversion rate. The rate will be displayed on the App before you submit the Transaction. 
</li>
                        <li>We will pay the transaction in the currency you choose. If your beneficiary wishes to convert it to a different currency this may cause them to receive less or more than you intended. This is out of our control and we are not liable for any losses.
</li>
                        <li>If you submit a payment order after 2pm EST on a Business Day or on a day that is not a Business Day, the payment order is deemed to have been received on the first Business Day thereafter.
</li>
                        <li>The time of execution of your Transaction will be displayed before you submit your Transaction. We will attempt to pay your Transaction in accordance with the time indicated, however you accept that the payout time of your Transaction might change for reasons including but not limited to: (i) time needed to verify your Account or Transaction; (ii) business hours of Service Providers; (iii) our obligations to comply with any law in the Sending Country or Receiving Country; or (iv) any unforeseeable event which is beyond our control.
</li>
                        <li>When you submit your Transaction, we reserve the right to impose limits on your Account, Transaction Amount and/or Top-Up amount. If a limit has been imposed, but you wish to continue using the Exchange Services, we might request additional information, for example proof of source of funds. We will communicate through the App or email the reason for the limit, what information we require and what steps you need to follow to remove the limit. You acknowledge that we might not be able to provide you with the reason for, or possibility to remove, the limit if it would compromise security measures or would be otherwise unlawful.
</li>
                        <li>After successful execution of your Transaction we will send you email confirmation together with details of your Transaction.
</li>
                    </ul>
                </div>
                <div  className="mt-5">
                    <h4></h4>
                    <ul className="terms-ul">

                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default TermsOfUse;