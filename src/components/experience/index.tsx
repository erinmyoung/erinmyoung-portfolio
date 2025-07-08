import clsx from "clsx";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data } from "./data";
import { useTheme } from "../../context/DarkModeContext";

// Components
import { SectionTitle } from "../SectionTitle";

// Constants
import {
  SECTION_SEPARATOR_SRC,
  DARK_SECTION_SEPARATOR_SRC,
} from "../../constants/lines";
import { containerVariants } from "../../constants/animations";

export function Experience() {
  const { darkMode } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="w-full md:w-4xl lg:w-6xl h-full mx-auto relative mt-mobile md:mt-title">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <SectionTitle text="Experience" />
        {data.map((item, index) => (
          <div key={index} className="mt-4 mx-4 mb-6 md:mb-8">
            <h3 className="text-strapline-mobile md:text-strapline font-medium">
              {item?.title}
            </h3>
            <div
              className={clsx([
                item.list.length > 0
                  ? "grid grid-cols-1 md:grid-cols-2 sm:gap-12 mt-4"
                  : "block mt-4",
              ])}
            >
              <div className="flex flex-col gap-4">
                <p className="text-xl">{item?.date}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    aria-label="External link for website"
                    className="dark:text-darkmode-light text-dark hover:underline block size-fit"
                  >
                    {item.link}
                  </a>
                )}
                {item.description && (
                  <div className="block">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.description),
                      }}
                    ></div>
                    {item.descriptionList.length > 0 && (
                      <ul className="mt-2 list-disc ml-6 md:ml-0">
                        {item.descriptionList.map((descItem, descIndex) => (
                          <li
                            key={descIndex}
                            className="list-image-[url(./assets/bullet-point.svg)] dark:list-image-[url(./assets/darkmode-bullet-point.svg)]"
                          >
                            {descItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
              {item.list.length > 0 && (
                <ul className="ml-6 md:ml-0 experience-list">
                  {item.list.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="list-image-[url(./assets/bullet-point.svg)] dark:list-image-[url(./assets/darkmode-bullet-point.svg)]"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {index < data.length - 1 && (
              <img
                className="my-4"
                alt="Section separating border"
                loading="lazy"
                width={730}
                height={64}
                src={
                  darkMode ? DARK_SECTION_SEPARATOR_SRC : SECTION_SEPARATOR_SRC
                }
              />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
