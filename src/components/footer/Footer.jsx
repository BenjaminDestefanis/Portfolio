import React from "react";
import "./Footer.css";

import {FaTiktok, FaInstagram, FaGithub} from "react-icons/fa"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">BD</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="" className="home__social-icon" target="_blank">
                        <FaInstagram />
                    </a>

                    <a href="" className="home__social-icon" target="_blank">
                        <FaGithub />
                    </a>

                    <a href="" className="home__social-icon" target="_blank">
                        <FaTiktok />
                    </a>
                </div>

                <span className="footer__copy">&#169; BenjaminDestefanis. All rights reserved</span>
            </div>

        </footer>

    ) 
}

export default Footer;