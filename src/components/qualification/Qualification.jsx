import React from "react";
import { useState } from "react";
import "./Qualification.css";

import {FcGraduationCap, FcBriefcase} from "react-icons/fc"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = ( index ) =>{
        setToggleState(index)
    }
    return(
        
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={ toggleState === 1 ? 
                    "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    >
                        {/* icon className="qualification__icon" */}
                        <FcGraduationCap className="qualification__icon" />
                        Education

                    </div>

                    <div className={ toggleState === 2 ? 
                    "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    >
                        {/* icon className="qualification__icon" */}
                        <FcBriefcase className="qualification__icon" />
                        Experience

                    </div>
                </div>


                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">


                            <div>
                                <h3 className="qualification__title">Instituto</h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    {/* icon */} 2021 - present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Art Diector</h3>
                                <span className="qualification__subtitle">
                                    {/* Icon */}Spain-Institute
                                </span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Art Diector</h3>
                                <span className="qualification__subtitle">
                                    {/* Icon */}Spain-Institute
                                </span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Art Diector</h3>
                                <span className="qualification__subtitle">
                                    {/* Icon */}Spain-Institute
                                </span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>


                    </div>





                    <div className="qualification__content">
                        <div className="qualification__data">


                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">Microsoft - Spain</span>
                                <div className="qualification__calender">
                                    {/* icon */} Argentina
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UX/UI Designer</h3>
                                <span className="qualification__subtitle">
                                    {/* Icon */}Aplie
                                </span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">
                                    {/* Icon */}Spain-Institute
                                </span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Art Diector</h3>
                                <span className="qualification__subtitle">
                                    {/* Icon */}Spain-Institute
                                </span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualification;