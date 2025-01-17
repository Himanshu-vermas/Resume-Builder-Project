import React from "react";

function Home() 
{
  return (
  
        <section class = "steps py-8">
            <div class="container">
                <div class = "row section-title text-center">
                    <div class = "col-12">
                        <h2 class = "display-6 text-blue fw-bold">Create your perfect Resume with easy steps</h2>
                        <p class = "text-grey fs-4 my-4 mx-auto">Effortlessly make a job-worthy resume and cover letter that gets you hired faster.</p>
                    </div>
                </div>

                <div class = "row steps-list">
                    <div class = "steps-item col-lg-6 col-xl-4 text-center text-md-start my-4 d-md-flex align-items-md-center">
                        <div class = "steps-item-icon text-white bg-light-blue d-flex align-items-center justify-content-center mx-auto ms-md-0 me-md-5 me-lg-4">
                            <i class = "fa-solid fa-layer-group fa-2x"></i>
                        </div>
                        <div class="steps-item-text mt-4">
                            <h3 class = "fs-3 fw-4 text-blue">Choose your CV template</h3>
                            <p class = "text-grey fs-18">Pick a template and color of your choice from a variety of professional templates.</p>
                        </div>
                    </div>

                    <div class = "steps-item col-lg-6 col-xl-4 text-center text-md-start my-4 d-md-flex align-items-md-center">
                        <div class = "steps-item-icon text-white bg-light-blue d-flex align-items-center justify-content-center mx-auto ms-md-0 me-md-5 me-lg-4">
                            <i class = "fa-solid fa-file-lines fa-2x"></i>
                        </div>
                        <div class="steps-item-text mt-4">
                            <h3 class = "fs-3 fw-4 text-blue">Place Your Information</h3>
                            <p class = "text-grey fs-18">Keep track of your CV with the help of live preview.</p>
                        </div>
                    </div>

                    <div class = "steps-item col-lg-6 col-xl-4 text-center text-md-start my-4 d-md-flex align-items-md-center">
                        <div class = "steps-item-icon text-white bg-light-blue d-flex align-items-center justify-content-center mx-auto ms-md-0 me-md-5 me-lg-4">
                            <i class = "fa-solid fa-download fa-2x"></i>
                        </div>
                        <div class="steps-item-text mt-4">
                            <h3 class = "fs-3 fw-4 text-blue">Instantly download your CV</h3>
                            <p class = "text-grey fs-18">Easily download your CV as a PDF and share it via a link.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}
export default Home ;