import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useTheme } from "../../context/DarkModeContext";
import { Image } from "../../types";

// Components
import { Lightbox } from "./Lightbox";
import { SliderButton } from "./SliderButton";

// Constants
import {
  NEXT_SRC,
  DARK_NEXT_SRC,
  PREV_SRC,
  DARK_PREV_SRC,
} from "../../constants/icons";

export function ImageSlider({
  images,
  sliderKey,
}: {
  images: Image[];
  sliderKey: number;
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const { darkMode } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    lazyload: "ondemand",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: "slick-dots slick-indicators",
    nextArrow: (
      <SliderButton
        src={darkMode ? DARK_NEXT_SRC : NEXT_SRC}
        positionClass="-right-[50px]"
      />
    ),
    prevArrow: (
      <SliderButton
        src={darkMode ? DARK_PREV_SRC : PREV_SRC}
        positionClass="-left-[50px]"
      />
    ),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };

  function handleLightbox(currentIndex: number) {
    setCurrentSlide(currentIndex);
    setLightboxOpen(true);
  }

  function handleLightboxClick() {
    setLightboxOpen(false);
  }

  return (
    <>
      <div className="slider-container relative lg:mx-[60px] pb-4">
        <Slider {...settings} key={sliderKey}>
          {images.length > 0 &&
            images
              .filter((imageItem) => imageItem.src && imageItem.alt)
              .map((imageItem, index) => (
                <div
                  className="w-[320px] h-[320px] snap-start hover:cursor-zoom-in"
                  key={index}
                >
                  <img
                    alt={imageItem?.alt}
                    src={imageItem?.src}
                    width={320}
                    height={320}
                    className="object-cover h-full object-top m-auto p-2"
                    onClick={() => handleLightbox(index)}
                  />
                </div>
              ))}
        </Slider>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={images}
          current={currentSlide}
          handleExitClick={handleLightboxClick}
        />
      )}
    </>
  );
}
