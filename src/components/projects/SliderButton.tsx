import clsx from "clsx";

export function SliderButton(props: {
  onClick?: () => void;
  src: string;
  positionClass: string;
  indexClass?: string;
}) {
  const { onClick, src, positionClass, indexClass = "z-auto" } = props;
  return (
    <button
      className={clsx([
        positionClass,
        indexClass,
        "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed absolute top-1/2 transform -translate-y-1/2 z-20 hover:shadow-crisp-light dark:hover:shadow-crisp-dark duration-400 ease-in-out",
      ])}
      onClick={onClick}
    >
      <img src={src} width={40} height={40} />
    </button>
  );
}
