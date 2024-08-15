import React, { useState } from 'react';

const RegisterForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any validation or API calls here
        // For simplicity, we'll just show the popup
        setShowPopup(true);
    };

    return (
        <div className="w-100">
            <main className="form-signin w-100 m-auto bg-white shadow rounded formContainer">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex gap-2 justify-content-center">
                        <span style={{ fontSize: "2rem", color: "#1966d2" }}>
                            <i className="fas fa-file-invoice"></i>
                        </span>
                        <div>
                        <h1 className="h3 fw-normal my-1">
                                    <b> <span className="navbar-brand-text">Build</span>
                                     <span style={{ color: "#1966d2" }}> CV</span></b>
                                </h1>
                            <p className="m-0">Create your new account</p>
                        </div>
                    </div>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            placeholder=""
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingName"><i className="bi bi-person"></i> Full Name</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingEmail"><i className="bi bi-envelope"></i> Email address</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingPassword"><i className="bi bi-key"></i> Password</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit"><i className="bi bi-person-plus-fill"></i> Register</button>

                    <div className="d-flex justify-content-between my-3 links">
                        <a href="/ForgotPassword" className="text-decoration-none">Forgot Password ?</a>
                        <a href="/LoginForm" className="text-decoration-none">Login</a>
                    </div>
                </form>
            </main>

            {showPopup && (
                <div className="popup">
                    <div className="popupContent">
                        <h2>Registration Successful!</h2>
                        <p>Your account has been successfully registered.</p>
                        <button className="btn btn-primary" onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegisterForm;
