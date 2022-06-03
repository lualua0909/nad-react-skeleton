import MetaInfo from "./MetaInfo";
import { useEffect } from "react";

const PATH_404 = "/404";
const NOT_FOUND_TITLE = "404: Not Found";
const NOT_FOUND_DESCRIPTION = "The requested page could not be found.";

const NotFound404 = () => {
  const isLocationPath = window.location.pathname === PATH_404;

  useEffect(() => {
    if (!isLocationPath) {
      window.location.href = PATH_404;
    }
  }, [isLocationPath]);

  return (
    <div className="container view-wrapper">
      {isLocationPath && (
        <>
          <MetaInfo
            title={NOT_FOUND_TITLE}
            description={NOT_FOUND_DESCRIPTION}
          />
          not found
        </>
      )}
    </div>
  );
};

export default NotFound404;
