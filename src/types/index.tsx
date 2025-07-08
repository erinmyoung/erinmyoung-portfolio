export interface AccordionProps {
  title: string;
  description: string;
  link: string;
  images: Image[];
  sliderKey: number;
}

export interface BackgroundImageProps {
  src: string;
  alt: string;
  displayTop?: boolean;
  zIndex?: string;
  hideOnMobile?: boolean;
}

export interface DarkModeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

export interface IconProps {
  src: string;
  alt: string;
  selectevents?: string;
  size?: "small" | "medium" | "large";
}

export interface Image {
  src: string;
  alt: string;
}

export interface IndicatorProps {
  maxIndex: number;
  current: number;
  handleIndicatorClick: (index: number) => void;
}

export interface SectionTitleProps {
  text: string;
  bgColor?: string;
  darkBgColor?: string;
}

export interface StepButtonProps {
  disabled: boolean;
  current: number;
  src: string;
  handleButtonClick: (index: number) => void;
}

export interface TechnologiesCardProps {
  src: string;
  name: string;
  darkModeSrc?: string;
}
