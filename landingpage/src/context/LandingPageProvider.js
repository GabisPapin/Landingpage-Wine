import React, { useEffect, useState } from 'react';
import { fetchModalities, fetchProducts } from '../services/fetchProducts';
import LandingPageContext from './LandingPageContext';

export default function LandingPageProvider(props) {
    const { children } = props;

    const [data, setData] = useState();
    const [index, setIndex] = useState(0);
    const [infoModality, setInfoModality] = useState([]);
    const [modality, setModality] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts(1, 12);
            setData(products);
            // console.log(products);
        }

        getProducts();

        const getModalities = async () => {
            const modalities = await fetchModalities();
            setInfoModality(modalities);
            const data = modalities.map((el) => el.plans)
            setModality(data[0]);
            // console.log(data[0]);
        }
    
        getModalities();
    }, []);

    const context = {
        data,
        index,
        setIndex,
        modality,
        infoModality,
    };

    return (
        <LandingPageContext.Provider value={ context } >
            { children }
        </LandingPageContext.Provider>
    )
}