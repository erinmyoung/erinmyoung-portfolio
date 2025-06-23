import clsx from "clsx";
import { BackgroundImageProps } from "../types";

export default function BackgroundImage({
  src,
  alt,
  displayTop = true,
  zIndex = "-z-1",
  hideOnMobile = false,
}: BackgroundImageProps) {
  return (
    <div
      className={clsx([
        `w-[calc(100vw+40rem)] md:w-screen absolute left-[-40rem] md:left-0 right-0 overflow-hidden ${zIndex} pointer-events-none select-none`,
        displayTop ? "top-0" : "bottom-0",
        hideOnMobile ? "hidden md:block" : "block",
      ])}
    >
      <img src={src} alt={alt} width={1260} height={1260} className="w-full" />
    </div>
  );
}
