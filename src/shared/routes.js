import Home from "./Home";
import Profile from "./Profile";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  }
];

export default routes;
