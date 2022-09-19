import React from 'react';

function AboutUnivarcity(props) {
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
          <li className="breadcrumb-item active text-white fs-1" aria-current="page">About</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </section>
  {/* about */}
  <section className="py-100">
    <div className="container">
      <div className="row">
        <div className="a-detail col-12 col-lg-6 py-5 pe-5">
          <h2 className="fs-2 fw-bold mb-4">Welcome to ITstuit!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.</p>
          <p className="d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus voluptates dignissimos repudiandae minus tenetur autem dolor deserunt. Praesentium quaerat eius ad ut corrupti veritatis, odio quisquam eligendi consequatur quod provident aliquid et incidunt vel!</p>
          <div className="a-list p-3">
            <ul>
              <li className="p-1">2 Glossaries for difficult terms &amp; acronyms</li>
              <li className="p-1">25 hours of High Quality e-Learning content</li>
              <li className="p-1">72 end of chapter quizzes</li>
              <li className="p-1">30 PDUs Offered</li>
              <li className="p-1">Collection of 47 six sigma tools for hands-on practice</li>
            </ul>
          </div>
        </div>   
        <div className="col-12 col-lg-6 py-3 video-part text-center">
          <a href="iframe" width=" 560" height={315} src="https://www.youtube.com/embed/KnNbplCBCfY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            <img src="assets/images/about.jpg" className="img-fluid video-img" />
            <div className="video text-center">
              <i className="bi bi-play-circle-fill" />
            </div>
          </a>
        </div>
      </div>      
    </div>
  </section>
  {/* counter */}
  <section className="wow fadeIn animated counter-bg" style={{visibility: 'visible', animationName: 'fadeIn'}}>         
    <div className="container ms-auto mb-5 justify-content-center">
      <div className="row">
        {/* counter */}
        <div className="slider-overlay" />
        <div className="counter-detail d-flex">
          <div className="col-md-3 col-sm-6 px-5 bottom-margin text-left counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms" style={{visibility: 'visible', animationDuration: '300ms', animationName: 'fadeInUp'}}> <span id="anim-number-pizza" className="counter-number" /> <span className="timer counter alt-font appear" data-to={980} data-speed={7000}>50
            </span>
            <p className="counter-title">Graduate Students</p>
            <p className="text-white c-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</p>
          </div> 
          {/* end counter */}
          {/* counter */}
          <div className="col-md-3 col-sm-6 px-5 bottom-margin text-left counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="600ms" style={{visibility: 'visible', animationDuration: '600ms', animationName: 'fadeInUp'}}> <span className="timer counter alt-font appear" data-to={980} data-speed={7000}>10</span> <p className="counter-title">Academic Programs</p>
            <p className="text-white c-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</p>
          </div> {/* end counter */}
          {/* counter */}
          <div className="col-md-3 col-sm-6 px-5 bottom-margin-small text-left counter-section wow fadeInUp xs-margin-bottom-ten animated" data-wow-duration="900ms" style={{visibility: 'visible', animationDuration: '900ms', animationName: 'fadeInUp'}}>  <span className="timer counter alt-font appear" data-to={810} data-speed={7000}>200</span> <p className="counter-title">University faculties</p>
            <p className="text-white c-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</p>
          </div> {/* end counter */}
          {/* counter */}
          <div className=" col-md-3 col-sm-6 px-5 text-left counter-section wow fadeInUp animated" data-wow-duration="1200ms" style={{visibility: 'visible', animationDuration: '1200ms', animationName: 'fadeInUp'}}> <span className="timer counter alt-font appear" data-to={600} data-speed={7000}>700</span> <p className="counter-title">Total Students</p> 
            <p className="text-white c-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</p>
          </div> {/* end counter */}
        </div>
      </div>
    </div>
  </section>
  {/* faq */}
  <section className="py-100">
    <div className="container">
      <div className="heading text-center">
        <h2 className="mb-3">FAQ &amp; CERTIFICATS</h2>
        <p className="text-truncate">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.<br />
          It’s exciting to think about setting up your own viewing station.</p>
      </div>
      <div className="row">
        <div className="col-12 col-xl-6 accordion " id="accordionExample">
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Why Our Clinic?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita laboriosam doloribus. Ducimus soluta reiciendis tempore et eum quam ipsum! Non libero quaerat qui quidem veniam obcaecati dolorum dignissimos aut.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3 border-top">
            <h2 className="accordion-header fs-1" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Qualified Experts
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita laboriosam doloribus. Ducimus soluta reiciendis tempore et eum quam ipsum! Non libero quaerat qui quidem veniam obcaecati dolorum dignissimos aut.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3 border-top">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Quick Access to The Patient
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita laboriosam doloribus. Ducimus soluta reiciendis tempore et eum quam ipsum! Non libero quaerat qui quidem veniam obcaecati dolorum dignissimos aut.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3 border-top">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                How can an architect save you money on your home design?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita laboriosam doloribus. Ducimus soluta reiciendis tempore et eum quam ipsum! Non libero quaerat qui quidem veniam obcaecati dolorum dignissimos aut.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="owl-carousel owl-theme d-flex">
            <div className="item d-flex">
              <img src="assets/images/Certi.jpg" className="p-4" />
              <img src="assets/images/Certi.jpg" className="p-4" />
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
</main>
 
        </div>
    );
}

export default AboutUnivarcity;