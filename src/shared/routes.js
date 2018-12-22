import Home from "./components/Home";
import Profile from "./components/Profile";

import { getUserInfo } from "./api";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/profile",
    component: Profile,
    fetchInitialData: getUserInfo
  }
];

export default routes;
