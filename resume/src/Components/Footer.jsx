import React from "react";

function Footer() {
  return (
    <footer className="pt-5">
        <div className="container my-4">
            <div className="row gy-5 gx-md-5 text-center text-md-start">
                <div className="col-md-6 col-xl-4">
                    <a className="site-logo text-decoration-none fw-bold fs-2" href="#">
                        <span>
                            <i className="fa-solid fa-file-invoice"></i>
                        </span>
                        <span className="site-logo-text">Build</span> CV
                    </a>
                    <p className="text-grey fs-18 mt-4">Build CV is a CV builder that helps users like you to create stunning CVs within 5 minutes</p>
                </div>

                <div className="col-md-6 col-xl-2">
                    <h3 className="text-blue">Build CV</h3>
                    <ul className="list-unstyled mt-4">
                        {/* <li className="my-2">
                            <a href="/Home" className="text-decoration-none fs-17 text-dark">Homepage</a>
                        </li> */}
                        <li className="my-2">
                            <a href="/LoginForm" className="text-decoration-none fs-17 text-dark">CV Builder</a>
                        </li>
                        <li className="my-2">
                            <a href="/Home2" className="text-decoration-none fs-17 text-dark">CV Templates</a>
                        </li>
                        <li className="my-2">
                            <a href="/LoginForm" className="text-decoration-none fs-17 text-dark">LoginForm</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 col-xl-2">
                    <h3 className="text-blue">Legal</h3>
                    <ul className="list-unstyled mt-4">
                        <li className="my-2">
                            <a href="/ContactUs" className="text-decoration-none fs-17 text-dark">Contact Us</a>
                        </li>
                        <li className="my-2">
                            <a href="/TermsOfUse" className="text-decoration-none fs-17 text-dark">Terms of Use</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6 col-xl-4">
                    <h3 className="text-blue">Help Center</h3>
                    <p className="fs-17 mt-3">Mail: <a href="mailto:support@buildcv.com" className="text-decoration-none text-blue">support@buildcv.com</a></p>
                </div>
            </div>
        </div>

        <div className="container-fluid copyright-text pt-4 pb-3">
            <p className="text-center fw-3">&copy; 2024 BuildCv. All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
