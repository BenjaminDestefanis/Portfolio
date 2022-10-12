import React from "react";

import {SiNodedotjs, SiExpress, SiMongodb, SiPython, SiDjango, SiMysql} from "react-icons/si"

const Backend = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Back-end developer</h3>

            <div className="skills__box">

                <div className="skills__group">
                    <div className="skills__data">
                        {/* icono */}

                        <SiNodedotjs className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>
                    
                
                    <div className="skills__data">
                        {/* icono */}
                        <SiExpress className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">Express</h3>
                            <span className="skills__level">Intermedie</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        {/* icono */}
                        <SiMongodb className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">mongoDB</h3>
                            <span className="skills__level">Intermedie</span>
                        </div>
                    </div>
                </div>


                <div className="skills__group">
                    <div className="skills__data">
                        {/* icono */}
                        <SiPython className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>
                    
                
                    <div className="skills__data">
                        {/* icono */}
                        <SiDjango className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">Django</h3>
                            <span className="skills__level">Intermedie</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        {/* icono */}
                        <SiMysql className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">mySQL</h3>
                            <span className="skills__level">Intermedie</span>
                        </div>
                    </div>
                </div>

                    
            




            </div>
        </div>
    )
}

export default Backend;