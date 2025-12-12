import Title from './Title';
import { useParams } from 'react-router';
import { courses } from '../data/courses';
import Video from './Video';

const CourseDetails = () => {
    const { courseName } = useParams();
    const currentCourse = courses.find(({ courseDescLink }) => { return courseDescLink === courseName });

    if (!currentCourse) {
        return <div>Курс не найден</div>;
    }

    const { detailsTitle, detailsInfo } = currentCourse;

    return (
        <section className="course-description-section">
            <Title
                title={detailsTitle.title}
                description={detailsTitle.desc} />
            <Video />
            <div className='course-description-content'>
                {detailsInfo.map(({ step, sectionName, programm }) => {
                    return (
                        <div className="course-description-item" key={step}>
                            <span>{step}</span>
                            <div className="course-description-item__info">
                                <span>{sectionName}</span>
                                {programm.map(({ lessonName, lessonNum, lessonTime }) => {
                                    return (
                                        <div className="course-description-item__info-description" key={lessonNum}>
                                            <div>
                                                <span>{lessonName}</span>
                                                <span>{lessonNum}</span>
                                            </div>
                                            <span>{lessonTime}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CourseDetails;