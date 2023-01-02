import React from "react";

const Product = ({name, price,id,addToCartHandler, image}) => {
  return (
    <div className="card m-3" style={{'maxWidth':'18rem'}}>
      <img src={image} className="card-img-top" alt="..." height={'200'} width={'200'} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-text">
          $ {price}
        </h6>
        <button className="btn btn-primary form-control" onClick={() => addToCartHandler({name, price,id,qty:1,image})}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
