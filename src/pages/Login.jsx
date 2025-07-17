import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4 d-flex flex-column align-items-center justify-content-center min-vh-100">
        <h1 className="text-center mb-3 fw-bold">Login</h1>
        <hr className="w-25 mx-auto mb-4" />
        <div className="row w-100 justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4 col-12">
            <div className="card shadow-lg border-0 rounded-4 p-4">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="Email" className="mb-1 fw-semibold">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-3 p-3"
                    id="Email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="Password" className="mb-1 fw-semibold">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-3 p-3"
                    id="Password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3 text-center">
                  <p className="mb-0">New here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
                </div>
                <div className="text-center">
                  <button className="btn btn-dark w-100 py-3 rounded-3 fw-bold" type="submit" disabled>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
