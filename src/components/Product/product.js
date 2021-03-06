import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
const product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock - Order Soon....</small></p>
                <button className="main-button"
                onClick ={()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
            
        </div>
    );
};

export default product;