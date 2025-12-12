import { useState } from "react";
import { Link } from "react-router";

const Pricing = ({ title, changePosition }) => {
    const [showYearPrice, setShowYearPrice] = useState(false);

    const handleShowYearPriceBtn = () => {
        setShowYearPrice(true);
    }

    const handleShowMonthPriceBtn = () => {
        setShowYearPrice(false);
    }

    return (
        <section className="pricing-section">
            <div className="pricing-title" style={{ justifyContent: changePosition ? 'center' : 'space-between' }}>
                {title && <div>
                    <span>Our Pricing</span>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
                        Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
                        senectus in.
                    </p>
                </div>}
                <div className="price-buttons">
                    <button onClick={handleShowMonthPriceBtn} type="button" className="monthly-btn" id={!showYearPrice ? 'price-active-btn' : ''}>Monthly</button>
                    <button onClick={handleShowYearPriceBtn} type="button" className="yearly-btn" id={showYearPrice ? 'price-active-btn' : ''}>Yearly</button>
                </div>
            </div>
            <div className="pricing-content">
                <div className="pricing-item">
                    <h3>Standart Plan</h3>
                    <div className="standart-cost">
                        <span className="standart-num">{showYearPrice ? '$474' : '$39'}</span><span className="standart-plan-period"> /{showYearPrice ? 'year' : 'month'}</span>
                    </div>
                    <div className="price-info">
                        <span className="price-info__title">Available Features</span>
                        <div className="price-info__item">
                            <span><span className="marker" id="pricing-marker-on"></span>Access to selected free
                                courses.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Limited course materials and
                                resources.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Basic community support.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>No certification upon
                                completion.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Ad-supported platform.</span>
                            <span><span className="marker" id="pricing-marker-off"></span>Access to exclusive Pro Plan
                                community forums.</span>
                            <span><span className="marker" id="pricing-marker-off"></span>Early access to new courses
                                and updates.</span>
                        </div>
                        <Link to="/login">Get Started</Link>
                    </div>
                </div>
                <div className="pricing-item">
                    <h3>Pro Plan</h3>
                    <div className="pro-cost">
                        <span className="pro-num">{showYearPrice ? '$948' : '$79'}</span><span className="pro-plan-period"> /{showYearPrice ? 'year' : 'month'}</span>
                    </div>
                    <div className="price-info">
                        <span className="price-info__title">Available Features</span>
                        <div className="price-info__item">
                            <span><span className="marker" id="pricing-marker-on"></span>Unlimited access to all
                                courses.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Unlimited course materials and
                                resources.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Priority support from
                                instructors.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Course completion
                                certificates.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Ad-free experience.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Access to exclusive Pro Plan
                                community forums.</span>
                            <span><span className="marker" id="pricing-marker-on"></span>Early access to new courses and
                                updates.</span>
                        </div>
                        <Link to="/login">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;