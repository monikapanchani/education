import React from 'react';

function Contact(props) {
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
          <li className="breadcrumb-item active text-white fs-1" aria-current="page">Contact Us</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">Contact Us</li>
        </ol>
      </nav>
    </div>
  </section>
  {/* location */}
  <section className="py-100">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 location">
          <div className="text-center">
            <div className="t-img text-center">
              <img src="assets/images/contact1.png" className="img-fluid " />
            </div>
            <div className="t-detail text-center">
              <h5 className="mb-3">Our Location</h5>
              <p className="m-0">350 Fifth Avenue, 34th floor New York
                NY 10118-3299 USA</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 location">
          <div className="col-12 text-center">
            <div className="t-img text-center">
              <img src="assets/images/contact2.png" className="img-fluid " />
            </div>
            <div className="t-detail text-center">
              <h5 className="mb-3">Contact us Anytime</h5>
              <p className="m-0">Mobile: (+1) 800 555 888</p>
              <p className="m-0">Fax: (+1) 800 666 999</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 location">
          <div className="col-12 text-center">
            <div className="t-img text-center">
              <img src="assets/images/contact3.png" className="img-fluid" />
            </div>
            <div className="t-detail text-center">
              <h5 className="mb-3">Write Some Words</h5>
              <p className="m-0">Support24/7@domain.com</p>
              <p className="m-0">Info@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* form */}
  <section className="py-100 contect-form">
    <div className="container">
      <div className="row">
        <div className="col-12 form-model p-5">
          <form>
            <h3 className="fw-bold mb-5">Leave Us A Message</h3>
            <div className="d-flex">
              <div className="col-6 me-3">
                <input type="text" className="form-control p-2" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control p-2" placeholder="Last name" aria-label="Last name" />
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <input type="email" className="form-control p-2" placeholder="Email" id="inputEmail4" />
            </div>
            <div className="mb-3 mt-4">
              <textarea className="form-control p-2" placeholder="Comment or Message" id="exampleFormControlTextarea1" rows={9} defaultValue={""} />
            </div>
            <div className="sub-btn">
              <button type="submit" className="btn form-btn mt-3 text-white">SEND YOUR MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* map */}
  <section className="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.63727541058!2d72.68220805203599!3d21.159462704479317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1641207840626!5m2!1sen!2sin" className="w-100" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
  </section>
</main>

        </div>
    );
}

export default Contact;