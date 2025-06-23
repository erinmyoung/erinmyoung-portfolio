import { SectionTitle } from "../SectionTitle";

export function Featured() {
  return (
    <section className="dark:before:bg-darkmode-secondary before:bg-secondary before:absolute before:h-full before:w-[calc(100vw+40rem)] before:m-0 before:left-[-40rem] before:top-0 w-full md:w-4xl lg:w-6xl h-full mx-auto relative mt-mobile md:mt-title py-8">
      <SectionTitle
        text="Featured"
        bgColor="bg-tertiary"
        darkBgColor="dark:bg-darkmode-secondary"
      />
      <div className="flex gap-6">
        <img />
        <p></p>
      </div>
    </section>
  );
}
