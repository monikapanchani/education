import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home(props) {
    return (
        <div>

            <main>
                {/* slider */}
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="assets/images/slider1.jpg"
                            alt="First slide"
                        />
                        <div className="carousel-overlay" />
                        <div className="carousel-caption">
                            <span>GET STARTED WITH ONLINE COURSES</span>
                            <h1>BEST ONLINE LEARNING SYSTEM</h1>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium</p>
                            <a href="#" className="btn">View All Course</a>
                            <a href="#" className="btn btn2 ms-3">Get Started</a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="assets/images/slider2.jpg"
                            alt="Second slide"
                        />
                        <div className="carousel-overlay" />
                        <div className="carousel-caption">
                            <span>GET STARTED WITH ONLINE COURSES</span>
                            <h1>BEST ONLINE LEARNING SYSTEM</h1>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium</p>
                            <a href="#" className="btn">View All Course</a>
                            <a href="#" className="btn btn2 ms-3">Get Started</a>
                        </div>
                    </Carousel.Item>
                </Carousel>
                {/* service */}
                <section className="service py-100">
                    <div className="container">
                        <div className="row">
                            <div className="service-box col-12 col-lg-6 col-xl-3 text-center text-lg-start mt-5 mt-xl-0 animate__animated animate__fadeInDown">
                                <div className="service-img d-block">
                                    <img src="assets/images/learn.png" className="img-fluid mb-4" />
                                </div>
                                <div className="service-detail pe-0 pe-lg-5 px-5 px-lg-0">
                                    <h3 className="fs-5">Learn From The Experts</h3>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    <a href="#" className="pe-2 fw-bold d-none d-lg-inline-block">read more<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                            <div className="service-box col-12 col-lg-6 col-xl-3 text-center text-lg-start mt-5 mt-xl-0 animate__animated animate__fadeInDown">
                                <div className="service-img d-block">
                                    <img src="assets/images/library.png" className="img-fluid mb-4" />
                                </div>
                                <div className="service-detail pe-0 pe-lg-5 px-5 px-lg-0">
                                    <h3 className="fs-5">Book Library &amp; Store</h3>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    <a href="#" className="pe-2 fw-bold d-none  d-lg-inline-block">read more<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                            <div className="service-box col-12 col-lg-6 col-xl-3 text-center text-lg-start mt-5 mt-xl-0 animate__animated animate__fadeInDown">
                                <div className="service-img d-block">
                                    <img src="assets/images/online.png" className="img-fluid mb-4" />
                                </div>
                                <div className="service-detail pe-0 pe-lg-5 px-5 px-lg-0">
                                    <h3 className="fs-5">Best Course Online</h3>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    <a href="#" className="pe-2 fw-bold d-none  d-lg-inline-block">read more<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                            <div className="service-box col-12 col-lg-6 col-xl-3 text-center text-lg-start mt-5 mt-xl-0 animate__animated animate__fadeInDown">
                                <div className="service-img d-block">
                                    <img src="assets/images/people.png" className="img-fluid mb-4" />
                                </div>
                                <div className="service-detail pe-0 pe-lg-5 px-5 px-lg-0">
                                    <h3 className="fs-5">Best Industry Leaders</h3>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    <a href="#" className="pe-2 fw-bold d-none  d-lg-inline-block">read more<i className="fas fa-long-arrow-alt-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* course */}
                <section className="course py-100">
                    <div className="container">
                        <div className="heading text-center">
                            <h2 className="mb-3">Popular Free Courses</h2>
                            <p className="text-truncate">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.<br />
                                It’s exciting to think about setting up your own viewing station.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-xl-9 col-12 ">
                                <div className="course-img1 mb-4 d-flex animate__animated animate__fadeInDown">
                                    <div className="col-lg-7 col-12 col-md-7 pe-0 pe-lg-3">
                                        <img src="assets/images/course1.jpg" className="img-fluid w-100" />
                                        <div className="course-detail px-4">
                                            <span className="free text-dark fw-bold rounded px-3 py-1 mb-3 d-inline-block">free</span>
                                            <a href="#" className="text-decoration-none">
                                                <h4 className="fs-5 text-white hover-text">The Complete Android Developer Course</h4>
                                            </a>
                                            <ul className="list list-unstyled d-flex">
                                                <li className="me-4"><i className="bi bi-people me-2" /> 355</li>
                                                <li className="me-4"><i className="bi bi-chat me-2" /> 35</li>
                                                <li className="me-4"><i className="bi bi-person me-2" /> T. Robert</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 ps-3 d-none d-md-block">
                                        <img src="assets/images/course2.jpg" className="img-fluid w-100" />
                                        <div className="course-detail px-4">
                                            <span className="free text-dark fw-bold rounded px-3 py-1 mb-3 d-inline-block">free</span>
                                            <a href="#" className="text-decoration-none">
                                                <h4 className="fs-5 text-white hover-text">Corel - Fashion Deisgn</h4>
                                            </a>
                                            <ul className="list list-unstyled d-flex">
                                                <li className="me-4"><i className="bi bi-people me-2" /> 355</li>
                                                <li className="me-4"><i className="bi bi-chat me-2" /> 35</li>
                                                <li className="me-4"><i className="bi bi-person me-2" /> T. Robert</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-img1 d-flex animate__animated animate__fadeInUp">
                                    <div className="col-lg-5 col-md-5 mt-2 pe-3 d-none d-md-block">
                                        <img src="assets/images/course3.jpg" className="img-fluid w-100" />
                                        <div className="course-detail px-4">
                                            <span className="free text-dark fw-bold rounded px-3 py-1 mb-3 d-inline-block">free</span>
                                            <a href="#" className="text-decoration-none">
                                                <h4 className="fs-5 text-white hover-text">Photoshop - Web Deisgn</h4>
                                            </a>
                                            <ul className="list list-unstyled d-flex">
                                                <li className="me-4"><i className="bi bi-people me-2" /> 355</li>
                                                <li className="me-4"><i className="bi bi-chat me-2" /> 35</li>
                                                <li className="me-4"><i className="bi bi-person me-2" /> T. Robert</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-12 col-md-7 mt-2  ps-0 ps-lg-3">
                                        <img src="assets/images/course4.jpg" className="img-fluid w-100" />
                                        <div className="course-detail px-4">
                                            <span className="free text-dark fw-bold rounded px-3 py-1 mb-3 d-inline-block">free</span>
                                            <a href="#" className="text-decoration-none">
                                                <h4 className="fs-5 text-white hover-text">Learn Photoshop, Web Design &amp; Profitable</h4>
                                            </a>
                                            <ul className="list list-unstyled d-flex">
                                                <li className="me-4"><i className="bi bi-people me-2" /> 355</li>
                                                <li className="me-4"><i className="bi bi-chat me-2" /> 35</li>
                                                <li className="me-4"><i className="bi bi-person me-2" /> T. Robert</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 course-img2 px-3 d-none d-xl-block animate__animated animate__fadeInRight">
                                <img src="assets/images/course5.jpg" className="img-fluid w-100" />
                                <div className="course-detail px-4">
                                    <span className="free text-dark fw-bold rounded px-3 py-1 mb-3 d-inline-block">free</span>
                                    <a href="#" className="text-decoration-none">
                                        <h4 className="fs-5 text-white hover-text">Sketch - Mobile App</h4>
                                    </a>
                                    <ul className="list list-unstyled d-flex">
                                        <li className="me-4"><i className="bi bi-people me-2" /> 355</li>
                                        <li className="me-4"><i className="bi bi-chat me-2" /> 35</li>
                                        <li className="me-4"><i className="bi bi-person me-2" /> T. Robert</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* meet faculty */}
                <section className="faculty py-100">
                    <div className="container">
                        <div className="heading text-center">
                            <h2 className="mb-3">Meet Our Faculty</h2>
                            <p className="text-truncate">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.<br />
                                It's exciting to think about setting up your own viewing station.</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-xl-4 col-xxl-3 text-center mb-5 mb-xl-0 ms-5 ms-md-0">
                                <div className="flip-card ms-5 ms-md-0">
                                    <div className="flip-card-inner ms-4 ms-md-0">
                                        <div className="flip-card-front">
                                            <img src="assets/images/f1.jpg" alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back ">
                                            <h2>Ethel Davis</h2>
                                            <p>Graphic Designer</p>
                                            <div className="f-icon my-4">
                                                <ul className="list-unstyled d-flex">
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-facebook-f" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin-in" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-youtube" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4 col-xxl-3 text-center mb-5 mb-xl-0 ms-5 ms-md-0">
                                <div className="flip-card ms-5 ms-md-0">
                                    <div className="flip-card-inner ms-4 ms-md-0">
                                        <div className="flip-card-front">
                                            <img src="assets/images/f2.jpg" alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back ">
                                            <h2>Leonardo Bonucci</h2>
                                            <p>Graphic Designer</p>
                                            <div className="f-icon my-4">
                                                <ul className="list-unstyled d-flex">
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-facebook-f" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin-in" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-youtube" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4 col-xxl-3 text-center mb-5 mb-xl-0 ms-5 ms-md-0">
                                <div className="flip-card ms-5 ms-md-0">
                                    <div className="flip-card-inner ms-4 ms-md-0">
                                        <div className="flip-card-front">
                                            <img src="assets/images/f3.jpg" alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back ">
                                            <h2>Rebec Adams</h2>
                                            <p>Graphic Designer</p>
                                            <div className="f-icon my-4">
                                                <ul className="list-unstyled d-flex">
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-facebook-f" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin-in" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-youtube" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 text-center mb-5 mb-xl-0 d-xl-none d-xxl-block ms-5 ms-md-0">
                                <div className="flip-card ms-5 ms-md-0">
                                    <div className="flip-card-inner ms-4 ms-md-0">
                                        <div className="flip-card-front">
                                            <img src="assets/images/f4.jpg" alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back ">
                                            <h2>Sarah Johnson</h2>
                                            <p>Graphic Designer</p>
                                            <div className="f-icon my-4">
                                                <ul className="list-unstyled d-flex">
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-facebook-f" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin-in" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-youtube" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial */}
                <section className="testimonial py-100">
                    <div className="container">
                        <div className="row">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="col-12 text-center">
                                        <div className="t-img text-center">
                                            <img src="assets/images/f1.jpg" className="img-fluid " />
                                        </div>
                                        <div className="t-detail text-center">
                                            <h4>Fannie Rowe</h4>
                                            <div className="star mb-3 d-inline-block">
                                                <ul className="list-unstyled d-flex">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                            </div>
                                            <p className="text-truncate">Accessories Here you can find the best computer accessory for your laptop, monitor, printer,
                                                scanner, speaker. Here you<br /> can find the best computer accessory for your laptop, monitor,
                                                printer, scanner, speaker.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="col-12 text-center">
                                        <div className="t-img text-center">
                                            <img src="assets/images/f2.jpg" className="img-fluid " />
                                        </div>
                                        <div className="t-detail text-center">
                                            <h4>Fannie Rowe</h4>
                                            <div className="star mb-3 d-inline-block">
                                                <ul className="list-unstyled d-flex">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                            </div>
                                            <p className="text-truncate">Accessories Here you can find the best computer accessory for your laptop, monitor, printer,
                                                scanner, speaker. Here you<br /> can find the best computer accessory for your laptop, monitor,
                                                printer, scanner, speaker.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="col-12 text-center">
                                        <div className="t-img text-center">
                                            <img src="assets/images/f3.jpg" className="img-fluid " />
                                        </div>
                                        <div className="t-detail text-center">
                                            <h4>Fannie Rowe</h4>
                                            <div className="star mb-3 d-inline-block">
                                                <ul className="list-unstyled d-flex">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                            </div>
                                            <p className="text-truncate">Accessories Here you can find the best computer accessory for your laptop, monitor, printer,
                                                scanner, speaker. Here you<br /> can find the best computer accessory for your laptop, monitor,
                                                printer, scanner, speaker.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* packege */}
                <section className="package py-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-7 text-center text-xl-start pek-detail animate__animated animate__lightSpeedInLeft">
                                <h2>Choose The Design Tool You <br />Want To Learn</h2>
                                <p className="px-5 px-xl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <a href="#" className="btn btn3 px-3 py-2 d-none d-md-inline-block mb-md-5">VIEW ALL COURES</a>
                            </div>
                            <div className="col-12 col-xl-5 ps-0 ps-lg-5 animate__animated animate__lightSpeedInRight">
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
                        </div>
                    </div>
                </section>
                {/* Industry */}
                <section className="industry">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 d-flex">
                                <img src="assets/images/i1.jpg" className="img-fluid" />
                            </div>
                            <div className="col-2 d-flex">
                                <img src="assets/images/i2.jpg" className="img-fluid" />
                            </div>
                            <div className="col-2 d-flex">
                                <img src="assets/images/i3.jpg" className="img-fluid" />
                            </div>
                            <div className="col-2 d-flex">
                                <img src="assets/images/i4.jpg" className="img-fluid" />
                            </div>
                            <div className="col-2 d-flex">
                                <img src="assets/images/i5.jpg" className="img-fluid" />
                            </div>
                            <div className="col-2 d-flex">
                                <img src="assets/images/i6.jpg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* event */}
                <section className="event py-100">
                    <div className="container">
                        <div className="heading text-center">
                            <h2 className="mb-3">Upcoming Event</h2>
                            <p className="text-truncate">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.<br />
                                It's exciting to think about setting up your own viewing station.</p>
                        </div>
                        <div className="row">
                            <div className="col-2 px-0 px-xl-4 px-lg-3 py-5 justify-content-center align-items-center">
                                <div className="event-date px-3 py-4 text-center">
                                    <h2>07</h2>
                                    <span>January</span>
                                </div>
                            </div>
                            <div className="col-10 col-lg-6 event-detail px-4 py-5">
                                <h3 className="mb-1">
                                    <a href="#" className="fs-4 text-decoration-none">Student Festival</a>
                                </h3>
                                <span className=" mb-3 d-block">Grand Central Park</span>
                                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                            </div>
                            <div className="event-img col-12 col-lg-4 p-0 p-lg-4 mb-5 mb-lg-0">
                                <img src="assets/images/event1.jpg" className="img-fluid" />
                            </div>
                            <div className="col-2 px-0 px-xl-4 px-lg-3 py-5 justify-content-center align-items-center">
                                <div className="event-date px-3 py-4 text-center">
                                    <h2>15</h2>
                                    <span>february</span>
                                </div>
                            </div>
                            <div className="col-10 col-lg-6 event-detail px-4 py-5">
                                <h3 className="mb-1">
                                    <a href="#" className="fs-4 text-decoration-none">Open day in the Univesrsity campus</a>
                                </h3>
                                <span className=" mb-3 d-block">Grand Central Park</span>
                                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                            </div>
                            <div className="event-img col-12 col-lg-4 p-0 p-lg-4 mb-5 mb-lg-0">
                                <img src="assets/images/event2.jpg" className="img-fluid" />
                            </div>
                            <div className="col-2 px-0 px-xl-4 px-lg-3 py-5 justify-content-center align-items-center">
                                <div className="event-date px-3 py-4 text-center">
                                    <h2>11</h2>
                                    <span>october</span>
                                </div>
                            </div>
                            <div className="col-10 col-lg-6 event-detail px-4 py-5">
                                <h3 className="mb-1">
                                    <a href="#" className="fs-4 text-decoration-none">Student Graduation Ceremony</a>
                                </h3>
                                <span className=" mb-3 d-block">Grand Central Park</span>
                                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                            </div>
                            <div className="event-img col-12 col-lg-4 p-0 p-lg-4 mb-5 mb-lg-0">
                                <img src="assets/images/event3.jpg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* news */}
                <section className="news">
                    <div className="container">
                        <div className="row">
                            <div className="news-bg">
                                <div className="news-detail mt-5">
                                    <div className="heading text-center">
                                        <h2 className="mb-3">NEWSLETTER</h2>
                                        <p className="text-truncate d-none d-lg-block">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.<br />
                                            It's exciting to think about setting up your own viewing station.</p>
                                    </div>
                                    <div className="subcribe">
                                        <input type="text" id="subscribe-email" name="subscribe-email" placeholder="Your Email Here" className="email py-2 px-3" />
                                        <button type="button" id="subscribe-button" className="subscribe-button py-2 px-4 text-white m-0" title="Subscribe now"> SUBSCRIBE </button>
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

export default Home;