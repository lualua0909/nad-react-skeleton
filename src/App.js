import React, { Suspense } from "react";
import Layout from "./Layout";
import { MetaInfo, NotFound404 } from "src/components";
import { usePageTracker, useScrollToTop } from "src/hooks";
import { Route, Routes } from "react-router-dom";

const MainRoute = React.lazy(() =>
  import(/* webpackChunkName: "main-route" */ "./pages")
);

const App = () => {
  useScrollToTop();
  usePageTracker();

  return (
    <Layout>
      <MetaInfo />
      <Suspense fallback={<div className="loading" />}>
        <Routes>
          <Route path="/" component={MainRoute} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
