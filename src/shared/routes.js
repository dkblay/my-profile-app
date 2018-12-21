import Home from "./components/Home";
import Profile from "./components/Profile";

import { getUserImage } from "./api";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/profile",
    component: Profile,
    fetchInitialData: getUserImage
  }
];

export default routes;
