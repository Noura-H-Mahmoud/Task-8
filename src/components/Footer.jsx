import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add( faFacebook, faTwitter, faInstagram,faLinkedinIn, faBehance);
export default function Footer(){
    return(
        <Element className='main_footer' id='contact'>
            <div className="row1">
                <div className="part1">
                    <div className="item1">
                        <div className='logo'>
                        <img src='./images/logo.PNG' alt="logo" />
                        <p>.agency</p>
                        </div>
                        <div className="head">
                            <h6>Head Office</h6>
                            <p>Syria - Latakia - grh2+hjx 35.5199518</p>
                        </div>
                    </div>
                </div>
                <div className="part2">
                    <div className="sales">
                        <div className="item1">
                            <h6>Sales</h6>
                            <a href="mailto:contact@focal-x.com">
                                contact@focal-x.com
                            </a>
                            <a href="tel:+963 953 666 056">
                                +963 953 666 056
                            </a>
                        </div>
                        <div className="item2">
                            <h6>Public Relations</h6>
                            <a href="mailto:pr@focal-x.com">
                                pr@focal-x.com
                            </a>
                            <a href="tel:+963 953 666 052">
                                +963 953 666 052
                            </a>
                        </div>
                    </div>
                    <div className="customer">
                        <div className="item1">
                            <h6>Customer Support</h6>
                            <a href="mailto:info@focal-x.com">
                                info@focal-x.com
                            </a>
                            <a href="tel:+963 953 666 054">
                                +963 953 666 056
                            </a>
                        </div>
                        <div className="item2">
                            <h6>Human Resources</h6>
                            <a href="hr@focal-x.com">
                                hr@focal-x.com
                            </a>
                        </div>
                    </div>
                    <div className="usefulLinks">
                        <h6>Useful Links</h6>
                        <ul>
                            <li>
                                <a href="#">Clients & Partners</a>
                            </li>
                            <li>
                                <a href="#">Check Certificat ID</a>
                            </li>
                            <li>
                                <a href="#">Check for employee</a>
                            </li>
                            <li>
                                <a href="#">Our Brand ID guidlines</a>
                            </li>
                        </ul>
                    </div>
                    <div className="touch">
                        <h6>Keep In Touch</h6>
                        <div className="media">
                            <div className="divIcone">
                                <a href="https://facebook.com" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className='Icon'/>
                                </a>
                            </div>
                            <div className="divIcone">
                                <a href="https://behance.net" target="_blank">
                                    <FontAwesomeIcon icon={faBehance} className='Icon' />
                                </a>
                            </div>
                            <div className="divIcone">
                                <a href="https://linkedin.com" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn}  className='Icon'/>
                                </a>
                            </div>
                            <div className="divIcone">
                                <a href="https://instagram.com" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className='Icon' />
                                </a>
                            </div>
                            <div className="divIcone">
                                <a href="https://twitter.com" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} className='Icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row2">
                <div className='line1'></div>
                <p>
                © 2021 - 2023 focal X L.L.C All Right Reserved
                </p>
                <div className='line2'></div>
            </div>

        </Element>
    )
}