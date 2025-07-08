import { useTheme } from "../context/DarkModeContext";

// Components
import { DownloadResume } from "./DownloadResume";
import { Icon } from "./Icon";

// Constants
import {
  EMAIL_SRC,
  DARK_EMAIL_SRC,
  PHONE_SRC,
  DARK_PHONE_SRC,
} from "../constants/icons";

// Assets
import footerGradientSrc from "../assets/background/footer-gradient.svg";
import darkFooterGradientSrc from "../assets/background/darkmode-gradient-bottom.svg";
import LINKEDIN_SRC from "../assets/linkedin-icon.webp";
import DARK_LINKEDIN_SRC from "../assets/darkmode-linkedin.webp";
import GITHUB_SRC from "../assets/github.webp";
import DARK_GITHUB_SRC from "../assets/darkmode-github.webp";

export function Footer() {
  const { darkMode } = useTheme();
  return (
    <>
      <section className="w-full md:w-4xl lg:w-6xl h-full mx-auto p-4 relative my-title size-fit">
        <h2 className="pb-8 block text-center font-bungee text-title-small sm:text-title-mobile md:text-title">
          Contact me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mx-auto size-fit">
          <span className="flex items-center gap-4">
            <Icon
              src={darkMode ? DARK_EMAIL_SRC : EMAIL_SRC}
              alt="Email icon"
            />
            <a href="mailto:erinmyoung12@gmail.com" target="_blank">
              erinmyoung12@gmail.com
            </a>
          </span>
          <span className="flex items-center gap-4">
            <Icon
              src={darkMode ? DARK_PHONE_SRC : PHONE_SRC}
              alt="Phone icon"
            />
            <a href="tel:+19712217468">(971) 221-7468</a>
          </span>
          <span className="flex items-center gap-4">
            <Icon
              src={darkMode ? DARK_GITHUB_SRC : GITHUB_SRC}
              alt="GitHub icon"
            />
            <a href="https://github.com/erinmyoung" target="_blank">
              github.com/erinmyoung
            </a>
          </span>
          <span className="flex items-center gap-4">
            <Icon
              src={darkMode ? DARK_LINKEDIN_SRC : LINKEDIN_SRC}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/erin-young-0a3b1363"
              target="_blank"
            >
              linkedin.com/in/erin-young-0a3b1363
            </a>
          </span>
        </div>
        <div className="flex items-center justify-center w-full">
          <DownloadResume />
        </div>
        <p className="mt-8 mb-4 text-center font-medium">
          Website built with Vite/React, TypeScript, TailwindCSS, Figma, Framer
          Motion, Material UI, React slick, and Vercel.
        </p>
        <p className="mx-auto size-fit font-medium">
          © {new Date().getFullYear()} copyright. All rights reserved.
        </p>
      </section>
      <img
        src={darkMode ? darkFooterGradientSrc : footerGradientSrc}
        alt="Footer gradient image"
        loading="lazy"
        className="w-screen absolute left-0 bottom-0 right-0 -z-3"
      />
    </>
  );
}
