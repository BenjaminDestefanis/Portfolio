import React from "react";
import './Social.css'

import {BsLinkedin, BsInstagram, BsGithub, BsTwitter} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa'

const Social = () => {
    return(
        <div className="home__social">
            <a href="http://www.linkedin.com/in/benjaminisraelbaigorria" className="home__social-icon" target="_blank"> 
                <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/banjyscodes/?hl=es" className="home__social-icon" target="_blank">
                <BsInstagram />
            </a>
            <a href="https://github.com/BenjaminDestefanis" className="home__social-icon" target="_blank">
                <BsGithub />
            </a>
            <a href="" className="home__social-icon" target="_blank"> 
                <BsTwitter />
            </a>
            <a href="https://www.tiktok.com/@benjaminisraelbaigorria" className="home__social-icon" target="_blank">
                <FaTiktok />
            </a>

        </div>
    )
}

export default Social;