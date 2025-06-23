import resume from "../assets/Erin_Young_Resume.pdf";

export function DownloadResume() {
  return (
    <a href={resume} download="Erin_Young_Resume.pdf">
      <button className="mt-8 font-bungee text-xl p-4 bg-secondary dark:bg-darkmode-primary dark:text-white dark:border-none border border-primary cursor-pointer md:size-fit w-full hover:shadow-crisp-light dark:hover:shadow-crisp-dark duration-400 ease-in-out">
        Download Resume
      </button>
    </a>
  );
}
