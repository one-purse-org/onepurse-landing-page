import "../../styles/contact/secondComponent.css"
import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";


function SecondComponent(){
   
    return(
        <div className="secondComponent form-customersupport">
                <div className="form-customersupport-absolute">
                        <form className="container" action="https://formspree.io/f/mpzvqpjj" method="POST">
                            <div className="form-div">
                                <label for="fullname" className="contact-label">Full Name</label>
                                <input name="fullname" id="fullname" placeholder="Enter Full Name" class="form-control mb-3"></input>
                                <label for="email" className="contact-label">Email</label>
                                <input name="email" id="email" placeholder="Enter email" class="form-control mb-3"></input>
                                <label for="phonenumber" className="contact-label">Phone Number</label>
                                <input name="phonenumber" id="phonenumber" placeholder="Enter phone number" class="form-control mb-3"></input>
                                <label for="subject" className="contact-label">Subject</label>
                                <input name="subject" id="subject" placeholder="Enter subject" class="form-control mb-3"></input>
                                <label for="message" className="contact-label">Message</label>
                                <textarea name="message" cols={3} id="message" class="form-control mb-3"></textarea>
                                <div className="contact-form-button-div">
                                    <button>Submit</button>
                                </div>
                            </div>
                    </form>

                    <div className="customer-support">
                        <p className="hours-p">
                            Customer support hours are between 7am EST to 7pm EST
                        </p>
                    </div>                
                
            </div>
        </div>
    )
}

export default SecondComponent;