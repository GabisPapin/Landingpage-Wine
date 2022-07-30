import React from 'react';
import logo from '../assets/logo.png';
 
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
                <p>Car</p>
                <p>Perfil</p>
            </div>
        </div>
    )
}