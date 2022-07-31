import React from 'react';
import jovinho from '../assets/jovinho.png';

export default function partnerCard(){
    return(
        <div className='partnerCard-container'>
          <div className='left-adverts'>
            <h1>TODO MUNDO ASSINA WINE!!!</h1>
            <h3>SEJA SÓCIO WINE</h3>
          </div>
            <div>
              <img className='partnerCard-img' src={jovinho} alt="Modelo tomando vinho"/>
            </div>
            <div className='right-adverts'>
              <h2>ASSINE E GANHE:</h2>
              <div className='adverts-box'>
                <h4>+5 VINHOS GRÁTIS</h4>
                <p>1 vinho extra por mês</p>
                <h4>+2 TAÇAS DE CRISTAL</h4>
              </div>
              <button>ASSINE AGORA</button>
            </div>
        </div>
    )
}