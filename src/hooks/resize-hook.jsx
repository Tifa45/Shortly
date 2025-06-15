import { useEffect, useState } from "react";

function useResized() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    

    return () => window.removeEventListener("resize", handleResize);
  }, [isDesktop]);
  return isDesktop;
}

export default useResized;
