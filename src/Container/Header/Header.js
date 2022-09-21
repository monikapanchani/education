import React from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../../reduxsaga/action/action";
import Alert from '../../Component/Alert';

function Header(props) {

  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () =>{
    dispatch(LogoutAction())
  }

    return (
        <header>
  <div className="top-bar bg-dark py-3">
    <div className="container">
      <div className="row align-items-center">
        <div className="contact-detail col-12 col-lg-6">
          <ul className="d-flex list-unstyled m-0 justify-content-between justify-content-lg-start">
            <li className="me-4 ">
              <a href="mailto:IT-instituite@itunivercity.com"><i className="bi bi-envelope" />IT-instituite@itunivercity.com</a>
            </li>
            <li>
              <a href="tel:44 300 303 0266"><i className="bi bi-telephone" />44 300 303 0266</a>
            </li>
          </ul>
        </div>
        <div className="social-icon col-12 col-lg-6 d-none d-lg-block">
          <ul className="d-flex list-unstyled my-0">
            <li className="ms-auto">
              <a href="https://www.facebook.com/login/" target="_blank"><i className="fab fa-facebook-f" /></a>
            </li>
            <li>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank"><i className="fab fa-twitter" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/login" target="_blank"><i className="fab fa-linkedin-in" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a>
            </li>
            <li>
              <a href="https://www.skype.com/en/" target="_blank"><i className="fab fa-skype" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navbar-light  align-items-center">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="assets/images/logo.png" alt="logo" />
      </a>
      <span className="fs-4 text-dark">ITstuite</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item px-1">
            <NavLink exact className="nav-link " aria-current="page" to={"/"}>Home</NavLink>
          </li>
          {/* <li className="nav-item px-1 dropdown">
            <NavLink exact className="nav-link dropdown-toggle scrollto " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={"/About"}>About</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item py-2 border-bottom" href="about-univercity.html">Our University</a></li>
                <li><a className="dropdown-item py-2" href="about-team.html">Our Team</a></li>
              </ul>
            </li> */}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="About"
              menuVariant="dark"
            
            >
              <NavDropdown.Item href="AboutTeam">Our Team </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='AboutUnivarcity'>
              Our University
              </NavDropdown.Item>
            </NavDropdown>
          <li className="nav-item px-1">
            <NavLink exact className="nav-link scrollto" to={"/Courses"}>categories</NavLink>

          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Team</a>
          </li> */}
          <li className="nav-item px-1">
            <NavLink exact className="nav-link scrollto" to={"/blog"}>Blog</NavLink>

          </li>
          <li className="nav-item px-1">
            <NavLink exact className="nav-link scrollto" to={"/Contact"}>Contact us</NavLink>
          </li>
          <li className="nav-item login ms-4">
            <a className="nav-link" href="#"><i className="fas fa-search" /></a>
            
          </li>
          <Alert/>
          <li className="nav-item login">
            {/* <NavLink  exact className="nav-link pe-0" scrollto to={"/login"}><i className="far fa-user" /></NavLink> */}

            {
                user.user === null ?
                <NavLink to={"/login"} className="appointment-btn scrollto">
                {" "}
                <span className="d-none d-md-inline">Login/ Signup</span>
              </NavLink> :
               <NavLink to={"/login"} className="appointment-btn scrollto " onClick={()=>handleLogout()}>
               {" "}
               <span className="d-none d-md-inline">Logout</span>
             </NavLink> 


            }
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


    );
}

export default Header;