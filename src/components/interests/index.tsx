import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { data } from "./data";

import { containerVariants } from "../../constants/animations";

export function Interests() {
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
        <h2 className="pb-4 block text-center font-bungee text-title-small sm:text-title-mobile md:text-title relative">
          Interests
        </h2>
        <div className="flex justify-center w-full p-4">
          <ul className="ml-6 mr-0 md:ml-auto md:mr-auto block relative md:w-3/4">
            {data.map((item, index) => (
              <li
                className="list-image-[url(./assets/bullet-point.svg)] dark:list-image-[url(./assets/darkmode-bullet-point.svg)]"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
