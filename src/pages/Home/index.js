import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";

const Home = () => (
  <>
    <MetaInfo {...getRouteMetaInfo("Home")} />
    <h1 className="title">HOME</h1>
  </>
);

export default Home;
