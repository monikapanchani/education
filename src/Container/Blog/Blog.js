import React from 'react';

function Blog(props) {
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
          <li className="breadcrumb-item active text-white fs-1" aria-current="page">Blog</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">Blog</li>
        </ol>
      </nav>
    </div>
  </section>
  {/* blog part */}
  <section className="about-part bg-light py-100">
    <div className="container">
      <div className="row">
        <div className="col-8 blog-box p-0">
          <div className="blog-left-box position-relative mb-5">
            <div className="blog-part-img">                                        
              <img src="assets/images/blog-left1.jpg" className="img-fluid w-100" />  
            </div>
            <div className="blog-box-detail py-5">
              <div className="blog-lebal d-flex">
                <div className="col-1 blog-date border text-center py-2 px-2 me-4">
                  <h3 className="m-0">18</h3>
                  <span>DEC</span>
                </div>
                <div className="blog-main">
                  <h2>Why do you need a qualification?</h2>
                  <p className="m-1"> 
                    By Christian Smith <span className="mx-3">|</span>3 Comments
                  </p>
                </div>
              </div>
              <p className="m-0 blog-p mt-4">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies.</p>
              <a href="#" className="btn btn2 px-3 py-2 mt-5 d-none d-md-inline-block">VIEW ALL COURES</a>
            </div>
          </div>
          <div className="blog-left-box position-relative mb-5">
            <div className="blog-part-img">                                        
              <img src="assets/images/blog-left2.jpg" className="img-fluid w-100" />  
            </div>
            <div className="blog-box-detail py-5">
              <div className="blog-lebal d-flex">
                <div className="col-1 blog-date border text-center py-2 px-2 me-4">
                  <h3 className="m-0">18</h3>
                  <span>DEC</span>
                </div>
                <div className="blog-main">
                  <h2>Why do you need a qualification?</h2>
                  <p className="m-1"> 
                    By Christian Smith <span className="mx-3">|</span>3 Comments
                  </p>
                </div>
              </div>
              <p className="m-0 blog-p mt-4">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies.</p>
              <a href="#" className="btn btn2 px-3 py-2 mt-5 d-none d-md-inline-block">VIEW ALL COURES</a>
            </div>
          </div>
          <div className="blog-left-box position-relative mb-5">
            <div className="blog-part-img">                                        
              <img src="assets/images/blog-left3.jpg" className="img-fluid w-100" />  
            </div>
            <div className="blog-box-detail py-5">
              <div className="blog-lebal d-flex">
                <div className="col-1 blog-date border text-center py-2 px-2 me-4">
                  <h3 className="m-0">18</h3>
                  <span>DEC</span>
                </div>
                <div className="blog-main">
                  <h2>Why do you need a qualification?</h2>
                  <p className="m-1"> 
                    By Christian Smith <span className="mx-3">|</span>3 Comments
                  </p>
                </div>
              </div>
              <p className="m-0 blog-p mt-4">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent finibus risus facilisis ultricies.</p>
              <a href="#" className="btn btn2 px-3 py-2 mt-5 d-none d-md-inline-block">VIEW ALL COURES</a>
            </div>
          </div>
        </div>
        <div className="col-4 ms-auto ps-4">
          <div className="border blog-right-box py-5 mb-4">
            <div className="input-group">
              <input type="text" className="form-control fw-bold slider-form" placeholder="Search.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button type="submit" className="btn btn-primary slider-form-btn px-4"><i className="fas fa-search text-white" /></button>
            </div>
          </div>
          <div className="blog-right-box border mb-4">
            <div className="recent-post-head border-bottom">
              <h4 className="fw-bold pb-2">Recent Posts</h4>
            </div>
            <div className="recent-list">
              <ul className="list-unstyled">
                <li className="col-12 d-flex py-3 border-bottom">
                  <a href="#">
                    <img src="assets/images/blog-right1.jpg" className="img-fluid me-3" />
                  </a>
                  <div className="list-detail px-3">
                    <a href="#" className="text-dark text-decoration-none fw-bold">Find the Right Learning Path for your</a>
                    <p className="mt-1"> April 13, 2020</p>
                  </div>
                </li>
                <li className="col-12 d-flex py-3 border-bottom">
                  <a href="#">
                    <img src="assets/images/blog-right2.jpg" className="img-fluid me-3" />
                  </a>
                  <div className="list-detail px-3">
                    <a href="#" className="text-dark text-decoration-none fw-bold">Learn by doing with Real World Projects</a>
                    <p className="mt-1">February 13, 2020</p>
                  </div>
                </li>
                <li className="col-12 d-flex py-3">
                  <a href="#">
                    <img src="assets/images/blog-right3.jpg" className="img-fluid me-3" />
                  </a>
                  <div className="list-detail px-3">
                    <a href="#" className="text-dark text-decoration-none fw-bold">Strategic Social Media &amp; evolution of visual </a>
                    <p className="mt-1"> January 12, 2020</p>
                  </div>
                </li>
              </ul>
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
          <div className="blog-right-box border mb-4">
            <div className="recent-post-head border-bottom">
              <h4 className="fw-bold pb-2">Archives</h4>
            </div>
            <div className="recent-list">
              <ul className="list-unstyled px-2">
                <li className="py-3 border-bottom">
                  <a href="#" className="text-decoration-none text-dark">April 2020</a>
                </li>
                <li className="py-3">
                  <a href="#" className="text-decoration-none text-dark">February 2020</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-right-box border mb-4">
            <div className="recent-post-head border p-4" />
            <span className="readmore"><a className="btn my-5  text-white" href="blog.html">Enroll This Course</a></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

        </div>
    );
}

export default Blog;