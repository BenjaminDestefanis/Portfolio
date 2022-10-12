import React from "react";
import "./ScrollUp.css";

import {FaArrowAltCircleUp} from "react-icons/fa"

const ScrollUp = () => {

    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560 ) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })
    return(
        <a href="#home" className="scrollup" target="">
            <FaArrowAltCircleUp className="scrollup__icon" />
        </a>
    )
}


export default ScrollUp;