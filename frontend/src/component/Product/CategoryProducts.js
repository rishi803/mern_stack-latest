import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategoryProducts } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Home/ProductCard';
import './CategoryProducts.css'; // Import the CSS file

function CategoryProducts() {
    const { products, loading, error } = useSelector((state) => state.categoryProducts);
    const dispatch = useDispatch();
    const { category } = useParams();

    useEffect(() => {
        // Fetch category products when the component mounts
        dispatch(fetchCategoryProducts(category)); // Pass the category you want to fetch
    }, [dispatch, category]);

    return (
        <div>
            <h1>Products in {category}</h1>

            <div className="product-container"> {/* Apply the product container class */}
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card"> {/* Apply the product card class */}
                            <ProductCard product={product} />
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
}

export default CategoryProducts;
