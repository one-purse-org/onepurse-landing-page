import "../../styles/home/procedures.css"
import { useEffect, useState } from "react";

let text = [
    {
        key: 1,
        number: "1.",
        text: "Sign up with your details",
        image: "img/phone1.png"
    },
    {
        key:2,
        number: "2.",
        text: "Enter your Affiliate code",
        image: "img/phone2.png"
    },
    {
        key:3,
        number: "3.",
        text: "Enter Beneficiary Information",
        image: "img/phone3.png"
    },
    {
        key:4,
        number: "4.",
        text: "Send money",
        image: "img/phone4.png"
    }
]

function Card(props){
    return(<div className="phone">
        <h2>{props.number}</h2>
        <p>{props.text}</p>
        <img src={props.image} alt=""/>
    </div>)
}

function Numbers(props){
    return(
        <div className="numberings">
            <div className= {`${props.class} number`}>
                <p> {props.number}</p>
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
        
    )
}

function Procedure(){
    const [imageHeight, setImageHeight] = useState(0);
    const overscrollContainer = document.querySelector('.phone-images');
    const targetDiv2 = document.querySelector('.procedure-number-2');
    const targetDiv3 = document.querySelector('.procedure-number-3');
    const targetDiv4 = document.querySelector('.procedure-number-4'); 
    console.log(overscrollContainer)
  useEffect(() => {
    // Function to update image height
    function updateImageHeight() {
      const procedureImage = document.querySelector(".procedure-img1");
      if (procedureImage) {
        const heightOfImage = procedureImage.clientHeight ;
        setImageHeight(heightOfImage);
      }
    }
    // Update image height on load and resize
    window.addEventListener("resize", updateImageHeight);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("load", updateImageHeight);
      window.removeEventListener("resize", updateImageHeight);
    };
  }, []);

    function handleScroll(){
        let scrolled = overscrollContainer.scrollTop

        scrolled >= imageHeight ? targetDiv2.classList.add("procedure-active-number") : targetDiv2.classList.remove("procedure-active-number")
        scrolled >= imageHeight * 2 ? targetDiv3.classList.add("procedure-active-number") : targetDiv3.classList.remove("procedure-active-number")
        scrolled + 30 >= imageHeight * 3 ? targetDiv4.classList.add("procedure-active-number") : targetDiv4.classList.remove("procedure-active-number")
    }

    function updateImageHeight() {
        console.log("change")
      const procedureImage = document.querySelector(".procedure-img1");
      if (procedureImage) {
        const heightOfImage = procedureImage.clientHeight ;
        setImageHeight(heightOfImage);
      }
    }
  

    return(
        <div className="procedure">
            <div className=" container">
                <div className="big-div">
                    <h2>Start sending <span>money</span> today</h2>
                    <p className="steps">Create your Onepurse account in 4 easy steps via our mobile app!</p>
                </div>

                <div className="phone-procedure">
                        <div className="phone-procedure-container position-relative">
                            <div className="arrow-absolute position-absolute">
                                <img src="img/arrow-procedure.svg"></img>
                            </div>
                            <div className="phone-images" style={{height:imageHeight+"px"}} onLoad={updateImageHeight} onScroll={handleScroll}>
                                <img src="img/phone1.png" className="procedure-img1"></img>
                                <img src="img/phone2.png" className="procedure-img2"></img>
                                <img src="img/phone3.png" className="procedure-img3"></img>
                                <img src="img/phone4.png" className="procedure-img4"></img>
                            </div>
                        </div>
                        <div className="phone-numbers position-relative">
                            <img src="img/numbers-vertical.svg" className="position-absolute numbers-vertical" />
                            <Numbers class="procedure-active-number procedure-number-1" number="1." text="Sign up with your details"/>
                            <Numbers class="procedure-number-2" number="2." text="Enter your Affiliate code"/>
                            <Numbers class="procedure-number-3" number="3." text="Enter Beneficiary Information"/>
                            <Numbers class="procedure-number-4" number="4." text="Send Money" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Procedure;