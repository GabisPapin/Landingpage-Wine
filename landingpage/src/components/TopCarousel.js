import { FcNext, FcPrevious } from 'react-icons/fc';
import React, { useContext, useEffect } from 'react';
import scratchedPaper from '../assets/scratchedPaper.png';
import LandingPageContext from '../context/LandingPageContext';

const MAGICNUMBER = 15000;

export default function Carousel() {
  const context = useContext(LandingPageContext);
  const { data, index, setIndex } = context;
  const NOVE = 9;
  const CINQUENTA = 50;

  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
      if (index === NOVE) {
        setIndex(0);
      }
    }, MAGICNUMBER);
  }, []);

  const handleClick = ({ target }) => {
    const { id } = target;
    if (id === 'undo') {
      setIndex(index === 0 ? NOVE : index - 1);
    }
    if (id === 'next') {
      setIndex(index === NOVE ? 0 : index + 1);
    }
  };

  return (
    <div className="carousel-container">
      <button
        className="carousel-button"
        id="undo"
        type="button"
        onClick={ (e) => handleClick(e) }
      >
        <FcPrevious className="icons-carousel" />
      </button>
      <img className="scratched-paper" src={ scratchedPaper } alt="scratched Paper" />
      <img className="bottle" src={ data?.items[index].image } alt="" />
      <h3 className="sommelier-comment">
        {`${data?.items[index].sommelierComment
          .split(' ').slice(0, CINQUENTA).join(' ')}...`}
      </h3>
      <button
        className="carousel-button"
        id="next"
        type="button"
        onClick={ (e) => handleClick(e) }
      >
        <FcNext className="icons-carousel" />
      </button>
    </div>
  );
}
