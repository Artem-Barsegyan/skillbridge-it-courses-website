import zapierIcon from '../assets/home/hero/zapier-icon.svg';
import spotifyIcon from '../assets/home/hero/spotify-icon.svg';
import zoomIcon from '../assets/home/hero/zoom-icon.svg';
import amazonIcon from '../assets/home/hero/amazon-icon.svg';
import adobeIcon from '../assets/home/hero/adobe-icon.svg';
import notionIcon from '../assets/home/hero/zapier-icon.svg';
import netflixIcon from '../assets/home/hero/netflix-icon.svg';

import webDesignImg from '../assets/home/courses/web-design-course-img.jpeg';
import mobileAppDevImg from '../assets/home/courses/mobile-app-developer-course-img.jpeg';
import graphicDesignImg from '../assets/home/courses/graphic-design-course-img.jpeg';
import uxUiDesignImg from '../assets/home/courses/ux-ui-design-course-img.jpeg';
import frontEndDevImg from '../assets/home/courses/front-end-developer-course-img.jpeg';
import advancedJsImg from '../assets/home/courses/advanced-js-course-img.jpeg';

export const servicesIconArr = [
    { link: zapierIcon, title: 'zapier', },
    { link: spotifyIcon, title: 'spotify', },
    { link: zoomIcon, title: 'zoom', },
    { link: amazonIcon, title: 'amazon', },
    { link: adobeIcon, title: 'adobe', },
    { link: notionIcon, title: 'notion', },
    { link: netflixIcon, title: 'netflix', },
];

export const benefitsSection = [
    { num: '01', title: 'Flexible Learning Schedule', desc: 'Fit your coursework around your existing commitments and obligations.', },
    { num: '02', title: 'Expert Instruction', desc: 'Learn from industry experts who have hands-on experience in design and development.', },
    { num: '03', title: 'Diverse Course Offerings', desc: 'Explore a wide range of design and development courses covering various topics.', },
    { num: '04', title: 'Updated Curriculum', desc: 'Access courses with up-to-date content reflecting the latest trends and industry practices.', },
    { num: '05', title: 'Practical Projects and Assignments', desc: 'Develop a portfolio showcasing your skills and abilities to potential employers.', },
    { num: '06', title: 'Interactive Learning Environment', desc: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.', },
]

export const coursesSection = [
    { image: webDesignImg, imageInfo: 'web-design', period: '4 Weeks', level: 'Beginner', mentor: 'John Smith', title: 'Web Design Fundamentals', desc: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.', },
    { image: uxUiDesignImg, imageInfo: 'ux-ui-design', period: '6 Weeks', level: 'Intermediate', mentor: 'Emily Johnson', title: 'UI/UX Design', desc: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.', },
    { image: mobileAppDevImg, imageInfo: 'mobile-app-developer', period: '8 Weeks', level: 'Intermediate', mentor: 'David Brown', title: 'Mobile App Development', desc: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.', },
    { image: graphicDesignImg, imageInfo: 'graphic-design', period: '10 Weeks', level: 'Beginner', mentor: 'Sarah Thompson', title: 'Graphic Design for Beginners', desc: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.', },
    { image: frontEndDevImg, imageInfo: 'front-end-developer', period: '10 Weeks', level: 'Intermediate', mentor: 'Michael Adams', title: 'Front-End Web Development', desc: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.', },
    { image: advancedJsImg, imageInfo: 'advanced-js', period: '6 Weeks', level: 'Advance', mentor: 'Jennifer Wilson', title: 'Advanced JavaScript', desc: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.', },
]