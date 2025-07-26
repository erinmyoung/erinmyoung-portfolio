import "./App.css";
import { lazy, Suspense } from "react";
import { useTheme } from "./context/DarkModeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Components
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";

// Assets
import bgLinesSrc from "./assets/background/bg-lines.svg";
import darkBgLinesSrc from "./assets/background/darkmode-lines.svg";
import bgShapesSrc from "./assets/background/bg-shapes.svg";
import darkBgShapesSrc from "./assets/background/darkmode-shapes.svg";
import headerGradientSrc from "./assets/background/header-gradient.svg";
import darkHeaderGradientSrc from "./assets/background/darkmode-gradient-top.svg";

// Dynamic imports
const About = lazy(() =>
  import("./components/about/index").then((module) => ({
    default: module.About,
  }))
);
const Technologies = lazy(() =>
  import("./components/Technologies").then((module) => ({
    default: module.Technologies,
  }))
);
const Projects = lazy(() =>
  import("./components/projects/index").then((module) => ({
    default: module.Projects,
  }))
);
const Experience = lazy(() =>
  import("./components/experience/index").then((module) => ({
    default: module.Experience,
  }))
);
const Interests = lazy(() =>
  import("./components/interests/index").then((module) => ({
    default: module.Interests,
  }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({
    default: module.Footer,
  }))
);

// Fallback loading spinner
const fallback = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--green)]" />
    </div>
  );
};

export default function App() {
  const { darkMode } = useTheme();

  return (
    <main className="relative z-1 overflow-hidden">
      <img
        src={darkMode ? darkHeaderGradientSrc : headerGradientSrc}
        alt="Header gradient image"
        className="w-screen absolute left-0 top-0 right-0 -z-3"
      />
      <BackgroundImage
        src={darkMode ? darkBgLinesSrc : bgLinesSrc}
        alt="Background lines"
        hideOnMobile={true}
      />
      <BackgroundImage
        src={darkMode ? darkBgShapesSrc : bgShapesSrc}
        alt="Background shapes"
        zIndex="-z-2"
      />
      <Header />
      <Suspense fallback={fallback()}>
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Interests />
        <Footer />
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
