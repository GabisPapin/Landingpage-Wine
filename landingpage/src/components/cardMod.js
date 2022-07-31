import React, { useContext } from 'react';
import carimboDesconto from '../assets/carimboDesconto.png';
import discontIcon from '../assets/discontIcon.png';
import gift from '../assets/gift.png';
import LandingPageContext from "../context/LandingPageContext";
import '../css/cardMod.css';

export default function CardMod() {
  const context = useContext(LandingPageContext);

  const { modality, infoModality } = context;
  return(
    <div className='big-div'>
      {
        infoModality.map((el) => (
          <div key={el}>
            <h1 className='essencials'>{el.name}</h1>
            <p className='description-plan'>{el.description}</p>
          </div>
        ))
      }
        <div className='plans-container'>
      {
        modality.map((plan) =>(
          <div className="cardMod-container" key={plan.name}>
                <h3>{plan.name}</h3>
                <h4 className='plan-price'>{`R$ ${plan.price.toFixed(2)}`}</h4>
                <img className='carimbo' src={carimboDesconto} alt="Imagem de um carimbo"/>
                <h3 className='plan-price-disc'>{`R$ ${plan.priceWithDiscount.toFixed(2)}`}</h3>
                <img className='icon' src={discontIcon} alt="Icone de uma etiqueta de desconto"/>
                <h2 className='promotion'>{plan.promotion}</h2>
                { plan.gift && <img className='gift-icon' src={gift} alt="Icone de um presente"/>}
                <h4 className='gift'>{plan.gift}</h4>
                <div className='half-container'/>
          </div>
        ))
      }
      </div>
    </div>
  )
}