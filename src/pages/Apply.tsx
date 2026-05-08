import { useEffect, useState } from "react";
import ApplyLoadingOverlay from "@/components/ApplyLoadingOverlay";

const Apply = () => {
  const [showFallback, setShowFallback] = useState(false);
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdSGT_1I65eDMOIj6wZ4VxFuuT4tpyBI7wCOiZvFfxd8FUg1g/viewform?usp=header";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(GOOGLE_FORM_URL);
    }, 1500); // Slight delay for direct hits to show the overlay

    // Show fallback link if redirect hasn't happened after 3.5s
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center">
      <ApplyLoadingOverlay />
      {showFallback && (
        <a
          href={GOOGLE_FORM_URL}
          className="absolute bottom-10 z-[10001] text-cyan-400 hover:text-cyan-300 underline font-medium tracking-wide drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        >
          Click here if you are not redirected automatically
        </a>
      )}
    </div>
  );
};

export default Apply;
