import { useEffect } from "react";

const Apply = () => {
  useEffect(() => {
    window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSdSGT_1I65eDMOIj6wZ4VxFuuT4tpyBI7wCOiZvFfxd8FUg1g/viewform?usp=header");
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to application form...</p>
    </div>
  );
};

export default Apply;
