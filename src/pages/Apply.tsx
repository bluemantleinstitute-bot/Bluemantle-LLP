import { useEffect } from "react";

const Apply = () => {
  useEffect(() => {
    window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLScdzvb2SutLHUTOrkDGoQG76iYjizeIELLbvhBi4O0uEHRqzQ/viewform?usp=header");
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20 pb-12 flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to application form...</p>
    </div>
  );
};

export default Apply;
