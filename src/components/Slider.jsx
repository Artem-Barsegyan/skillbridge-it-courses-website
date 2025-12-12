import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { testimonials } from '../data/testimonials';
import prevBtnIcon from '../assets/slider/prev-btn.svg';
import nextBtnIcon from '../assets/slider/next-btn.svg';
import { Link } from "react-router";

const Slider = () => {
    return (
        <div className="swiper">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn'
                }}
                loop={true}>
                {testimonials.map(({ comment, userImg, userName, id }) => {
                    return (
                        <SwiperSlide className="swiper-slider" key={id}>
                            <div className="testimonials-item">
                                <p>{comment}</p>
                                <div className="user-info">
                                    <div className="name">
                                        <img src={userImg} />
                                        <span>{userName}</span>
                                    </div>
                                    <Link to="/signup">Read More</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="testimonials-buttons">
                <button type="button" className="prev-btn"><img src={prevBtnIcon} alt="prev-btn" /></button>
                <button type="button" className="next-btn"><img src={nextBtnIcon} alt="next-btn" /></button>
            </div>
        </div>
    )
}

export default Slider;