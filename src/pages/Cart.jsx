import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const CartItem = ({ item, onAdd, onRemove }) => (
  <div className="cart-item-card p-3 mb-4 bg-white rounded-3 shadow-sm d-flex align-items-center">
    <div className="me-3 flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: 110, height: 90, background: '#f8fafc', borderRadius: '12px' }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ maxWidth: 90, maxHeight: 70, objectFit: 'contain' }}
      />
    </div>
    <div className="flex-grow-1">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-bold fs-6 text-dark" style={{ maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</span>
        <span className="fw-bold text-black-50">${Number(item.price).toFixed(2)}</span>
      </div>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-dark btn-sm px-2 py-1" onClick={() => onRemove(item)}>
          <i className="fas fa-minus"></i>
        </button>
        <span className="mx-2 fw-semibold fs-6">{item.qty}</span>
        <button className="btn btn-outline-dark btn-sm px-2 py-1" onClick={() => onAdd(item)}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
);

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5"> Your Cart is Empty </h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });
    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onAdd={addItem}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
