import React, { useState, useEffect } from 'react';
import { Slide } from './Slide';
import { Button } from './Button';
import { slideImages } from '../assets/data';
import '../styles/Slider.css';

function Slider() {
  const [slide, setSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slide + 1);
  const [disabledPrev, setDisabledPrev] = useState(null);
  const [disabledNext, setDisabledNext] = useState(null);

  useEffect(() => {
    if (slide <= 0) {
      setDisabledPrev((status) => (status = true));
    }

    if (slide >= slideImages.length - 1) {
      setDisabledNext((status) => (status = true));
    }
  }, [slide]);

  function next() {
    if (slide < slideImages.length - 1) {
      setSlide((prev) => prev + 1);
      setCurrentSlide((prev) => prev + 1);
    }
    setDisabledPrev((status) => (status = false));
  }

  function prev() {
    if (slide > 0) {
      setSlide((prev) => prev - 1);
      setCurrentSlide((prev) => prev - 1);
    }
    setDisabledNext((status) => (status = false));
  }

  const pagination = slideImages.map((item) => (
    <span
      key={item.id}
      className={`${currentSlide === item.id ? 'current__slide' : ''}`}
    >
      {slideImages.indexOf(item) + 1}
    </span>
  ));

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <Slide image={slideImages[slide].img} />
        <div className="navigation__buttons">
          <Button disabled={disabledPrev} onClick={prev} content={'Prev'} />
          <Button disabled={disabledNext} onClick={next} content={'Next'} />
        </div>
      </div>
      <div className="pagination">{pagination}</div>
    </div>
  );
}

export { Slider };
