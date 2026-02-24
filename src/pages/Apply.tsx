import { useEffect } from "react";
import ApplyLoadingOverlay from "@/components/ApplyLoadingOverlay";
import { SEO } from "@/components/SEO";

const Apply = () => {
  useEffect(() => {
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdSGT_1I65eDMOIj6wZ4VxFuuT4tpyBI7wCOiZvFfxd8FUg1g/viewform?usp=header";
    const timer = setTimeout(() => {
      window.location.replace(GOOGLE_FORM_URL);
    }, 1500); // Slight delay for direct hits to show the overlay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] bg-background">
      <ApplyLoadingOverlay />
    </div>
  );
};

export default Apply;
