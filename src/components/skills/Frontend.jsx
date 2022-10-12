import React from "react";

import {SiRedux, SiReact, SiGit, SiBootstrap, SiJavascript, SiCss3} from "react-icons/si"

const Frontend = () => {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Front-end developer</h3>

            <div className="skills__box">

                <div className="skills__group">
                    <div className="skills__data">
                        {/* icono */}
                        <SiCss3 className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>
                    
                
                    <div className="skills__data">
                        {/* icono */}
                        <SiJavascript className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        {/* icono */}
                        <SiBootstrap className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">BootStrap</h3>
                            <span className="skills__level">Intermedie</span>
                        </div>
                    </div>
                </div>


                <div className="skills__group">
                    <div className="skills__data">
                        {/* icono */}
                        <SiGit className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">GIT</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>
                    
                
                    <div className="skills__data">
                        {/* icono */}
                        <SiReact className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        {/* icono */}
                        <SiRedux className="skill__icon"/>
                        <div>
                            <h3 className="skills__name">Redux</h3>
                            <span className="skills__level">Intermedie</span>
                        </div>
                    </div>
                </div>

                    
            




            </div>
        </div>
    )
}

export default Frontend;