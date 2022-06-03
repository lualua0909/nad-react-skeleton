import { useLocation } from "react-router-dom";
import { default as useUpdateEffect } from "./useUpdateEffect";

const useScrollToTop = () => {
  const location = useLocation();

  useUpdateEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollToTop;
