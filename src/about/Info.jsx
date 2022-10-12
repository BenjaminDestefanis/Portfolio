import React from "react";

import {BsBriefcaseFill, BsFillFileEarmarkCodeFill} from "react-icons/bs"
import {FaChalkboardTeacher} from "react-icons/fa"
import {MdSupportAgent} from "react-icons/md"

const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <BsFillFileEarmarkCodeFill className="about__icon" />
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3 Years Working</span>
            </div>

            <div className="about__box">
                <FaChalkboardTeacher className="about__icon" />
                <h3 className="about__title">Instructor</h3>
                <span className="about__subtitle">Stack MERN career</span>
            </div>

            

            <div className="about__box">
                <BsBriefcaseFill className="about__icon" />
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">Stack</span>
            </div>

            <div className="about__box">
                <MdSupportAgent className="about__icon" />
                <h3 className="about__title">Suport</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info;