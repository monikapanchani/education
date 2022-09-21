import React from 'react';

function Course(props) {
    return (
        <div>
<main>
  {/* slider */}
  <section className="slider-bg">
    <div className="slider-overlay" />
    <div className="slider-caption text-light">
      {/* <h1 class="fw-normal mb-0">About</h1>
      <p class="fs-4">Home - About</p> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active text-white fs-1" aria-current="page">Courses</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">Courses</li>
        </ol>
      </nav>
    </div>
  </section>
  {/* packege */}
  <section className="package py-100">
    <div className="container">
      <div className="row"> 
        <div className="col-12 col-xl-7 text-center text-xl-start pek-detail">
          <h2>Choose The Design Tool You <br />Want To Learn</h2>
          <p className="px-5 px-xl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a href="#" className="btn btn3 px-3 py-2 d-none d-md-inline-block mb-md-5">VIEW ALL COURES</a>
        </div>
        <div className="col-12 col-xl-5 ps-0 ps-lg-5">
          <div className="col-12 d-flex justify-content-evenly">
            <img src="assets/images/pak1.jpg" className="img-fluid m-2" />
            <img src="assets/images/pak2.jpg" className="img-fluid m-2" />
            <img src="assets/images/pak3.jpg" className="img-fluid m-2" />
          </div>
          <div className="d-flex justify-content-evenly">
            <img src="assets/images/pak4.jpg" className="img-fluid m-2" />
            <img src="assets/images/pak5.jpg" className="img-fluid m-2" />
            <img src="assets/images/pak6.jpg" className="img-fluid m-2" />
          </div>
        </div>
        <div className="blog-right-box border mb-4">
            <div className="recent-post-head border-bottom">
              <h4 className="fw-bold pb-2">Categories</h4>
            </div>
            <div className="recent-list">
              <ul className="list-unstyled px-2">
                <li className="py-3 border-bottom">
                  <a href="#" className="text-decoration-none text-dark">Web Design <span> (9)</span></a>
                </li>
                <li className="py-3 border-bottom">
                  <a href="#" className="text-decoration-none text-dark">App Design <span> (3) </span></a>
                </li>
                <li className="py-3 border-bottom">
                  <a href="#" className="text-decoration-none text-dark">Graphic Design <span> (23)</span></a>
                </li>
                <li className="py-3 border-bottom">
                  <a href="#" className="text-decoration-none text-dark">Game Design <span> (5)</span></a>
                </li>
                <li className="py-3 border-bottom">
                  <a href="#" className="text-decoration-none text-dark">UI-UX  Design <span> (7)</span></a>
                </li>
                <li className="py-3 border-bottom">
                  <a href="#" className="text-decoration-none text-dark">Print Design <span> (2)</span></a>
                </li>
                <li className="py-3">
                  <a href="#" className="text-decoration-none text-dark">Logo Design <span> (5)</span></a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </section>
  <section className="courses-page">
    <div className="container">
      <div className="row">
        <div className="col-8 blog-box">
          <div className="blog-left-box position-relative m-4">
            <img src="assets/images/course1.jpg" className="img-fluid w-100" />
          </div>
          <div className="blog-left-box position-relative m-4">
            <div className="course-menu">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active show pb-3" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Objectives</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Eligibility</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Course Outline</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="comments-tab" data-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
                </li>
              </ul>
              <div className="objctive_text">
                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                <p className="m-0 my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 ms-auto ps-4">
          <div className="blog-right-box mb-4">
            <div className="c_details_list">
              <ul className="list-unstyled">
                <li className="bg-light my-2 p-3"><a href="#">Trainer’s Name <span>George Mathews</span></a></li>
                <li className="bg-light my-2 p-3"><a href="#">Course Fee <span>$230</span></a></li>
                <li className="bg-light my-2 p-3"><a href="#">Available Seats <span>15</span></a></li>
                <li className="bg-light my-2 p-3"><a href="#">Schedule <span>2.00 pm to 4.00 pm</span></a></li>
              </ul>
              <span className="readmore"><a className="btn my-5  text-white d-block" href="course.html">Enroll This Course</a></span>
            </div>    
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 blog-box">
          <div className="blog-left-box position-relative m-4">
            <img src="assets/images/course4.jpg" className="img-fluid w-100" />
          </div>
          <div className="blog-left-box position-relative m-4">
            <div className="course-menu">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active show pb-3" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Objectives</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Eligibility</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Course Outline</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="comments-tab" data-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
                </li>
              </ul>
              <div className="objctive_text">
                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                <p className="m-0 my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 ms-auto ps-4">
          <div className="blog-right-box mb-4">
            <div className="c_details_list">
              <ul className="list-unstyled">
                <li className="bg-light my-2 p-3"><a href="#">Trainer’s Name <span>George Mathews</span></a></li>
                <li className="bg-light my-2 p-3"><a href="#">Course Fee <span>$230</span></a></li>
                <li className="bg-light my-2 p-3"><a href="#">Available Seats <span>15</span></a></li>
                <li className="bg-light my-2 p-3"><a href="#">Schedule <span>2.00 pm to 4.00 pm</span></a></li>
              </ul>
              <span className="readmore"><a className="btn my-5  text-white d-block" href="course.html">Enroll This Course</a></span>
            </div>    
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

        </div>
    );
}

export default Course;