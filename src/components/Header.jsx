import { NavLink, Link } from "react-router";
import { useState } from "react";

import logo from '../assets/header/header-bottom-logo.svg';


const Header = () => {
    const [openBurgerBtn, setOpenBurgerBtn] = useState(false);

    const handleBurgerBtn = () => {
        setOpenBurgerBtn(!openBurgerBtn);
    }

    return (
        <header className="header main-content">
            <div className="header-top">
                <Link to="/login">Free Courses <sup>🌟</sup> Sale Ends Soon, Get It Now</Link>
            </div>
            <div className="header-bottom-wrapper">
                <div className="header-bottom">
                    <div>
                        <Link to="/"><img src={logo} alt="logo"
                            width="54" height="54" /></Link>
                        <ul
                            className={openBurgerBtn ? 'menu open' : 'menu'}>
                            <li><NavLink to="/" end={true}>Home</NavLink></li>
                            <li><NavLink to="/courses">Courses</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/pricing">Pricing</NavLink></li>
                            <li><NavLink to="/contacts">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="header-links">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                        <button
                            className="burger-btn"
                            id={openBurgerBtn ? 'burger-btn-close' : ''}
                            onClick={handleBurgerBtn}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;