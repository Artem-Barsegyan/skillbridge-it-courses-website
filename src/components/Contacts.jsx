import Title from './Title';
import messageIcon from '../assets/contacts/contact-message-icon.svg';
import phoneIcon from '../assets/contacts/contact-phone-icon.svg';
import locationIcon from '../assets/contacts/contact-location-icon.svg';
import facebookIcon from '../assets/contacts/contact-facebook-icon.svg';
import twitterIcon from '../assets/contacts/contact-twitter-icon.svg';
import linkedInIcon from '../assets/contacts/contact-linkedin-icon.svg';
import { useState } from 'react';

const Contacts = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return (
                { ...prev, [name]: value }
            )
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="contact-section">
            <Title
                title={'Contact Us'}
                description={'Welcome to SkillBridge is Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you are an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.'} />
            <div className="contact-content">
                <form method='post' className='contact-form' onSubmit={handleSubmit}>
                    <div className="contact-form__info">
                        <div>
                            <label htmlFor="name">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="name"
                                placeholder="Enter First Name"
                                required
                                onChange={handleChange}
                                value={formData.firstName} />
                        </div>
                        <div>
                            <label htmlFor="surname">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id="surname"
                                placeholder="Enter Last Name"
                                required
                                onChange={handleChange}
                                value={formData.lastName} />
                        </div>
                    </div>
                    <div className="contact-form__info">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your Email"
                                required
                                onChange={handleChange}
                                value={formData.email} />
                        </div>
                        <div>
                            <label htmlFor="tel">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="tel"
                                placeholder="Enter Phone Number"
                                required
                                onChange={handleChange}
                                value={formData.phone} />
                        </div>
                    </div>
                    <div className="contact-form__info">
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your Subject"
                                required
                                onChange={handleChange}
                                value={formData.subject} />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Enter your Message here..."
                                maxLength="300"
                                onChange={handleChange}
                                value={formData.message}></textarea>
                        </div>
                    </div>
                    <div className="contact-form-btn">
                        <button className="contact-form-btn" type="submit">Send Your Message</button>
                    </div>
                </form>
                <div className="contact-link">
                    <div className="contact-link__item">
                        <img src={messageIcon} alt="message" width="52" height="52" />
                        <a href="mailto:support@skillbridge.com">support@skillbridge.com</a>
                    </div>
                    <div className="contact-link__item">
                        <img src={phoneIcon} alt="phone" width="52" height="52" />
                        <a href="tel:+91 00000 00000">+91 00000 00000</a>
                    </div>
                    <div className="contact-link__item">
                        <img src={locationIcon} alt="location" width="52" height="52" />
                        <a href="https://yandex.ru/maps/geo/new_york/2240574765/?ll=-74.129960%2C40.780987&utm_source=ntp_chrome&z=10.24">Somewhere in the World</a>
                    </div>
                    <div className="contact-link__item">
                        <div>
                            <a href="https://facebook.com/"><img src={facebookIcon} alt="facebook" /></a>
                            <a href="https://twitter.com/"><img src={twitterIcon} alt="twitter" /></a>
                            <a href="https://www.linkedin.com/"><img src={linkedInIcon} alt="linkedin" /></a>
                        </div>
                        <span>Social Profiles</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;