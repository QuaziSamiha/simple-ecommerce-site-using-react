import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    // console.log(props); // props is an object named product
    // console.log(props.product); // props.product is also an object which has many property
    const { name, img, seller, price, stock, features } = props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <div className='stock-btn-feature'>
                    <div className="btn-stock">
                        <p><small>Only {stock} left in stock - order soon</small></p>
                        <button onClick={() => { props.addProduct(props.product) }}>
                            <FontAwesomeIcon icon={faShoppingCart} />add to cart
                        </button>
                    </div>
                    <div className="features">
                        <h3>Features</h3>
                        <ul>
                            {
                                features.map((f, index) => <li key={index}><small>{f.description} {f.value}</small></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;