import { useParams } from 'react-router';
import Slider from './Slider';
import { Link } from 'react-router';
import { useState } from 'react';

const Authorization = () => {
    const { authType } = useParams();
    const [loginPasswordVisibility, setLoginPasswordVisibility] = useState(false);
    const [signUpPasswordVisibility, setSignUpPasswordVisibility] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        saveUser: false,
    });
    const [signUpData, setSignUpData] = useState({
        fullName: '',
        email: '',
        password: '',
        approval: false,
    });

    const handleLoginChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginData((prev) => {
            return (
                { ...prev, [name]: type === 'checkbox' ? checked : value }
            )
        })
    };
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
    };

    const handleSignUpChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSignUpData((prev) => {
            return (
                { ...prev, [name]: type === 'checkbox' ? checked : value }
            )
        })
    };
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log(signUpData);
    };

    const handleLoginPasswordBtn = () => {
        setLoginPasswordVisibility(!loginPasswordVisibility);
    }

    const handleSignUpPasswordBtn = () => {
        setSignUpPasswordVisibility(!signUpPasswordVisibility);
    }

    return (
        <section className='form-section'>
            <div className="testimonials">
                <div className="title">
                    <h1>Students Testimonials</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <Slider />
            </div>
            {authType === 'login'
                ?
                <form method="post" className='form' onSubmit={handleLoginSubmit}>
                    <div className="form-top">
                        <div className="form-top__title">
                            <span>Login</span>
                            <span>Welcome back! Please log in to access your account.</span>
                        </div>
                        <div className="form-top__info form-top__email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your Email"
                                required
                                onChange={handleLoginChange}
                                value={loginData.email} />
                        </div>
                        <div className="form-top__info form-top__password">
                            <label htmlFor="password">Password</label>
                            <input
                                type={loginPasswordVisibility ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Enter your Password"
                                required
                                onChange={handleLoginChange}
                                value={loginData.password} />
                            <span
                                className="pass-visibility-switch"
                                onClick={handleLoginPasswordBtn}
                                id={loginPasswordVisibility ? 'eye-pass-hide' : ''}></span>
                        </div>
                        <div className="form-top__password-recovery-link">
                            <Link to="/signup">Forgot Password?</Link>
                        </div>
                        <div className="form-top__user-agree-checkbox">
                            <input
                                type="checkbox"
                                name="saveUser"
                                className="save-user"
                                id="save-user"
                                onChange={handleLoginChange}
                                checked={loginData.saveUser} />
                            <label htmlFor="save-user">Remember Me</label>
                        </div>
                        <button type="submit">Login</button>
                    </div>
                    <div className="form-bottom-line">
                        <span></span>or<span></span>
                    </div>
                    <div className="form-bottom">
                        <div>
                            <a href="https://www.google.com/">Login with Google</a>
                        </div>
                        <div>
                            <span>Don’t have an account?</span>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </form>
                :
                <form method="get" className="form" onSubmit={handleSignUpSubmit}>
                    <div className="form-top">
                        <div className="form-top__title">
                            <span>Sign Up</span>
                            <span>Create an account to unlock exclusive features.</span>
                        </div>
                        <div className="form-top__info form-top__name">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                id="name"
                                placeholder="Enter your Name"
                                required
                                onChange={handleSignUpChange}
                                value={signUpData.fullName} />
                        </div>
                        <div className="form-top__info form-top__email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your Email"
                                required
                                onChange={handleSignUpChange}
                                value={signUpData.email} />
                        </div>
                        <div className="form-top__info form-top__password" style={{ marginBottom: '20px' }}>
                            <label htmlFor="password">Password</label>
                            <input
                                type={signUpPasswordVisibility ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Enter your Password"
                                required
                                onChange={handleSignUpChange}
                                value={signUpData.password} />
                            <span
                                className="pass-visibility-switch"
                                onClick={handleSignUpPasswordBtn}
                                id={signUpPasswordVisibility ? 'eye-pass-hide' : ''}></span>
                        </div>
                        <div className="form-top__user-agree-checkbox">
                            <input
                                type="checkbox"
                                name="approval"
                                className="approval"
                                id="approval"
                                onChange={handleSignUpChange}
                                checked={signUpData.approval} />
                            <label htmlFor="approval">I agree with <a href="https://en.wikipedia.org/wiki/Terms_of_service">Terms of Use</a> and <a href="https://en.wikipedia.org/wiki/Privacy_policy">Privacy Policy</a></label>
                        </div>
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="form-bottom-line">
                        <span></span>or<span></span>
                    </div>
                    <div className="form-bottom">
                        <div>
                            <a href="https://www.google.com/">Sign Up with Google</a>
                        </div>
                        <div>
                            <span>Already have an account?</span>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </form>}
        </section>
    )
}

export default Authorization;