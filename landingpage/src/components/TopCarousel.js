import React, { useContext, useEffect } from "react";
import LandingPageContext from "../context/LandingPageContext";

export default function Carousel() {
    const context = useContext(LandingPageContext);
    const { data, index, setIndex } = context;

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1);
            if(index === 9) {
               setIndex(0);
            }
            console.log(index);
        }, 8000);
    }, [index, setIndex])


    return (
        <div className="carousel-container">
            <img src={data?.items[index].image} alt="" />
            <h3 className="sommelier-comment">{ data?.items[index].sommelierComment}</h3>
        </div>
    )
}