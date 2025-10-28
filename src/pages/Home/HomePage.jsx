import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductsGrid';

import './HomePage.css'


export function HomePage({ cart }) {

    // setup useState to store that fetching data as a products and setProducts use to set that data to store in products..
    const [products, setProducts] = useState([]);


    // useEffect is used to stop request send more to in refresh after page it control it and any changes in that then it request.
    useEffect(() => {
        const getHmeData = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        getHmeData();
    }, []);
    // that [] empty array can find that changes is that array is empty request send one and not request again if any change in that backend then catch it this empty array then re-send request.
    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );
}