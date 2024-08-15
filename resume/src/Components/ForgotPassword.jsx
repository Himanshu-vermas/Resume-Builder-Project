import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './ForgotPassword.module.css'; // adjust the path as per your file structure

const ForgotPassword = () => {
  return (
    <div className={`w-100 ${styles.centered}`}>
    
    
      <main className={`form-signin ${styles.form}`}>
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
              <p className="m-0">Change Password</p>
            </div>
          </div>

          <div className="mb-3">
            <span className="mb-3 fw-bold">whomonugiri@gmail.com</span>
          </div>

          <div className={`form-floating mb-4 ${styles.formFloating}`}>
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
            <label htmlFor="floatingInput"><i className="bi bi-key"></i> Enter new password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Change Password</button>

          <div className={`d-flex justify-content-between my-3 ${styles.links}`}>
            <Link to="/RegisterForm" className="text-decoration-none">Register</Link>
            <Link to="/LoginForm" className="text-decoration-none">Login</Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
