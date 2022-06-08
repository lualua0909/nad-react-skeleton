import Layout from "./Layout";
import { MetaInfo, NotFound404 } from "src/components";
import { usePageTracker } from "src/hooks";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "src/config/routes.config";

const App = () => {
  usePageTracker();
  const location = useLocation();

  return (
    <Layout>
      <MetaInfo />
      <Routes location={location}>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Layout>
  );
};

export default App;
