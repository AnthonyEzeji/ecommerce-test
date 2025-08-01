import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4 d-flex flex-column align-items-center justify-content-center min-vh-100">
        <h1 className="text-center mb-3 fw-bold">About Us</h1>
        <hr className="w-25 mx-auto mb-4" />
        <div className="row w-100 justify-content-center mb-4">
          <div className="col-lg-10 col-xl-8 col-12">
            <div className="card shadow-sm border-0 rounded-4 p-4 mb-4">
              <p className="lead text-center mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                facere doloremque veritatis odit similique sequi. Odit amet fuga nam
                quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
                totam vero quas provident ipsam, veritatis nostrum velit quos
                recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
                earum unde eligendi autem praesentium, doloremque distinctio nesciunt
                porro tempore quis eaque labore voluptatibus ea necessitatibus
                exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
                tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
                quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
                delectus expedita a alias nam recusandae illo debitis repellat libero,
                quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
                dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-center py-4 fw-bold">Our Products</h2>
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top img-fluid rounded-top-4" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center fw-semibold">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top img-fluid rounded-top-4" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center fw-semibold">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top img-fluid rounded-top-4" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center fw-semibold">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 px-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top img-fluid rounded-top-4" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center fw-semibold">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage