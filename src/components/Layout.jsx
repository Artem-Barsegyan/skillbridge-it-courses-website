import { Outlet } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
    return (
        <div className="wrapper">
            <ScrollToTop />
            <Header />
            <main className='main-content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;