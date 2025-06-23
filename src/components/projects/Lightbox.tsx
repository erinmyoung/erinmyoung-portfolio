import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Image } from "../../types";
import { useTheme } from "../../context/DarkModeContext";
import { SliderButton } from "./SliderButton";

// Constants
import {
  EXIT_IMAGE_SRC,
  DARK_EXIT_IMAGE_SRC,
  NEXT_SRC,
  DARK_NEXT_SRC,
  PREV_SRC,
  DARK_PREV_SRC,
} from "../../constants/icons";

export function Lightbox({
  images,
  current,
  handleExitClick,
}: {
  images: Image[];
  current: number;
  handleExitClick: () => void;
}) {
  const { darkMode } = useTheme();

  const settings = {
    dots: false,
    lazyload: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: current,
    nextArrow: (
      <SliderButton
        src={darkMode ? DARK_NEXT_SRC : NEXT_SRC}
        positionClass="right-[16px]"
        indexClass="z-10"
      />
    ),
    prevArrow: (
      <SliderButton
        src={darkMode ? DARK_PREV_SRC : PREV_SRC}
        positionClass="left-[16px]"
        indexClass="z-10"
      />
    ),
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  function handleLightboxClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if ((e.target as HTMLElement).nodeName !== "IMG") handleExitClick();
  }

  return (
    <div
      className="slider-container bg-black/75 fixed block top-0 left-0 right-0 bottom-0 w-screen h-screen z-10 p-4 hover:cursor-zoom-out"
      onClick={(e) => handleLightboxClick(e)}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-[calc(100vh-16px)] max-w-full flex m-auto object-contain p-2"
          />
        ))}
      </Slider>
      <button
        onClick={handleExitClick}
        className="cursor-pointer absolute right-4 top-4 hover:shadow-crisp-dark duration-400 ease-in-out"
      >
        <img
          loading="lazy"
          src={darkMode ? DARK_EXIT_IMAGE_SRC : EXIT_IMAGE_SRC}
          width={50}
          height={50}
          alt="Exit lightbox"
        />
      </button>
    </div>
  );
}
