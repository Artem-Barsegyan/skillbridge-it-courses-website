import { NavLink, Link } from "react-router";
import { useState } from "react";
import { menu } from '../data/header';

import logo from '../assets/header/header-bottom-logo.svg';


const Header = () => {
    const [openBurgerBtn, setOpenBurgerBtn] = useState(false);

    const handleBurgerBtn = () => {
        setOpenBurgerBtn(!openBurgerBtn);
    }

    const handleBurgerMenuLink = () => {
        setOpenBurgerBtn(false);
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
                            {menu.map(({ section, path }) => {
                                return (
                                    <li key={section}>
                                        <NavLink
                                            to={path}
                                            end={path === '/' ? true : false}
                                            onClick={handleBurgerMenuLink}>
                                            {section}
                                        </NavLink>
                                    </li>
                                )
                            })}
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