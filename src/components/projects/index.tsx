import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionTitle } from "../SectionTitle";
import { ProjectAccordion } from "./ProjectAccordion";
import { data } from "./data";

import { containerVariants } from "../../constants/animations";

export function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="dark:before:bg-darkmode-secondary before:bg-secondary before:absolute before:h-full before:w-[calc(100vw+40rem)] before:m-0 before:left-[-40rem] before:top-0 w-full md:w-4xl lg:w-6xl h-full mx-auto relative mt-mobile md:mt-title py-8">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <SectionTitle
          text="Projects"
          bgColor="bg-tertiary"
          darkBgColor="dark:bg-darkmode-secondary"
        />
        <div className="block p-4 relative">
          {data.map((project, index) => (
            <ProjectAccordion
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              images={project?.images}
              sliderKey={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
