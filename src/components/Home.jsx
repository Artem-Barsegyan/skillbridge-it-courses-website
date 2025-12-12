import { Link } from "react-router";
import Pricing from './Pricing';
import Faq from './Faq';
import Video from './Video';
import { servicesIconArr, benefitsSection, coursesSection } from "../data/home";
import { testimonials } from '../data/testimonials';

import arrowIcon from '../assets/home/benefits/benefits-arrow-link-icon.svg';

const Home = () => {
    return (
        <>
            {/* hero-section */}
            <section className="hero-section">
                <div className="hero-title">
                    <h1><span><span>Unlock</span> Your Creative Potential</span></h1>
                    <span>with Online Design and Development Courses.</span>
                    <span>Learn from Industry Experts and Enhance Your Skills.</span>
                </div>
                <div className="hero-links">
                    <Link to="/courses">Explore Courses</Link>
                    <Link to="/pricing">View Pricing</Link>
                </div>
                <div className="partners-wrapper">
                    <div className="partners">
                        {servicesIconArr.map(({ link, title }) => {
                            return <span key={title}><img src={link} alt={title} /></span>
                        })}
                    </div>
                </div>
                <Video />
            </section>


            {/* benefits-section */}
            <section className="benefits-section" id="benefits">
                <div className="benefits-title">
                    <div>
                        <span>Benefits</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                            Cras eu
                            sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                        </p>
                    </div>
                    <Link to="/login">View All</Link>
                </div>
                <div className="benefits-content">
                    {benefitsSection.map(({ num, title, desc }) => {
                        return (
                            <div className="benefits-item" key={num}>
                                <span>{num}</span>
                                <div>
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="benefits-link">
                                    <Link to="/about"><img
                                        src={arrowIcon}
                                        alt="arrow-icon" width="17" height="17" /></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>


            {/* courses-section */}
            <section className="courses-section" id="courses">
                <div className="courses-title">
                    <div>
                        <span>Our Courses</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                            Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                            senectus in.
                        </p>
                    </div>
                    <Link to="/courses">View All</Link>
                </div>
                <div className="courses-content">
                    {coursesSection.map(({ image, imageInfo, period, level, mentor, title, desc }) => {
                        return (
                            <div className="courses-item" key={title}>
                                <img src={image} alt={imageInfo} />
                                <div className="courses-item__subinfo">
                                    <div>
                                        <span>{period}</span>
                                        <span>{level}</span>
                                    </div>
                                    <span>By {mentor}</span>
                                </div>
                                <div className="courses-item__info">
                                    <span>{title}</span>
                                    <p>{desc}</p>
                                    <Link to="/login">Get it Now</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>


            {/* testimonials-section */}
            <section className="testimonials-section" id="testimonials">
                <div className="testimonials-title">
                    <div>
                        <span>Our Testimonials</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                            Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                            senectus in.
                        </p>
                    </div>
                    <Link to="/login">View All</Link>
                </div>
                <div className="testimonials-content">
                    {testimonials.map(({ comment, userImg, userName, id }) => {
                        return (
                            <div className="testimonials-item" key={id}>
                                <p>{comment}</p>
                                <div className="user-info">
                                    <div className="name">
                                        <img src={userImg} alt="user" />
                                        <span>{userName}</span>
                                    </div>
                                    <Link to="/login">Read Full Story</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>


            {/* pricing-section */}
            <Pricing
                title={true} />

            {/* faq-section */}
            <Faq />

        </>
    )
}

export default Home;