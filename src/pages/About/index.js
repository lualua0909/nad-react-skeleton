import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";

const About = () => (
  <>
    <MetaInfo {...getRouteMetaInfo("About")} />
    About Page
  </>
);

export default About;
