import React, { useEffect, useState } from 'react';
import fetchProducts from '../services/fetchProducts';
import LandingPageContext from './LandingPageContext';

export default function LandingPageProvider(props) {
    const { children } = props;

    const [data, setData] = useState();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts(1, 10);
            setData(products);
            console.log(products);
        }

        getProducts();
    }, []);

    const context = {
        data,
        index,
        setIndex,
    };

    return (
        <LandingPageContext.Provider value={ context } >
            { children }
        </LandingPageContext.Provider>
    )
}