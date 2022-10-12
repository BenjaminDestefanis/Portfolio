import React, { useState } from "react";
import "./Services.css"

import {FiSettings, FiPenTool} from "react-icons/fi"
import {BsCheck2Circle} from "react-icons/bs"
import {AiOutlinePlusCircle, AiOutlineCloseCircle} from "react-icons/ai"
import {FcApproval} from "react-icons/fc"
import {MdExitToApp} from "react-icons/md"

const Services = () => {


    const [toggleState, setToggleState] = useState(0);

    const toggleTab = ( index ) =>{
        setToggleState(index)
    }
    return(
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i Offer</span>



            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <FiSettings className="services__icon" />
                        <h3 className="services__title">API <br/> Designer</h3>
                    </div>

                    <span 
                        className="services__button"
                        onClick={ () => toggleTab(1)}>

                            View More 
                        <AiOutlinePlusCircle className="services__button-icon"/> 
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        
                        <div className="services__modal-content">
                            <AiOutlineCloseCircle 
                                className="services__modal-close" 
                                onClick={ () => toggleTab(0)}/>

                            <h3 className="services__modal-title">API <br></br>Designer</h3>
                            <p className="services__modal-description">
                                With more than 3 years of experience.
                                Work on personal projects and work to clients.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />Idevelop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />I create UX element interactions.
                                    </p>
                                </li>
                                
                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />Design and mockups of products for companies.
                                    </p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>



                <div className="services__content">
                    <div>

                        <MdExitToApp className="services__icon" />
                        <h3 className="services__title">Product <br /> Designer </h3>
                    </div>

                    <span 
                        className="services__button"
                        onClick={ () => toggleTab(2) }>

                        View More 
                        <AiOutlinePlusCircle className="services__button-icon"/>
                        </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            {/* icono */}
                            <AiOutlineCloseCircle 
                            className="services__modal-close"
                            onClick={ () => toggleTab(0) }/>

                            <h3 className="services__modal-title">Product<br/>Designer</h3>
                            <p className="services__modal-description">
                                With more than 3 years of experience.
                                Work on personal projects and work to clients.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />Idevelop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />I create UX element interactions.
                                    </p>
                                </li>
                                
                                <li className="services__modal-service">
                                    {/* icono */}
                                    
                                    <p className="services__modal-info">
                                    <FcApproval />Design and mockups of products for companies.
                                    </p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>



                <div className="services__content">
                    <div>
                        <FiPenTool className="services__icon" />
                        <h3 className="services__title">UI/UX  <br/> Designer </h3>
                    </div>

                    <span className="services__button" onClick={ () => toggleTab(3)}>View More <AiOutlinePlusCircle className="services__button-icon"/> </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            {/* icono */}
                            <AiOutlineCloseCircle 
                            className="services__modal-close"
                            onClick={ () => toggleTab(0) }/>

                            <h3 className="services__modal-title">IU/UX<br/>Designer</h3>
                            <p className="services__modal-description">
                                With more than 3 years of experience.
                                Work on personal projects and work to clients.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    

                                    <p className="services__modal-info">
                                    <FcApproval />Idevelop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    

                                    <p className="services__modal-info">
                                    <FcApproval />Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    

                                    <p className="services__modal-info">
                                    <FcApproval />I create UX element interactions.
                                    </p>
                                </li>
                                
                                <li className="services__modal-service">
                                    

                                    <p className="services__modal-info">
                                    <FcApproval />Design and mockups of products for companies.
                                    </p>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>

                {/* MIN 1:33:39 */}



            </div>

        </section>

    )
}

export default Services;