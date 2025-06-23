import clsx from "clsx";
import { SectionTitleProps } from "../types";
import { useTheme } from "../context/DarkModeContext";
import { SECTION_TITLE_SRC, DARK_SECTION_TITLE_SRC } from "../constants/lines";

export function SectionTitle({
  text,
  bgColor = "bg-white",
  darkBgColor = "dark:bg-darkmode-background",
}: SectionTitleProps) {
  const { darkMode } = useTheme();

  return (
    <div
      className={clsx([
        `relative mx-4 md:mx-0 pt-2 pb-6 px-4 ${darkBgColor} ${bgColor}`,
      ])}
    >
      <img
        src={darkMode ? DARK_SECTION_TITLE_SRC : SECTION_TITLE_SRC}
        alt="Section title lines"
        loading="lazy"
        className="absolute left-0 bottom-0 pointer-events-none"
        width={318}
        height={82}
      />
      <h2 className="pl-4 md:pl-8 pb-8 size-fit font-bungee text-title-small sm:text-title-mobile md:text-title">
        {text}
      </h2>
    </div>
  );
}
