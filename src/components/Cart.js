import React from "react";
import { MdRemoveCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, calculatePrice } from "../redux/cartSlice";

const Cart = () => {
  const { items: products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeCartItem = (id) => {
    dispatch(removeItem(id));
    dispatch(calculatePrice());
  }
  return (
    <div className="container px-3 my-5">
      <div className="card">
        <div className="card-header">
          <h2>Shopping Cart</h2>
        </div>
        {products.length > 0 ? (
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    <th
                      className="text-center py-3 px-4"
                      style={{ minWidth: "300px" }}
                    >
                      Product Name &amp; Details
                    </th>
                    <th
                      className="text-right py-3 px-4"
                      style={{ width: "100px" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-center py-3 px-4"
                      style={{ width: "120px" }}
                    >
                      Quantity
                    </th>
                    <th
                      className="text-right py-3 px-4"
                      style={{ width: "100px" }}
                    >
                      Total
                    </th>
                    <th
                      className="text-center align-middle py-3 px-0"
                      style={{ width: "70px" }}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <CartItem id={product.id} name={product.name} qty={product.qty} price={product.price} image={product.image} removeCartItem={removeCartItem}></CartItem>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
              <div className="d-flex">
                <div className="text-right mt-4">
                  <label className="text-muted font-weight-normal m-0">
                    Total price
                  </label>
                  <div className="text-large">
                    <strong>$ {total}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button type="button" className="btn btn-default btn-secondary">
                Back to shopping
              </button>
              <button type="button" className="btn btn-primary m-2">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="card-body">
            <div className="table-responsive">
              <table className="table m-0">
                <thead>
                  <tr>
                    <td>
                      <h5>No products found.</h5>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CartItem = ({ name, image, price, qty , id, removeCartItem}) => {
  return (
    <>
      <td className="p-4">
        <div className="media align-items-center">
          <img
            src={image}
            className="d-block ui-w-40 ui-bordered mr-4"
            alt={name}
            width={"100"}
            height={"100"}
          />
          <div className="media-body">
            <span className="d-block text-dark">{name}</span>
          </div>
        </div>
      </td>
      <td className="text-right font-weight-semibold align-middle p-4">
        $ {price}
      </td>
      <td className="align-middle p-4">
        <span className="d-block text-dark">{qty}</span>
      </td>
      <td className="text-right font-weight-semibold align-middle p-4">
        $ {price * qty}
      </td>
      <td className="text-center align-middle px-0">
        <button
          className="btn btn-outline bg-danger text-white"
          title=""
          data-original-title="Remove"
          onClick={() => removeCartItem(id)}
        >
          <MdRemoveCircle></MdRemoveCircle>
        </button>
      </td>
    </>
  );
};

export default Cart;
