import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/product';
import './shop.css';
const Shop = () => {
      const first10 = fakeData.slice(0,10);
      const [products, setProducts] = useState(first10);
      const [cart, setCart] = useState([]);
      const handleAddProduct = (Product) =>{
          console.log("product added",Product);
          const newCart = [...cart, Product];
          setCart(newCart);
      }
    return (
        <div className= "Shop-container">
            <div className="products-container">
                    {
                        products.map(pd=> <Product
                            handleAddProduct ={handleAddProduct} 
                            product={pd}
                            ></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
           
           
        </div>
    );
};

export default Shop;