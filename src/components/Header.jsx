import React, { useState } from "react";
import "./Header.css";


//Icons-Imports

import  {BiHomeAlt}  from 'react-icons/bi';
import  {BsPersonCircle , BsFillFileEarmarkCodeFill} from 'react-icons/bs';
import  {MdOutlineHomeRepairService} from 'react-icons/md';
import  {VscFileSymlinkDirectory} from 'react-icons/vsc';
import  {TiContacts} from 'react-icons/ti';
import  {GrApps} from 'react-icons/gr';
import  {AiOutlineClose} from 'react-icons/ai'


const Header = () => {
    

    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80 ) header.classList.add("scroll-header");
        else header.classList.remove("scroll-scroll");
    })
    /* toggle menu */
    const [menu, setMenu] = useState(false)

    const [activeNav, setActiveNav] = useState("#home");

    return(
        <div className="header-container">
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo">Benjamin Destefanis (BD)</a>

                    <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" onClick={ () => setActiveNav("#home")} className={activeNav === "#home" ? 
                                    "nav__link active-link" : "nav__link"}>
                                    <BiHomeAlt className="nav__icon " />
                                    Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" onClick={ () => setActiveNav("#about")} className={activeNav === "#about" ? 
                                    "nav__link active-link" : "nav__link"}>
                                    <BsPersonCircle className="nav__icon" />
                                    About
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" onClick={ () => setActiveNav("#skills")} className={activeNav === "#skills" ? 
                                    "nav__link active-link" : "nav__link"}>
                                    <BsFillFileEarmarkCodeFill className="nav__icon" />
                                    Skills
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" onClick={ () => setActiveNav("#services")} className={activeNav === "#services" ? 
                                    "nav__link active-link" : "nav__link"}>
                                    <MdOutlineHomeRepairService className="nav__icon" />
                                    Services
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" onClick={ () => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 
                                    "nav__link active-link" : "nav__link"}>
                                    <VscFileSymlinkDirectory className="nav__icon" />
                                    Portfolio
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" onClick={ () => setActiveNav("#contact")} className={activeNav === "#contact" ? 
                                    "nav__link active-link" : "nav__link"}>
                                    <TiContacts className="nav__icon" />
                                    Contact
                                </a>
                            </li>



                        </ul>
                        <AiOutlineClose className="nav__close" onClick={ () => setMenu(!menu)}/>


                    </div>

                     {/* onClick change state booleam - true or false  */}
                    <div className="nav__toggle" onClick={ () => setMenu(!menu)}>
                        <GrApps />
                    </div>
                </nav>
            </header>
        </div>
    )
}


export default Header;