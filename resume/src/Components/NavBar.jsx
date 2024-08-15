import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-2" to="/">
                    <span>
                        <i className="fa-solid fa-file-invoice"></i>
                    </span>
                    <span className="navbar-brand-text"> Build</span> CV
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-blue fs-18"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Resume Templates
                            </Link>
                            <ul
                                className="dropdown-menu bg-white"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/ResumeBasic">
                                        Basic
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/ResumeTemplate">
                                        College
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* Conditional rendering of Login/Register or Logout button */}
                    <Link
                        to="/LoginForm"
                        className="btn btn-login btn-primary ms-lg-4 px-4 fs-18 mt-3 mt-lg-0"
                        onClick={handleLogin}
                    >
                        {isLoggedIn ? "Logout" : "Login/Register"}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
