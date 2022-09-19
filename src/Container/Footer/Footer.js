import React from 'react';

function Footer(props) {
    return (
        <div>
          <div>
  <footer className="footer py-100">
    <div className="container">
      <div className="row">
        <div className="footer-main d-flex">
          <div className="col-6 col-lg-3 logo pe-5">
            <a className="navbar-brand m-0" href="#">
              <img src="assets/images/logo.png" alt="logo" />
            </a>
            <span className="fs-4 text-dark ms-1">ITstuite</span>
            <p className="mt-4">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
          </div>
          <div className="col-3 menu ps-5 d-none d-lg-block">
            <h3 className="fs-4 mt-2">Menu</h3>
            <div className="menu-ul mt-4 pt-2">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 menu d-none d-lg-block">
            <h3 className="fs-4 mt-2">Usefull Links</h3>
            <div className="menu-ul mt-4 pt-2">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Campus Pictures</a>
                </li>
                <li>
                  <a href="#">Tuitions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-3 menu">
            <h3 className="fs-4 mt-2">Contact Us</h3>
            <div className="menu-ul mt-4 pt-2">
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.google.com/maps/@21.2080864,72.9034021,13z"><i className="bi bi-geo-alt me-3" /> Blvd Libertad, 34 m05200 Arévalo</a>
                </li>
                <li>
                  <a href="tel:44 300 303 0266"><i className="bi bi-telephone me-3" />44 300 303 0266</a>
                </li>
                <li>
                  <a href="IT-instituite@itunivercity.com"><i className="bi bi-envelope me-3" />IT-instituite@itunivercity.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="footer-sub py-4">
    <div className="container">
      <div className="row">
        <div className="footer-detail bg-dark text-white d-flex">
          <p className="m-0 col-12 col-md-7">All rights reserved | This template is made by <span>monika panchani</span></p>
          <div className="icon ms-auto d-none d-md-block">
            <a href="https://www.facebook.com/login/" target="_blank"><i className="fab fa-facebook-f" /></a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank"><i className="fab fa-twitter" /></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></a>
            <a href="https://www.linkedin.com/login" target="_blank"><i className="fab fa-linkedin-in" /></a>
            <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a>
            <a href="https://www.skype.com/en/" target="_blank"><i className="fab fa-skype" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Footer;