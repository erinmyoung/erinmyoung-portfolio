import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { RESUME_SRC } from "../constants/resume";

export function DownloadResume() {
  const [isLoading, setIsLoading] = useState(false);
  const [label, setLabel] = useState("Download Resume");

  const downloadFile = async () => {
    try {
      setLabel("Downloading...");
      setIsLoading(true);
      const response = await axios.get(RESUME_SRC, {
        responseType: "blob",
      });
      saveAs(response.data, "Erin_Young_Resume.pdf");
    } catch (error) {
      console.error("Error downloading file:", error);
      setLabel("Something went wrong");
    } finally {
      setIsLoading(false);
      setLabel("Download Resume");
    }
  };

  return (
    <button
      onClick={downloadFile}
      disabled={isLoading}
      aria-label="Download Resume"
      className="mt-8 font-bungee text-xl p-4 bg-secondary dark:bg-darkmode-primary dark:text-white dark:border-none border border-primary cursor-pointer md:size-fit w-full hover:shadow-crisp-light dark:hover:shadow-crisp-dark duration-400 ease-in-out"
    >
      {label}
    </button>
  );
}
