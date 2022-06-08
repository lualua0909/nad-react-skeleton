import React, { Suspense } from "react";
import { Route, Navigate } from "react-router-dom";

const Home = React.lazy(() =>
  import(/* webpackChunkName: "home-page" */ "./Home")
);

const About = React.lazy(() =>
  import(/* webpackChunkName: "about-page" */ "./About")
);

const User = () => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Route>
        <Route path="/" render={(props) => <Home {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
        <Navigate to="/404" />
      </Route>
    </Suspense>
  );
};

export default User;
