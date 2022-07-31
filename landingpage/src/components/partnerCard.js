import React from 'react';
import jovinho from '../assets/jovinho.png';
import logoGrande from '../assets/logoGrande.jpg';

export default function partnerCard(){
    return(
        <div className='partnerCard-container'>
          <div className='left-adverts'>
            <img className="logogrande" src={logoGrande} alt="Logo marca da Wine" />
            <button type='button' className='socio'>ASSINE</button>
          </div>
            <div className='right-adverts'>
                <h2>ASSINE E GANHE:</h2>
              <div className='adverts-box'>
                <h4>+ 5 VINHOS GRÁTIS</h4>
                <h4>+ 2 TAÇAS DE CRISTAL</h4>
                <h4>+ 1 VINHO EXTRA POR MÊS</h4>
              </div>
            </div>
            <div>
              <img className='partnerCard-img' src={jovinho} alt="Modelo tomando vinho"/>
            </div>
        </div>
    )
}