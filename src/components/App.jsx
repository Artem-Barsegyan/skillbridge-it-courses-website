import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './Layout';
import Home from './Home';
import Courses from './Courses';
import CourseDetails from './CourseDetails';
import About from './About';
import Price from './Price';
import Contacts from './Contacts';
import Authorization from './Authorization';

import '../normalize.css';
import '../scss/style.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/courses/:courseName' element={<CourseDetails />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/pricing' element={<Price />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path=':authType' element={<Authorization />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;