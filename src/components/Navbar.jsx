import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    const handleSetActive = (to) => {
                setActiveLink(to);
            };
    return (
        <nav className='nav'>
            <div className="start">
                <img src="https://focal-x.com/assets/img/home/logo.svg" alt="logo foacal X" />
                <b>Digital markenting agency</b>
            </div>
             <div>
                <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
                    <span className={isOpen ? 'open' : ''}></span>
                    <span className={isOpen ? 'open' : ''}></span>
                    <span className={isOpen ? 'open' : ''}></span>
                </button>
                <ul className={`end ${isOpen ? 'open' : ''}`}>
                    <li>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'home' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'Services' ? 'active' : ''}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="hosting"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'hosting' ? 'active' : ''}
                        >
                            Hosting
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={handleSetActive}
                            className={activeLink === 'contact' ? 'active' : ''}
                        >
                            Let's Talk
                        </Link>
                    </li>
                </ul>
             </div>
        </nav>
    )
}
