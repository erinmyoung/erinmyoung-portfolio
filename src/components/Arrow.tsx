import { useTheme } from "../context/DarkModeContext";
import { ARROW_DOWN_SRC, DARK_ARROW_DOWN_SRC } from "../constants/icons";

interface ArrowProps {
  size?: number;
  iconClass?: string;
}

export function Arrow({
  size = 28,
  iconClass = "max-w-icon-small h-icon-small",
}: ArrowProps) {
  const { darkMode } = useTheme();

  return (
    <img
      src={darkMode ? DARK_ARROW_DOWN_SRC : ARROW_DOWN_SRC}
      loading="lazy"
      alt="Accordion arrow"
      height={size}
      width={size}
      className={iconClass}
    />
  );
}
