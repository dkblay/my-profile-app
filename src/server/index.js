import express from "express";
import serialize from "serialize-javascript";
import bodyParser from "body-parser";
import session from "express-session";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import App from "../shared/components/App";
import routes from "../shared/routes";
import passportConfig from "./config/passport-config";
import authRoutes from "./routes/auth-routes";
import apiRoutes from "./routes/api-routes";
import { join } from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SESSION_SECRET }));

passportConfig(app);

app.use(express.static("public"));
app.use(express.static(join("node_modules/bootstrap/dist")));

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.get(["/", "/profile"], async (req, res, next) => {
  if (req.url.includes("profile") && !req.user) {
    return res.redirect("/");
  }
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const fetchInitialData = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.user)
    : Promise.resolve({});

  const context = await fetchInitialData;

  const initialMarkup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const initialContent = { initialData: serialize(context), initialMarkup };
  res.render("index", { ...initialContent });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running on port: ${port}`)
);
