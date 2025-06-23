import clsx from "clsx";
import { IconProps } from "../types";

export function Icon({ src, alt, selectevents, size = "small" }: IconProps) {
  const sizeVariants = {
    small: "w-icon-small h-icon-small",
    medium: "w-icon-medium h-icon-medium",
    large: "w-icon-large h-icon-large",
  };

  return (
    <img
      src={src}
      alt={alt}
      width={100}
      height={100}
      className={clsx([
        sizeVariants[size],
        selectevents === "true" ? "" : "select-none pointer-events-none",
      ])}
    />
  );
}
