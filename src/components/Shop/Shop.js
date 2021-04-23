import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

import fakeData from '../../fakeData';

const Shop = () => {

    // console.log(fakeData);
    const data = fakeData.slice(0,10);
    // console.log(data); // data is an array of objects

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('added');
        // console.log('added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    } 

    return (
        <div className='shop-detail'>
            {/* <h1>this is shop</h1> */}
            <div className="product-container">
                {
                    data.map(prod => 
                    <Product product={prod} addProduct={handleAddProduct}></Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;