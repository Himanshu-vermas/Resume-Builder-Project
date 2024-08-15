import React from "react";

function Header() {
  return (
    <div className="container h-100 d-flex align-items-center justify-content-center mt-5">
      <div className="row text-center justify-content-center">
        <h1 className="text-uppercase text-blue fw-6 lh-17 display-5">
          Create your professional CV in{" "}
          <span className="text-lowercase text-primary" style={{ display: "block" }}>
            just 5 minutes!
          </span>
        </h1>
        <a
          href="/LoginForm"
          className="btn btn-lg text-capitalize btn-primary btn-banner fs-4 fw-5 mt-4"
          style={{ width: "300px" }}
        >
          Let's get started
        </a>
      </div>
    </div>
  );
}

export default Header;
