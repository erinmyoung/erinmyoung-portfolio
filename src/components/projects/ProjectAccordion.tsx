import DOMPurify from "dompurify";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { AccordionProps } from "../../types";

// Components
import { ImageSlider } from "./ImageSlider";
import { Arrow } from "../Arrow";

export function ProjectAccordion({
  title,
  description,
  link,
  images,
  sliderKey,
}: AccordionProps) {
  return (
    <Accordion classes={{ root: "project-accordion" }}>
      <AccordionSummary
        expandIcon={<Arrow />}
        aria-controls={`panel${sliderKey}-content`}
        id={`panel${sliderKey}-header`}
      >
        <div className="flex w-full mr-4 dark:text-white">
          <h3 className="text-strapline-mobile mr-4 font-medium text-black dark:text-white">
            {title}
          </h3>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="dark:text-white">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-darkmode-light text-dark hover:underline block size-fit pb-4"
              aria-label="External link for project"
            >
              {link}
            </a>
          )}
          <div
            className="pb-4 w-full"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          ></div>
          {images.length > 0 && (
            <ImageSlider sliderKey={sliderKey} images={images || []} />
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
