import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Banner from "./Banner";


const categories = [
  "Electronics",
  "Appliances",
  "Beauty, Toys & More",
  "Fashion",
  "Home and Furniture",
  "Grocery",
  "SmartPhones",
];


const Home = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);
  const categoryImages = [
    "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",


  ];


  return (


    <Fragment>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ARF-MART" />

            <div class="container-flex">
              <div className="filterBox-f">
                <ul className="categoryBox-f">
                  {categories.map((category, index) => (
                    <li
                      className="category-card"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      <div className="category-image">
                        <img
                          src={categoryImages[index]}
                          alt={category}
                          className="category-img"
                        />
                      </div>
                      <span className="category-text">{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

            <Banner />

            <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
