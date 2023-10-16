import "../../styles/contact/secondComponent.css"
import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";


function SecondComponent(){
   
    return(
        <div className="secondComponent form-customersupport">
                <div className="form-customersupport-absolute">
                        <form className="container">
                            <div className="form-div">
                                <label for="fullname" className="contact-label">Full Name</label>
                                <input id="fullname" placeholder="Enter Full Name" class="form-control mb-3"></input>
                                <label for="email" className="contact-label">Email</label>
                                <input id="email" placeholder="Enter email" class="form-control mb-3"></input>
                                <label for="phonenumber" className="contact-label">Phone Number</label>
                                <input id="phonenumber" placeholder="Enter phone number" class="form-control mb-3"></input>
                                <label for="subject" className="contact-label">Subject</label>
                                <input id="subject" placeholder="Enter subject" class="form-control mb-3"></input>
                                <label for="message" className="contact-label">Message</label>
                                <textarea cols={3} id="message" class="form-control mb-3"></textarea>
                                <div className="contact-form-button-div">
                                    <button>Submit</button>
                                </div>
                            </div>
                    </form>

                    <div className="customer-support">
                        <p className="hours-p">
                            Customer support hours are between 7am EST to 7pm EST
                        </p>
                        <p className="whatsapp-p">
                            Feel free to reach out to us through WhatsApp by simply clicking on the WhatsApp logo. We're here to assist you every step of the way.
                        </p>                
                        <button><i className="fa-brands fa-whatsapp"></i> Contact Us</button>
                    </div>                
                
            </div>
        </div>
    )
}

export default SecondComponent;