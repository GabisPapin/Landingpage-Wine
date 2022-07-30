import React, { useContext } from 'react';
import LandingPageContext from '../context/LandingPageContext';

export default function Card(){
    const context = useContext(LandingPageContext);
    const { data } = context;
    return(
        <div className='card-container'>
            <div className='images-card'>
                <img className="card-flag" src={data?.items[0].flag} alt="Uma imagem não tão linda" />
            <img className='card-img' src={data?.items[0].image} alt="Uma linda imagem"/>

            </div>
            <h3>{data?.items[0].name}</h3>
        </div>
    )
}