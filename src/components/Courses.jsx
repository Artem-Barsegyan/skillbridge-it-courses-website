import Title from './Title';
import { Link } from 'react-router';
import { courses } from '../data/courses';

const Courses = () => {
    return (
        <section className='courses-info-section'>
            <Title
                title='Online Courses on Design and Development'
                description='Welcome to our online course page, where you can enhance your skills in design and development. 
            Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive 
            knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.' />

            <div className='courses-info-content'>
                {courses.map(({ title, desc, courseImg, period, level, mentor, steps, courseDescLink }) => {
                    return (
                        <div className="courses-info-item" key={title}>
                            <div className="courses-info-top">
                                <div className="courses-info-top__title">
                                    <div>
                                        <span>{title}</span>
                                        <span>{desc}</span>
                                    </div>
                                    <Link to={courseDescLink}>View Course</Link>
                                </div>
                                <div className="courses-info-top__img">
                                    {courseImg.map((item) => {
                                        return (
                                            <img src={item} alt={title} key={Math.random().toString(16).slice(2)} />
                                        )
                                    })}
                                </div>
                                <div className="courses-info-top__subtitle">
                                    <div>
                                        <span>{period}</span>
                                        <span>{level}</span>
                                    </div>
                                    <span>By {mentor}</span>
                                </div>
                            </div>
                            <div className="courses-info-bottom">
                                <div className="courses-info-bottom__subtitle">
                                    <span>Curriculum</span>
                                </div>
                                <div className="courses-info-bottom__learn-time-info">
                                    {steps.map((item) => {
                                        return (
                                            <div key={item.num}>
                                                <span>{item.num}</span>
                                                <span>{item.theme}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Courses;