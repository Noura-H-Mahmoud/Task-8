import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add( faFacebook, faTwitter, faInstagram,faLinkedinIn, faBehance);
export default function Header(){
    const scrollClick =(event)=>{
            const link =event.currentTarget.querySelector('a');
    }
    return(
        <header id="home">
            <div className="content">
                <h2 className="typing-effect">
                    Hey!! Mario still here, But don’t forget that
                </h2>
                <p>
                At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                Branding, Digital Marketing, Web/App Development, Ui/Ux
                Content creation, Graphic design, Social media and More........
                So you can take a tour in our website, OR just 
                <b> Press Start :)</b>
                </p>
            </div>
            <div className="footer">
                <div className="img">
                    <img src="https://focal-x.com/assets/img/home/fotter.svg" className="buttom" alt="footer"/>
                    <img src="https://focal-x.com/assets/img/home/gameBoy-min.png" className="game"/>
                    <img src="https://focal-x.com/assets/img/home/pressStart.svg" className="start"/>
                    <a id="playlap" href="https://focal-x.com/mario" className="palylap"></a>
                    <img src="https://focal-x.com/assets/img/home/pattren.png" className="pattren"/>
                </div>
                <div className="links">
                    <p className="paraSmall">
                    Get better experience Use web browser
                    </p>
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
                    <div className="scroll" onClick={scrollClick}>
                        <a className="p" href="#Services">Scroll To Discover</a>
                    </div>
                    <div className="copyRight">
                    © 2021 - 2022 focal X agency All Right Reserved
                    </div>
                </div>
            </div>
            <div className="footer-for-mobile">
                <img src="https://focal-x.com/assets/img/home/footer-mobile.png" alt="footer" className="back"/>
                <div id="gameImg-sm" className="gameboy">
                    <img src="./images/gamefor-mobile (1).png" alt="gamefor-mobile"/>
                    <a id="play" href="https://focal-x.com/mario" className="play"></a>
                </div>
            </div>
        </header>
    )
}