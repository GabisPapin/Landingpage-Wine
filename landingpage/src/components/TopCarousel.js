import React, { useContext, useEffect } from "react";
import scratchedPaper from "../assets/scratchedPaper.png";
import LandingPageContext from "../context/LandingPageContext";

const MAGICNUMBER = 15000;

export default function Carousel() {
    const context = useContext(LandingPageContext);
    const { data, index, setIndex } = context;

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1);
            if(index === 9) {
               setIndex(0);
            }
        }, MAGICNUMBER);
    }, [index, setIndex])


    return (
        <div className="carousel-container">
            <img  className="scratched-paper" src={scratchedPaper} alt="scratched Paper" />
            <img className="bottle" src={data?.items[index].image} alt="" />
            <h3 className="sommelier-comment">
                { `${data?.items[index].sommelierComment.split(' ').slice(0, 50).join(' ')}...`}
                </h3>
        </div>
    )
}