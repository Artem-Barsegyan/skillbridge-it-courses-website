import { Link } from "react-router";

const Faq = () => {
    return (
        <section className="faq-section" id="faq">
            <div className="faq-title">
                <span>Frequently Asked Questions</span>
                <p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                <Link to="/login">See All FAQ’s</Link>
            </div>
            <div className="question-wrapper">
                <details>
                    <summary><span>Can I enroll in multiple courses at once?</span></summary>
                    <p>Absolutely! You can enroll in multiple courses simultaneously and access them at your
                        convenience.</p>
                    <Link to="/login">Enrollment Process for Different Courses</Link>
                </details>
                <details>
                    <summary><span>What kind of support can I expect from instructors?</span></summary>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed magnam sint dolorem enim
                        dolor modi corporis ea? Facere aspernatur tempora corrupti similique earum ipsa nulla
                        voluptate impedit? Nobis, ad.</p>
                </details>
                <details>
                    <summary><span>Are the courses self-paced or do they have specific start and end dates?</span>
                    </summary>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed magnam sint dolorem enim
                        dolor modi corporis ea? Facere aspernatur tempora corrupti similique earum ipsa nulla
                        voluptate impedit? Nobis, ad.</p>
                </details>
                <details>
                    <summary><span>Are there any prerequisites for the courses?</span></summary>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed magnam sint dolorem enim
                        dolor modi corporis ea? Facere aspernatur tempora corrupti similique earum ipsa nulla
                        voluptate impedit? Nobis, ad.</p>
                </details>
                <details>
                    <summary><span>Can I download the course materials for offline access?</span></summary>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed magnam sint dolorem enim
                        dolor modi corporis ea? Facere aspernatur tempora corrupti similique earum ipsa nulla
                        voluptate impedit? Nobis, ad.</p>
                </details>
            </div>
        </section>
    )
}

export default Faq;