import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

function LoginForm() {
    return (
        <div className="d-flex align-items-center" style={{ height: "100vh" }}>
            <div className="w-100">
                <main className="form-signin w-100 m-auto bg-white shadow rounded">
                    <form>
                        <div className="d-flex gap-2 justify-content-center">
                            <span style={{ fontSize: "2rem", color: "#1966d2" }}>
                                <i className="fas fa-file-invoice"></i>
                            </span>
                            <div>
                                <h1 className="h3 fw-normal my-1">
                                    <b> <span className="navbar-brand-text">Build</span>
                                     <span style={{ color: "#1966d2" }}> CV</span></b>
                                </h1>
                                <p className="m-0">Login to your account</p>
                            </div>
                        </div>

                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingEmail">
                                <i className="bi bi-envelope"></i> Email address
                            </label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">
                                <i className="bi bi-key"></i> Password
                            </label>
                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Login <i className="bi bi-box-arrow-in-right"></i>
                        </button>
                        <div className="d-flex justify-content-between my-3">
                            <Link to="/ForgotPassword" className="text-decoration-none">
                                Forgot Password ?
                            </Link>
                            <Link to="/RegisterForm" className="text-decoration-none">
                            Register
                            </Link>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default LoginForm;
