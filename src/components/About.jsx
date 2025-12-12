import Title from './Title';
import { achievments, goals } from '../data/about';
import { Link } from 'react-router';

const About = () => {
    return (
        <section className="about-us-section">
            <Title
                title={'About Skillbridge'}
                description={'Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.'} />
            <div className="achievments-info">
                <div className="achievments-title">
                    <span>Achievements</span>
                    <span>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements.</span>
                </div>
                <div className="achievments-content">
                    {achievments.map(({ icon, name, desc }) => {
                        return (
                            <div className="achievments-item" key={name}>
                                <span><img src={icon} alt="icon" /></span>
                                <span>{name}</span>
                                <p>{desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="goals-info">
                <div className="goals-title">
                    <span>Our Goals</span>
                    <span>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to.</span>
                </div>
                <div className="goals-content">
                    {goals.map(({ icon, name, desc }) => {
                        return (
                            <div className="goals-item" key={name}>
                                <span><img src={icon} alt="icon" /></span>
                                <span>{name}</span>
                                <p>{desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="about-us-link">
                <div>
                    <h2><span>Together</span>, let's shape the future of digital innovation</h2>
                    <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
                </div>
                <Link to="/login">Join Now</Link>
            </div>
        </section>
    )
}

export default About;