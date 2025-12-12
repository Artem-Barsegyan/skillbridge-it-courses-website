import { Link } from 'react-router';

import logo from '../assets/footer/footer-top-logo.svg';
import facebookImg from '../assets/footer/footer-facebook-link.svg';
import twitterImg from '../assets/footer/footer-twitter-link.svg';
import linkedinImg from '../assets/footer/footer-linkedin-link.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper main-content">
                <div className="footer-top">
                    <div className="footer-links">
                        <img src={logo} alt="logo" />
                        <div>
                            <a className="email" href="mailto:hello@skillbridge.com">hello@skillbridge.com</a>
                            <a className="tel" href="tel:+91 91813 23 2309">+91 91813 23 2309</a>
                            <a className="location"
                                href="https://yandex.ru/maps/geo/new_york/2240574765/?ll=-74.129960%2C40.780987&utm_source=ntp_chrome&z=10.24">Somewhere
                                in the World</a>
                        </div>
                    </div>
                    <div className="footer-top-content">
                        <div className="footer-menu">
                            <ul>
                                <li><span>Home</span></li>
                                <li><Link to="/">Benefits</Link></li>
                                <li><Link to="/">Our Courses</Link></li>
                                <li><Link to="/">Our Testimonials</Link></li>
                                <li><Link to="/">Our FAQ</Link></li>
                            </ul>
                            <ul>
                                <li><span>About Us</span></li>
                                <li><Link to="/about">Company</Link></li>
                                <li><Link to="/about">Achievements</Link></li>
                                <li><Link to="/about">Our Goals</Link></li>
                            </ul>
                        </div>
                        <div className="footer-social-links">
                            <span>Social Profiles</span>
                            <a href="https://facebook.com/"><img src={facebookImg} alt="facebook" /></a>
                            <a href="https://twitter.com/"><img src={twitterImg} alt="twitter" /></a>
                            <a href="https://www.linkedin.com/"><img src={linkedinImg} alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy;&nbsp;2025&nbsp;Skillbridge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;