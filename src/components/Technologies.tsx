import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TechnologiesCardProps } from "../types";
import { useTheme } from "../context/DarkModeContext";

// Components
import { SectionTitle } from "./SectionTitle";
import { Icon } from "./Icon";

// Constants
import { SUBTITLE_SRC, DARK_SUBTITLE_SRC } from "../constants/lines";
import {
  BOOTSTRAP_SRC,
  CSS_SRC,
  DJANGO_SRC,
  DARK_DJANGO_SRC,
  FIGMA_SRC,
  GIT_SRC,
  HTML_SRC,
  ILLUSTRATOR_SRC,
  JAVASCRIPT_SRC,
  LARAVEL_SRC,
  LESS_SRC,
  DARK_LESS_SRC,
  NEXTJS_SRC,
  DARK_NEXTJS_SRC,
  NPM_SRC,
  PHOTOSHOP_SRC,
  PYTHON_SRC,
  REACT_SRC,
  TAILWIND_SRC,
  TYPESCRIPT_SRC,
  VSCODE_SRC,
  VUEJS_SRC,
  XD_SRC,
} from "../constants/technologies";
import { containerVariants } from "../constants/animations";
import GITHUB_SRC from "../assets/github.webp";
import DARK_GITHUB_SRC from "../assets/darkmode-github.webp";

function TechnologiesCard({ src, name, darkModeSrc }: TechnologiesCardProps) {
  const { darkMode } = useTheme();

  return (
    <div>
      <Icon
        src={darkMode && darkModeSrc ? darkModeSrc : src}
        alt={`${name} icon`}
        size="large"
      />
      <div className="relative mt-6 w-icon-large">
        <img
          src={darkMode ? DARK_SUBTITLE_SRC : SUBTITLE_SRC}
          alt="Subtitle lines"
          loading="lazy"
          width={63}
          height={36}
          className="absolute left-[-6px] bottom-0 pointer-events-none h-[36px]"
        />
        <h3 className="pl-2 pb-2">{name}</h3>
      </div>
    </div>
  );
}

export function Technologies() {
  const technologies = [
    [JAVASCRIPT_SRC, "JavaScript"],
    [LESS_SRC, "Less", DARK_LESS_SRC],
    [TAILWIND_SRC, "TailwindCSS"],
    [PYTHON_SRC, "Python"],
    [HTML_SRC, "HTML"],
    [CSS_SRC, "CSS"],
    [TYPESCRIPT_SRC, "TypeScript"],
    [REACT_SRC, "React"],
    [NEXTJS_SRC, "NextJS", DARK_NEXTJS_SRC],
    [DJANGO_SRC, "django", DARK_DJANGO_SRC],
    [VUEJS_SRC, "VueJS"],
    [LARAVEL_SRC, "Laravel"],
    [BOOTSTRAP_SRC, "Bootstrap"],
    [NPM_SRC, "npm"],
    [GIT_SRC, "Git"],
    [FIGMA_SRC, "Figma"],
    [PHOTOSHOP_SRC, "Adobe Photoshop"],
    [ILLUSTRATOR_SRC, "Adobe Illustrator"],
    [XD_SRC, "Adobe XD"],
    [GITHUB_SRC, "GitHub", DARK_GITHUB_SRC],
    [VSCODE_SRC, "VSCode"],
  ];

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
        <SectionTitle text="Skills" />
        <div className="flex justify-center flex-wrap mt-10 gap-4 md:gap-10 mx-4">
          {technologies.map(([src, name, darkModeSrc]) => (
            <TechnologiesCard
              key={name}
              src={src}
              name={name}
              darkModeSrc={darkModeSrc}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
