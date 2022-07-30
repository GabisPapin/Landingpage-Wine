import React, { useContext } from "react";
import LandingPageContext from "../context/LandingPageContext";
import Card from "./Card";

export default function CardSlider() {
    const context = useContext(LandingPageContext);

    const { data } = context;
    return(
        <div className="slider-container">
            { data?.items.map((obj) => <Card info={ obj }/>)}
        </div>
    )
}