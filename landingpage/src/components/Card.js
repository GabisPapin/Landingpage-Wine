import React from 'react';

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
            <div className='buttons'>
                <button type='button'>Add to Cart</button>
            </div>
        </div>
    )
}