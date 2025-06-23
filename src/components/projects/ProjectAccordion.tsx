import DOMPurify from "dompurify";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { AccordionProps } from "../../types";
import { useTheme } from "../../context/DarkModeContext";

// Components
import { ImageSlider } from "./ImageSlider";
import { Icon } from "../Icon";
import { Arrow } from "../Arrow";

// Constants
import {
  EXTERNAL_LINK_SRC,
  DARK_EXTERNAL_LINK_SRC,
} from "../../constants/icons";

export function ProjectAccordion({
  title,
  description,
  link,
  images,
  sliderKey,
}: AccordionProps) {
  const { darkMode } = useTheme();

  return (
    <Accordion classes={{ root: "project-accordion" }}>
      <AccordionSummary
        expandIcon={<Arrow />}
        aria-controls={`panel${sliderKey}-content`}
        id={`panel${sliderKey}-header`}
      >
        <div className="grid gap-2 md:flex w-full mr-4 dark:text-white">
          <h3 className="text-strapline-mobile mr-4">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="-mt-1 size-fit"
              aria-label="External link for project"
            >
              <Icon
                src={darkMode ? DARK_EXTERNAL_LINK_SRC : EXTERNAL_LINK_SRC}
                selectevents="true"
                alt="External link"
              />
            </a>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="pb-8 dark:text-white">
          <div
            className="pb-4 w-full"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          ></div>
          <ImageSlider sliderKey={sliderKey} images={images || []} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
