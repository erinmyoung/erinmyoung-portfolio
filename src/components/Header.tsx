import { useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import useScreenWidth from "../hooks/useScreenSize";

// Components
import { Icon } from "./Icon";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { useTheme } from "../context/DarkModeContext";
import { Arrow } from "./Arrow";

// Assets
import LINKEDIN_SRC from "../assets/linkedin-icon.webp";
import DARK_LINKEDIN_SRC from "../assets/darkmode-linkedin.webp";
import GITHUB_SRC from "../assets/github.webp";
import DARK_GITHUB_SRC from "../assets/darkmode-github.webp";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const strokeDasharray = useTransform(progressValue, [0, 1], [283, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const progressCircle = document.querySelector(
        ".progress-button"
      ) as HTMLButtonElement | null;
      if (progressCircle) {
        progressCircle.disabled = scrollTop === 0;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      className="progress-button fixed bottom-4 right-4 z-10 cursor-pointer disabled:opacity-80 disabled:cursor-auto"
    >
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          className="dark:stroke-darkmode-light stroke-primary stroke-10"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          strokeDasharray="283"
          strokeDashoffset="0"
          style={{ strokeDashoffset: strokeDasharray }}
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 283 }}
          className="dark:stroke-darkmode-primary stroke-dark stroke-10"
        />
      </motion.svg>
      <span className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <Arrow size={80} iconClass="max-w-icon-medium h-icon-medium" />
      </span>
    </button>
  );
}

export default function Header() {
  const { darkMode } = useTheme();
  const screenWidth = useScreenWidth();

  return (
    <div className="w-screen h-screen relative">
      {screenWidth > 460 && <ScrollProgress />}
      <ToggleDarkMode />
      <div className="block bg-white dark:bg-darkmode-secondary py-4 px-8 absolute left-default lg:left-1/4 top-1/2 transform -translate-y-1/2">
        <h1 className="font-bungee text-header-small sm:text-header-mobile md:text-header">
          Erin Young
        </h1>
        <span className="block text-strapline-mobile md:text-strapline mt-4">
          Frontend Engineer
        </span>
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/erinmyoung" target="_blank">
            <Icon
              src={darkMode ? DARK_GITHUB_SRC : GITHUB_SRC}
              selectevents="true"
              size="medium"
              alt="GitHub icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/erin-young-0a3b1363"
            target="_blank"
          >
            <Icon
              src={darkMode ? DARK_LINKEDIN_SRC : LINKEDIN_SRC}
              selectevents="true"
              size="medium"
              alt="LinkedIn icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
