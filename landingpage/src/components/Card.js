import React from 'react';
import shoppingCart from '../assets/shoppingCart.png';

export default function Card({info}){
    // const context = useContext(LandingPageContext);
    // const { data } = context;
    return(
        <div className='card-container'>
            <div className='images-card'>
                <img className="card-flag" src={info.flag} alt="Uma imagem não tão linda" />
            <img className='card-img' src={info.image} alt="Uma linda imagem"/>

            </div>
            <h3 className='wine-title'>{info.name}</h3>
            <h2 className='price'>{`R$ ${info.price.toFixed(2)}`}</h2>
            <div>
                <button className='buttons'><img className="shoppingCart-icon" src={ shoppingCart } alt="icone do carrinho" /> Adicionar ao carrinho</button>
            </div>
        </div>
    )
}