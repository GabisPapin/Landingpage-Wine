import React from 'react';
 
export default function Header() {
    return (
        <div className='header-container'>
            <nav>
                <img alt='algo' />
                <ol className='list-nav-container'>
                    <li>Home</li>
                    <li>Lojas</li>
                    <li>Produtores</li>
                    <li>Contatos</li>
                    <li>Ofertas</li>
                </ol>
            </nav>
            <div>
                <input type="text" placeholder="search" />
            </div>
            <p>Car</p>
            <p>Perfil</p>
        </div>
    )
}