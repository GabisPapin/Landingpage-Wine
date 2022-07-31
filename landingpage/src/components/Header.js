import React from 'react';

import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import shoppingList from '../assets/shoppingList.png';

export default function Header() {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <img className="logo" src={ logo } alt="algo" />
        <ul className="list-nav-container">
          <a href="http://localhost:3000" rel="noreferrer">
            <li>Home</li>
          </a>
          <a href="https://www.wine.com.br/loja-vinhos" target="_blank" rel="noreferrer">
            <li>Loja</li>
          </a>
          <a href="https://www.wine.com.br/loja/produtor/" target="_blank" rel="noreferrer">
            <li>Produtores</li>
          </a>
          <a href="https://www.wine.com.br/vinhos-promocao" target="_blank" rel="noreferrer">
            <li>Ofertas</li>
          </a>
          <a href="https://we.wine.com.br/" target="_blank" rel="noreferrer">
            <li>Eventos</li>
          </a>
        </ul>
      </nav>
      <div className="right-nav">
        <input type="text" placeholder="search" />
        <a href="https://www.wine.com.br/sign-in.ep#/identificacao" target="_blank" rel="noreferrer">
          <img className="header-icons" src={ profile } alt="icone do perfil" />
        </a>
        <img
          className="header-icons"
          src={ shoppingList }
          alt="icone do carrinho de compras"
        />
      </div>
    </div>
  );
}
