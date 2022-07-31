import React from 'react';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import shoppingList from '../assets/shoppingList.png';
 
export default function Header() {
    return (
        <div className='header-container'>
            <nav className='nav-container'>
                <img className='logo' src={ logo } alt='algo' />
                <ul className='list-nav-container'>
                    <li>Home</li>
                    <li>Lojas</li>
                    <li>Produtores</li>
                    <li>Contatos</li>
                    <li>Ofertas</li>
                </ul>
            </nav>
            <div className='right-nav'>
                <input type="text" placeholder="search" />
                <img className="header-icons" src={ shoppingList } alt="icone do carrinho de compras"/>
                <img className="header-icons" src={ profile } alt="icone do perfil"/>
            </div>
        </div>
    )
}