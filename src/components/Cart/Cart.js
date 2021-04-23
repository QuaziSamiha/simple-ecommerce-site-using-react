import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    // console.log(props.cart);

    const cart = props.cart;

    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    let totalPrice = 0;
    let totalShipping = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    // const tax = Math.round(total / 10);
    // const tax = (totalPrice / 10).toFixed(2);
    const tax = totalPrice / 10;
    const grandTotal = (totalPrice + totalShipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
            <div className="order-heading">
                <h3>Order Summary</h3>
                <p>Items ordered: {cart.length}</p>
            </div>
            <div className="order-detail">
                <div className="info">
                    <small>Items: </small> <br />
                    <small>Shipping: </small> <br />
                    <small>Total before tax: </small> <br />
                    <small>Estimated Tax: </small>
                    <h4>Order Total: </h4>
                </div>
                <div className="value">
                    <small>${formatNumber(totalPrice)}</small> <br /> 
                    <small>${formatNumber(totalShipping)}</small> <br /> 
                    <small>$</small> {formatNumber(totalPrice + totalShipping)}<br /> 
                    <small>${formatNumber(tax)}</small> <br />
                    <h4>${grandTotal}</h4>
                </div>
            </div>
            <button className='review-btn'>Review your order</button>
        </div>
    );
};

export default Cart;