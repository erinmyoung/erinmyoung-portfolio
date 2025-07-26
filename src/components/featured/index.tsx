import { useState } from "react";

import { Lightbox } from "../projects/Lightbox";
import { SectionTitle } from "../SectionTitle";

// Constants
import {
  THEME_1999_SRC,
  THEME_2000_SRC,
  THEME_2003_SRC,
  THEME_2005_SRC,
  THEME_2011_SRC,
} from "../../constants/projects";

export function Featured() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const images = [
    {
      alt: "Eurogamer 1999 theme",
      src: THEME_1999_SRC,
    },
    {
      alt: "Eurogamer 2000 theme",
      src: THEME_2000_SRC,
    },
    {
      alt: "Eurogamer 2003 theme",
      src: THEME_2003_SRC,
    },
    {
      alt: "Eurogamer 2005 theme",
      src: THEME_2005_SRC,
    },
    {
      alt: "Eurogamer 2011 theme",
      src: THEME_2011_SRC,
    },
  ];

  function handleLightbox(currentIndex: number) {
    setCurrentSlide(currentIndex);
    setLightboxOpen(true);
  }

  function handleLightboxClick() {
    setLightboxOpen(false);
  }

  return (
    <>
      <section className="dark:before:bg-darkmode-secondary before:bg-secondary before:absolute before:h-full before:w-[calc(100vw+40rem)] before:m-0 before:left-[-40rem] before:top-0 w-full md:w-4xl lg:w-6xl h-full mx-auto relative mt-mobile md:mt-title py-8">
        <SectionTitle
          text="Featured"
          bgColor="bg-tertiary"
          darkBgColor="dark:bg-darkmode-secondary"
        />
        <div className="block mt-4 p-4 relative">
          <h3 className="text-strapline-mobile font-medium">
            Eurogamer's 25th Anniversary theme switcher
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 justify-start relative mt-4">
            {images.map((image, index) => (
              <img
                alt={image.alt}
                src={image.src}
                key={index}
                width={300}
                height={300}
                className="cursor-zoom-in object-cover h-full object-top"
                onClick={() => handleLightbox(index)}
              />
            ))}
          </div>
          <div className="block relative mt-4">
            <a
              href="https://www.eurogamer.net/eg25-theme-switcher"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-darkmode-light text-dark hover:underline block size-fit pb-4"
              aria-label="External link for project"
            >
              https://www.eurogamer.net/eg25-theme-switcher
            </a>
            <p>
              Created an interactive theme switcher for Eurogamer's 25th
              anniversary, allowing users to toggle between site designs from
              1999, 2000, 2003, 2005, and 2011. The content of the page could
              not be changed, so all styling was applied with Less CSS. Theme
              stylesheets were preloaded and then toggled on click of the
              corresponding theme button. The feature received positive reader
              feedback and generated 16k interactions in the week it was active.
            </p>
            <br />
            <p>
              <strong>
                "Impressed there are no html changes. This is some expert level
                CSS hacking!"
              </strong>{" "}
              - Luke Reed #7629
              <br />
              <strong>
                "This theme switcher is amazing, congratulation on an amazing
                piece of CSS."
              </strong>{" "}
              - StooMonster #5704
            </p>
          </div>
        </div>
      </section>
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
