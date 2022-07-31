import PropTypes from 'prop-types';
import React from 'react';
import shoppingCart from '../assets/shoppingCart.png';

export default function Card({ info }) {
  return (
    <div className="card-container">
      <div className="images-card">
        <img className="card-flag" src={ info.flag } alt="Bandeira do país de origem" />
        <img className="card-img" src={ info.image } alt="Imagem do vinho" />
      </div>

      <h3 className="wine-title">{ info.name }</h3>
      <h2 className="price">{ `R$ ${info.price.toFixed(2)}` }</h2>
      <div>
        <button className="buttons" type="button">
          <img
            className="shoppingCart-icon"
            src={ shoppingCart }
            alt="icone do carrinho"
          />
          COMPRAR
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  info: PropTypes.shape({
    flag: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
