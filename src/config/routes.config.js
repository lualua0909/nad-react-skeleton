const DESC_SUFFIX = "description - length <= 160 chars.";

export const routes = [
  {
    path: "/",
    name: "Home",
    metaInfo: {
      title: "Home",
      description: `Home ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/about",
    name: "About",
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
