import axios from 'axios';
import { useEffect,useState } from 'react';
import { Header } from '../components/Header';
import Checkmark from '../assets/images/icons/checkmark.png';

import './HomePage.css'


export function HomePage(){

    // setup useState to store that fetching data as a products and setProducts use to set that data to store in products..
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    // useEffect is used to stop request send more to in refresh after page it control it and any changes in that then it request.
    useEffect(()=>{
            // we used axios to fetch data then we can assign data to response then we can get it like this.
        axios.get('http://localhost:3000/api/products')
            .then((Response)=>{
                setProducts(Response.data);
            });
        
        axios.get('http://localhost:3000/api/cart-items')
            .then((response)=>{
                setCart(response.data);
            })
    },[])
    // that [] empty array can find that changes is that array is empty request send one and not request again if any change in that backend then catch it this empty array then re-send request.
    return(
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                <div className="products-grid">

                    {products.map((product)=>{
                        return(
                            <div key={product.id} className="product-container">
                                <div className="product-image-container">
                                <img className="product-image" src={product.image} />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    {product.name}
                                </div>

                                <div className="product-rating-container">
                                <img className="product-rating-stars" src={`images/ratings/rating-${(product.rating.stars)*10}.png`} />
                                <div className="product-rating-count link-primary">
                                    {product.rating.count}
                                </div>
                                </div>

                                <div className="product-price">
                                    ${(product.priceCents/100).toFixed(2)}
                                </div>

                                <div className="product-quantity-container">
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                <img src={Checkmark} />
                                Added
                                </div>

                                <button className="add-to-cart-button button-primary">
                                Add to Cart
                                </button>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
        </>
    );
}