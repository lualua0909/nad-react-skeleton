import { memo } from "react";

const Feature = memo(({ description, package_name }) => (
  <p className="feature">feature</p>
));

Feature.displayName = "Feature";

export default Feature;
