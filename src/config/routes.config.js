import React from "react";
import Home from "src/pages/Home";
import About from "src/pages/About";

// const About = React.lazy(() =>
//   import(/* webpackChunkName: "about-page" */ "../pages/About")
// );

// const About = React.lazy(() =>
//   import(/* webpackChunkName: "about-page" */ "../pages/About")
// );

const DESC_SUFFIX = "description - length <= 160 chars.";

export const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
    metaInfo: {
      title: "Home",
      description: `Home ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/about",
    name: "About",
    Component: About,
    metaInfo: {
      title: "About",
      description: `About ${DESC_SUFFIX}`,
    },
  },
];

export const getRouteMetaInfo = (name) => {
  const route = routes.find((x) => x.name === name);
  return route?.metaInfo ?? {};
};
