import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { data } from "./data";
import { useTheme } from "../../context/DarkModeContext";

// Components
import { DownloadResume } from "../DownloadResume";
import { Icon } from "../Icon";
import { SectionTitle } from "../SectionTitle";

// Constants
import { IMAGE_BG_SRC, DARK_IMAGE_BG_SRC } from "../../constants/lines";
import {
  EDUCATION_SRC,
  DARK_EDUCATION_SRC,
  EMAIL_SRC,
  DARK_EMAIL_SRC,
  MAP_SRC,
  DARK_MAP_SRC,
  PHONE_SRC,
  DARK_PHONE_SRC,
} from "../../constants/icons";
import { containerVariants } from "../../constants/animations";

// Assets
import erinSrc from "../../assets/erin-image.webp";

export function About() {
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
        <SectionTitle text="About" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 mx-4 mt-4">
          <div className="block">
            <p>{data.bio}</p>
            <div className="flex flex-col mt-8 gap-4">
              <span className="flex items-center gap-2">
                <Icon src={darkMode ? DARK_MAP_SRC : MAP_SRC} alt="Map icon" />
                {data.location}
              </span>
              <span className="flex items-center gap-2">
                <Icon
                  src={darkMode ? DARK_EMAIL_SRC : EMAIL_SRC}
                  alt="Email icon"
                />
                <a href={`mailto:${data.email}`} target="_blank">
                  {data.email}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Icon
                  src={darkMode ? DARK_PHONE_SRC : PHONE_SRC}
                  alt="Phone icon"
                />
                {data.phone}
              </span>
              <span className="flex items-start gap-2">
                <Icon
                  src={darkMode ? DARK_EDUCATION_SRC : EDUCATION_SRC}
                  alt="Education icon"
                />
                {data.education.school}
                <br />
                {data.education.degree}
                <br />
                {data.education.honors}
                <br />
                {data.education.graduationYear}
              </span>
              <DownloadResume />
            </div>
          </div>
          <div className="block row-1 md:row-auto relative size-fit mx-auto mb-auto top-0">
            <img
              src={erinSrc}
              alt="Erin Young image"
              loading="eager"
              width={320}
              height={320}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-image h-image object-cover rounded-2xl"
            />
            <div className="inline-block relative -z-1">
              <img
                src={darkMode ? DARK_IMAGE_BG_SRC : IMAGE_BG_SRC}
                alt="Image background lines and rectangles"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
