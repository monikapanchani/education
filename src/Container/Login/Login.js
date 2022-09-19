import React from 'react';

function Login(props) {
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
                                <li className="breadcrumb-item active text-white fs-1" aria-current="page">Login</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                                <li className="breadcrumb-item active text-white" aria-current="page">Login</li>
                            </ol>
                        </nav>
                    </div>
                </section>
                {/* login */}
                <section className="login-page py-100">
                    <div className="container">
                        <div className="row">
                            <div className="log-part p-5 d-lg-flex ">
                                <div className="col-12 col-lg-6 ms-0 ms-xl-5 py-100 border-end">
                                    <h4 className="mb-5">Log in with social media</h4>
                                    <div className="log-social ps-5 d-flex">
                                        <ul className="list-unstyled me-5">
                                            <li>
                                                <a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fab fa-facebook-f me-4 mb-3" />Login with Facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fab fa-google me-3 mb-3" />Login with Facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fab fa-linkedin-in me-3 mb-3" />Login with Facebook</a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/login/" className="text-decoration-none"><i className="fab fa-twitter me-3 mb-3" />Login with Facebook</a>
                                            </li>
                                        </ul>
                                        <div className="col-1 py-5 ms-5">
                                            <h4 className="ms-5">or</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 account ms-5">
                                    <h4>Log in with account</h4>
                                    <p>Not a member yet?<a href="sign-up.html" className="ms-2">Sign up Free</a></p>
                                    <form className="w-75 my-5 form">
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Username or email *</label>
                                            <input type="email" className="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email or Username" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control py-3" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="mb-4 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <button type="submit" className="col-12 btn btn-primary px-5 py-2">Login<i aria-hidden="true" className="fas fa-arrow-right ps-2" /></button>
                                        <p className="pass my-4">
                                            <a href="password.html" className="text-decoration-none">Lost your password?</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Login;