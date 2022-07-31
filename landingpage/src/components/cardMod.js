import React, { useContext } from 'react';
import LandingPageContext from "../context/LandingPageContext";

export default function CardMod() {
  const context = useContext(LandingPageContext);

  const { modality } = context;
  return(
    <div>
      {
        modality.map((plan) =>(
          <div className="cardMod-container" key={plan.name}>
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
            <h3>{plan.priceWithDiscount}</h3>
            <h1>{plan.promotion}</h1>
            <h4>{plan.gift}</h4>
          </div>
        ))
      }
    </div>
  )
}