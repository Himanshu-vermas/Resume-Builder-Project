import React from "react";

function Home2() {
  return (
    <section className="templates py-8 bg-secondary">
      <div className="container">
        <div className="row section-title text-center mb-5">
          <div className="col-12">
            <h2 className="display-6 text-blue fw-bold">Here are the Best Templates for you</h2>
            <p className="text-grey fs-4 my-4 mx-auto">A great job application leads to a good interview. An amazing resume is what makes it all possible.</p>
          </div>
        </div>

        <div className="row templates-list gy-5 gx-lg-5">
          <div className="templates-item position-relative col-lg-6">
            <div className="template-item-img mx-auto me-lg-0 position-relative">
              <img src="assets/images/Basic.jpg" alt="" className="img-fluid" />
              <a href="/About" className="btn btn-lg btn-primary position-absolute choose-template-btn">Select Template</a>
            </div>
          </div>

          <div className="templates-item position-relative col-lg-6">
            <div className="template-item-img mx-auto ms-lg-0 position-relative">
              <img src="assets/images/College.jpg" alt="" className="img-fluid" />
              <a href="/About" className="btn btn-lg btn-primary position-absolute choose-template-btn">Select Template</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
