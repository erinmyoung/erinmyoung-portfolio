import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TechnologiesCardProps } from "../types";
import { useTheme } from "../context/DarkModeContext";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

// Components
import { SectionTitle } from "./SectionTitle";
import { Icon } from "./Icon";

// Constants
import {
  BOOTSTRAP_SRC,
  CSS_SRC,
  DJANGO_SRC,
  DARK_DJANGO_SRC,
  DOCKER_SRC,
  FIGMA_SRC,
  FRAMER_SRC,
  GIT_SRC,
  HTML_SRC,
  ILLUSTRATOR_SRC,
  JAVASCRIPT_SRC,
  JINJA_SRC,
  DARK_JINJA_SRC,
  LARAVEL_SRC,
  LESS_SRC,
  DARK_LESS_SRC,
  NEXTJS_SRC,
  DARK_NEXTJS_SRC,
  NODE_SRC,
  NPM_SRC,
  PHOTOSHOP_SRC,
  PYTHON_SRC,
  REACT_SRC,
  TAILWIND_SRC,
  TYPESCRIPT_SRC,
  VERCEL_SRC,
  DARK_VERCEL_SRC,
  VSCODE_SRC,
  VUEJS_SRC,
  XD_SRC,
} from "../constants/technologies";
import { containerVariants } from "../constants/animations";
import GITHUB_SRC from "../assets/github.webp";
import DARK_GITHUB_SRC from "../assets/darkmode-github.webp";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function TechnologiesCard({ src, name, darkModeSrc }: TechnologiesCardProps) {
  const { darkMode } = useTheme();

  return (
    <>
      {darkMode ? (
        <LightTooltip title={name}>
          <Button>
            <Icon
              src={darkModeSrc ? darkModeSrc : src}
              alt={`${name} icon`}
              size="large"
              selectevents="true"
            />
          </Button>
        </LightTooltip>
      ) : (
        <Tooltip title={name}>
          <Button>
            <Icon
              src={src}
              alt={`${name} icon`}
              size="large"
              selectevents="true"
            />
          </Button>
        </Tooltip>
      )}
    </>
  );
}

export function Technologies() {
  const technologies = [
    [JAVASCRIPT_SRC, "JavaScript (ES6+)"],
    [LESS_SRC, "Less CSS", DARK_LESS_SRC],
    [TAILWIND_SRC, "Tailwind CSS"],
    [PYTHON_SRC, "Python"],
    [HTML_SRC, "HTML5"],
    [CSS_SRC, "CSS3"],
    [TYPESCRIPT_SRC, "TypeScript"],
    [REACT_SRC, "React"],
    [NEXTJS_SRC, "NextJS", DARK_NEXTJS_SRC],
    [NODE_SRC, "NodeJS"],
    [DJANGO_SRC, "django", DARK_DJANGO_SRC],
    [VUEJS_SRC, "VueJS"],
    [LARAVEL_SRC, "Laravel"],
    [BOOTSTRAP_SRC, "Bootstrap"],
    [NPM_SRC, "npm"],
    [GIT_SRC, "Git"],
    [JINJA_SRC, "Jinja2", DARK_JINJA_SRC],
    [DOCKER_SRC, "Docker"],
    [FRAMER_SRC, "Framer Motion"],
    [FIGMA_SRC, "Figma"],
    [PHOTOSHOP_SRC, "Adobe Photoshop"],
    [ILLUSTRATOR_SRC, "Adobe Illustrator"],
    [XD_SRC, "Adobe XD"],
    [GITHUB_SRC, "GitHub", DARK_GITHUB_SRC],
    [VERCEL_SRC, "Vercel", DARK_VERCEL_SRC],
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
