import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../../components';
import { useAuth } from '../../context';
import './login.css';


const Login = () => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const { user, loginUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user) {
            navigate(location?.state?.from || '/', { replace: true });
        }
    }, [user]);



    const loginHandler = () => {
        if (loginFormData.email && loginFormData.password === "") {
            alert("Please Fill out form correctly");
            return;
        }

        loginUser(loginFormData.email, loginFormData.password);
        if (user) {
            navigate("/", { replace: true });
        }

        setLoginFormData(() => ({ email: "", password: "" }));
    }

    const testLoginHandler = () => {
        loginUser("sam@gmail.com", "s123");
        setLoginFormData(() => ({ email: "", password: "" }));
    }


    return (
        <>
            <Navbar noSearch />
            <main className="container-main">
                <form onSubmit={(e) => e.preventDefault()} className="form-wrapper">
                    <div className="form-heading">Welcome Back</div>
                    <div className="form-body">
                        <label htmlFor="email" className="form-label mt-3">Enter your Email.</label>
                        <input
                            type="text"
                            name=""
                            value={loginFormData.email}
                            onChange={(e) => setLoginFormData(() =>
                                ({ ...loginFormData, email: e.target.value }))}
                            id="email"
                            className="form-input mt-1"
                            autoComplete="off"
                        />

                        <label htmlFor="password" className="form-label mt-3">
                            Enter your password</label>
                        <input
                            type="password"
                            name=""
                            value={loginFormData.password}
                            onChange={(e) =>
                                setLoginFormData(() =>
                                    ({ ...loginFormData, password: e.target.value }))}
                            id="password"
                            className="form-input mt-1"
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-utility mt-2">
                        <div className="form-utility-1 flex a-item-center">
                            <input type="checkbox" id="remembercheck" className="form-checkbox" />
                            <label htmlFor="remembercheck " className="form-check ml-1">Remember Me
                            </label>

                            <a href="" className="forgot-pwrd">Forgot Password?</a>
                        </div>
                        <div className="form-utility-2 mt-2">
                            By logging in, you agree to our
                            <a href="" className="form-link"> Privary Policy</a> and
                            <a href="" className="form-link"> Terms of service.</a>
                        </div>
                    </div>

                    <div className="from-button mt-3">
                        <button type='button' onClick={() => loginHandler()} className="btn-sq btn-light">Login</button>
                        <button type='button' onClick={testLoginHandler} className="btn-sq btn-light mt-1">Test Login</button>
                    </div>

                    <div className="form-end form-utility mt-1">
                        Not a Member? <Link to="/signup" className="form-link">Sign Up.</Link>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login;