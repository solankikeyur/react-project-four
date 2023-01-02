import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart, calculatePrice } from "../redux/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const totalProducts = 100;
  const limit = 10;
  const lastPage = totalProducts / limit;
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    toast.success("Added to cart");
    dispatch(addToCart(product));
    dispatch(calculatePrice());
  };

  const nextPage = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const getAllProducts = () => {
      setIsLoading(true);
      let skip = (page - 1) * limit;
      const PRODDUCT_URL = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      axios
        .get(PRODDUCT_URL)
        .then(({ data }) => {
          setProducts(data.products);

        })
        .catch((error) => {
          console.log(error);
        });
        setIsLoading(false);
    };
    getAllProducts();
  }, [page]);

  if(products.length === 0) {
    return (
      <div className="container">
        <div className="container mt-4"><h2>Loading...</h2></div>
      </div>
    )
  }

  return (
    <>
      {isLoading ? (
        <div className="container">
          <div className="container mt-4"><h2>Loading...</h2></div>
        </div>
      ) : (
        <div className="container">
          <div className="container mt-4">
            <div className="row">
              {products.map((product) => (
                <div className="col-md-6 col-12 col-lg-3" key={product.id}>
                  <Product
                    name={product.title}
                    price={product.price}
                    id={product.id}
                    addToCartHandler={addToCartHandler}
                    image={product.thumbnail}
                  ></Product>
                </div>
              ))}
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-between">
                      <li className="page-item">
                        <button
                          className={`page-link ${
                            page === 1 ? "disabled" : ""
                          }`}
                          onClick={() => prevPage()}
                        >
                          Previous
                        </button>
                      </li>
                      <li className="page-item">
                        <button
                          className={`page-link ${
                            page === lastPage ? "disabled" : ""
                          }`}
                          onClick={() => nextPage()}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
